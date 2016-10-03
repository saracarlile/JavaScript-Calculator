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
        result = '';
        st = [];
        console.log(st);
        resultDisplay.textContent = result;
        return st;
    }

    function funcCE() {
        console.log(st);
        st.pop();
        resultDisplay.textContent = st[st.length -1];
    }

    function identifyOperator() {
        var op = this.textContent;
        if (op === "÷") {
            op = "/";
        }
        else {
            op = "*";
        }
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
                if(st.length >= 3) {
                    console.log(st);
                    var a = st[st.length - 3 ];
                    var ops = st[st.length - 2];
                    var b = st[st.length - 1];
                    resultDisplay.textContent = eval(a + ops + b);
                }
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
        var reslt = st.join(' ');  //join st arrray into sring
        console.log(reslt);
        var res = eval(reslt);
        console.log(res);
        resultDisplay.textContent = res;
        return res;
    }

});