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

    var st = [];  //st array holds button elements until funcAC/funcCE functions are used to clear/edit array
    var resultDisplay = document.getElementById('result');  // display on calculator

    function funcAC() {  //AC clears all 
        st = [];
        resultDisplay.textContent = ' ';
        return st;
    }

    function funcCE() {  //CE clears last entry
        console.log(st);
        st.pop();
        resultDisplay.textContent = st[st.length - 1];
    }

    function identifyOperator() {  // multiply and divide buttons
        var op = this.textContent;
        if (op === "÷") {
            op = "/";
        }
        else {
            op = "*";
        }
        if (st.length > 0) {  // if this isn't the first entry in string
            var test = st[st.length - 1]; // check to see if last index of string is a number (helps to filter out multiple operators in a row in st array)
            var f = parseInt(test, 10);
            if (Number.isInteger(f)) {  // if the last index is a number, push / or * operator
                st.push(op);
            }
        }
    }

    function subtract() {
        var sub = "-";
        if (st.length > 0) {
            var test = st[st.length - 1];
            var f = parseInt(test, 10);
            if (Number.isInteger(f)) {
                var rt = st.join(' ');
                var rteval = eval(rt);
                resultDisplay.textContent = rteval.toString();  // update display with current total if last index is a number
                st.push(sub);  // add minus sign to array
            }
        }
    }

    function plus() {
        var pls = "+";
        if (st.length > 0) {
            var test = st[st.length - 1];
            var f = parseInt(test, 10);
            if (Number.isInteger(f)) {
                var rt = st.join(' ');
                var rteval = eval(rt);
                resultDisplay.textContent = rteval.toString();
                st.push(pls);
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
            resultDisplay.textContent = st[st.length - 1];
        }
        else {
            st.push(num);
            resultDisplay.textContent = num;
        }
    }


    function equals() {
        if (st.length > 0) {
            var test = st[st.length - 1];
            var f = parseInt(test, 10);
            if (Number.isInteger(f)) {
                var reslt = st.join(' ');  //join st arrray into sring
                console.log(reslt);
                var res = eval(reslt);
                console.log(res);
                resultDisplay.textContent = res;
            }
        }
    }

});