$(document).ready(function () {
    var elements = document.getElementsByClassName('btn-lg');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].id === 'AC') {
            elements[i].addEventListener("click", funcAC, false);
        }
        else if (elements[i].id === 'CE') {
            elements[i].addEventListener("click", funcCE, false);
        }
        else if (elements[i].id === 'divide' || elements[i].id === 'multiply') {
            elements[i].addEventListener("click", identifyOperator, false);
        }
        else if (elements[i].id === 'subtract') {
            elements[i].addEventListener("click", subtract, false);
        }
        else if (elements[i].id === 'plus') {
            elements[i].addEventListener("click", plus, false);
        }
        else if (elements[i].id === 'period') {
            elements[i].addEventListener("click", decimal, false);
        }
        else if (elements[i].id === 'equals') {
            elements[i].addEventListener("click", equals, false);
        }
        else {
            elements[i].addEventListener("click", funcNumber, false);
        }
    }

    var result = '';
    var st = [];
    var resultDisplay = document.getElementById('result');

    function funcAC() {

    }
    function funcCE() {
        result = '';
        resultDisplay.textContent = result;
    }
    function identifyOperator() {
        var op = this.textContent;
        return st.push(op);
    }
    function subtract() {
        var sub = "-";
        console.log(st);
        return st.push(sub);
    }

    function plus() {
        var pls = "+";
        console.log(st);
        return st.push(pls);
    }

    function decimal() {
    
    }

    function funcNumber() {
        var num = this.textContent;
         console.log(st);
        return st.push(num);
    }

  // var st= 2 + operator + 5;
  // console.log(eval(st));



});