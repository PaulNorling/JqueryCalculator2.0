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
    equation += $(this).text();
    $('#calcInput').val(equation)
}

// send user input to server
function equals() {
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
    $('#calcInput').val('');
    operator = null;
    inputNumber='';
    $('#output').empty(); 
    $('#calculation').empty();
    for(let i = 0; i<response.length; i++){
      $('#output').prepend(`
      <li>${response[i].equation}=${response[i].answer}</li>  
      `)
      $('#calculation').empty();
      $('#calculation').append(`${response[i].answer}`)
    }
  
}

//clear input values and unselect operator
function clearInput() {
    $('#calcInput').val('');
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
  

