$(document).ready(function () {
    var elements = document.getElementsByClassName('btn-lg');
    // create an array of calculator buttons, loop through the array to assign proper click event handler functions
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

    var result = '';  //result variable for calculator display
    var st = [];  //st array holds elements until equal button
    var resultDisplay = document.getElementById('result');

    function funcAC() {

    }

    function funcCE() {
        result = '';
        resultDisplay.textContent = result;
    }

    function identifyOperator() {
        var op = this.textContent;
        if (st.length > 0) {
            var test = st[st.length - 1];
            var f = parseInt(test, 10);
            if (Number.isInteger(f)) {
                st.push(op);
                return st;
            }
        }
    }

    function subtract() {
        var sub = "-";
        if (st.length > 0) {
            var test = st[st.length - 1];
            var f = parseInt(test, 10);
            if (Number.isInteger(f)) {
                st.push(sub);
                return st;
            }
        }
    }

    function plus() {
        var pls = "+";
        if (st.length > 0) {
            var test = st[st.length - 1];
            var f = parseInt(test, 10);
            if (Number.isInteger(f)) {
                st.push(pls);
                return st;
            }
        }
    }

    function decimal() {

    }

    function funcNumber() {
        var num = this.textContent;
        console.log(st);
        var test = st[st.length - 1];
        var f = parseInt(test, 10);
        if (Number.isInteger(f)) {
            st[st.length - 1] += num;
        }
        else {
            st.push(num);
        }
        return st;
    }


    function equals() {
        var reslt = st.join(' ');
        console.log(reslt);
        st = [];
        return console.log(eval(reslt));
    }

    // var st= 2 + operator + 5;
    // console.log(eval(st));
    //  eval(myArray[0] + myArray[1] + myArray[2]);
    //The eval function takes a string and then returns the value of that string considered as a math operation


});