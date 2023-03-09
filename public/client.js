$(document).ready(onReady);

let number='';

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
}

function numberConcat() {
    number += $(this).text();
    $('#calcInput').val(number)
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