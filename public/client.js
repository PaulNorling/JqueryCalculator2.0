$(document).ready(onReady);

let equation='';

function onReady() {
    console.log("onReady")
    $('#oneButton').on('click', equationInput)
    $('#twoButton').on('click', equationInput)
    $('#threeButton').on('click', equationInput)
    $('#fourButton').on('click', equationInput)
    $('#fiveButton').on('click', equationInput)
    $('#sixButton').on('click', equationInput)
    $('#sevenButton').on('click', equationInput)
    $('#eightButton').on('click', equationInput)
    $('#nineButton').on('click', equationInput)
    $('#zeroButton').on('click', equationInput)
    $('#decimalButton').on('click', equationInput)
    $('#plusButton').on('click', equationInput)
    $('#minusButton').on('click', equationInput)
    $('#multiplyButton').on('click', equationInput)
    $('#divdeButton').on('click', equationInput)
    $('#leftParentheses').on('click', equationInput)
    $('#rightParentheses').on('click', equationInput)
    $('#equalsButton').on('click',equals)
    $('#clearButton').on('click', clearInput)
    $('#clearAll-btn').on('click', clearAll)
}

function equationInput() {
    $('#calcInput').empty();
    equation += $(this).text();
    $('#calcInput').append(equation)
}

// send user input to server
function equals() {
    $('#calcInput').empty();
    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: {
          equation: equation,
        }
        }).then(function(response) {
        console.log(response);
        clearInput();
        getCalculation();
      }).catch(function() {
        alert('Invalid Entry');
      })
}

//requst updated calculator history from server
function getCalculation() {   
    $.ajax({
      method: 'GET',
      url: '/calculation'
    }).then(function(response){
      appendToDom(response);
    }).catch(function(error){
      alert('Fail', error);
    })
  
}

// render to dom
function appendToDom(response) {
    $('#calcHistory').empty(); 
    for(let i = 0; i<response.length; i++){
      $('#calcHistory').prepend(`
      <li>${response[i].equation}=${response[i].answer}</li>  
      `)
      $('#calcInput').empty();
      $('#calcInput').append(`${response[i].answer}`)
      equation=`${response[i].answer}`
    }
}

//clear input values
function clearInput() {
    $('#calcInput').empty();
    equation='';
}

//request sever to clear history set all fields to empty
function clearAll() {    
    clearInput();
    $.ajax({
      method: 'DELETE',
      url: '/calculation'
    }).then(function(response){
      getCalculation();
      console.log(response);
    }).catch(function(error){
      alert('something went wrong',error)
    })
}
  

