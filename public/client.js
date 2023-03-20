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
    $('#equalsButton').on('click',equals)
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
      }).catch(function(error) {
        alert(error);
      })
}

// function two() {
//     number += '2';
//     $('#calcInput').val(number)
// }

// function three() {
//     number += '3';
//     $('#calcInput').val(number)
// }

// function four() {
//     number += '4';
//     $('#calcInput').val(number)
// }

// function five() {
//     number += '5';
//     $('#calcInput').val(number)
// }

// function six() {
//     number += '3';
//     $('#calcInput').val(number)
// }

// function seven() {
//     number += '7';
//     $('#calcInput').val(number)
// }

// function eight() {
//     number += '8';
//     $('#calcInput').val(number)
// }

// function nine() {
//     number += '9';
//     $('#calcInput').val(number)
// }

// function zero() {
//     number += '0';
//     $('#calcInput').val(number)
// }