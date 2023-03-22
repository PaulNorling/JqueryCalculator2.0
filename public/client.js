$(document).ready(onReady);

let inputNumber='';

let operator='';

let numberOne='';

let numberTwo='';

function onReady() {
    console.log("onReady")
    $('#oneButton').on('click', numberConcat)
    $('#twoButton').on('click', numberConcat)
    $('#threeButton').on('click', numberConcat)
    $('#fourButton').on('click', numberConcat)
    $('#fiveButton').on('click', numberConcat)
    $('#sixButton').on('click', numberConcat)
    $('#sevenButton').on('click', numberConcat)
    $('#eightButton').on('click', numberConcat)
    $('#nineButton').on('click', numberConcat)
    $('#zeroButton').on('click', numberConcat)
    $('#plusButton').on('click', setOperator)
    $('#minusButton').on('click', setOperator)
    $('#multiplyButton').on('click', setOperator)
    $('#divdeButton').on('click', setOperator)
    $('#equalsButton').on('click',equals)
    $('#clearButton').on('click', clearInput)
    $('#clearAll-btn').on('click', clearAll)
}

function numberConcat() {
    inputNumber += $(this).text();
    $('#calcInput').val(inputNumber)
}

function setOperator() {
    $('#calcInput').val('');
    numberOne=inputNumber;
    inputNumber='';
    operator = $(this).text();
    console.log(operator, numberOne)
}

function equals() {
    numberTwo=inputNumber;
    console.log(numberOne, operator, numberTwo)
    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: {
          numberOne: numberOne,
          numberTwo: numberTwo,
          operator: operator
        }
        }).then(function(response) {
        console.log(response);
        getCalculation();
      }).catch(function(error) {
        alert(error);
      })
}

function getCalculation() {   
    $.ajax({
      method: 'GET',
      url: '/calculation'
    }).then(function(response){
      console.log(response);
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
      <li>${response[i].numberOne}${response[i].operator}${response[i].numberTwo}=${response[i].answer}</li>  
      `)
      console.log(response[i].answer)
      $('#calculation').empty();
      $('#calculation').append(`${response[i].answer}`)
    }
  
  }

//clear input values and unselect operator
function clearInput() {
    $('#calcInput').val('');
    numberOne=null;
    numberTwo=null;
    inputNumber='';
    operator = null;
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
  

