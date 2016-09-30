$(document).ready(function () {
    var elements = document.getElementsByClassName('btn-lg');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].id === 'AC') {
            elements[i].addEventListener("click", funcAC, false);
        }
        else if (elements[i].id === 'CE') {
            elements[i].addEventListener("click", funcCE, false);
        }
        else if (elements[i].id === 'divide') {
            elements[i].addEventListener("click", identifyOperator, false);
        }
        else if (elements[i].id === 'multiply') {
            elements[i].addEventListener("click", identifyOperator, false);
        }
        else if (elements[i].id === 'subtract') {
            elements[i].addEventListener("click", identifyOperator, false);
        }
        else if (elements[i].id === 'plus') {
            elements[i].addEventListener("click", identifyOperator, false);
        }
        else if (elements[i].id === 'equals') {
            elements[i].addEventListener("click", equals, false);
        }
        else {
            elements[i].addEventListener("click", funcNumber, false);
        }
    }

    var result = '';
    var operator = ' ';
    var resultDisplay = document.getElementById('result');

    function funcAC() {

    }
    function funcCE() {
        result = '';
        resultDisplay.textContent = result;
    }
     function identifyOperator() {
         var op = this.textContent;
         return op;        
    }
     
    function funcNumber() {

    }




});