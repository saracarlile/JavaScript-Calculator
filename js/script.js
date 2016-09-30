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
            elements[i].addEventListener("click", divide, false);
        }
        else if (elements[i].id === 'multiply') {
            elements[i].addEventListener("click", multiply, false);
        }
        else if (elements[i].id === 'subtract') {
            elements[i].addEventListener("click", subtract, false);
        }
        else if (elements[i].id === 'plus') {
            elements[i].addEventListener("click", plus, false);
        }
        else {
            elements[i].addEventListener("click", funcNumber, false);
        }
    }

    function funcAC() {

    }
    function funcCE() {

    }
    function funcNumber() {

    }




});