document.addEventListener("DOMContentLoaded", function (event) {
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

    var st = [];  //st array holds values from button elements until funcAC/funcCE functions are used to clear/edit array
    var total = 0;
    var resultDisplay = document.getElementById('result');  // display on calculator
    var helpDisplayText = document.getElementById('help-text');

    function updateTotal() {
        disableButtion();
        if (st.length >= 3) {
            var a = st[st.length - 1];
            var b = st[st.length - 2];
            if (a === "=") {
                a = "";
            }
            if (b === "=") {
                b = "";
                resultDisplay.textContent = a.toString();
            }
            else {
                var rst_eval = eval(total + b + a);
                total = Math.round(rst_eval * 100000000) / 100000000; //truncate repeating decimals to eight decimal places   
                resultDisplay.textContent = total.toString();
            }
        }
        else {
            var rt = st.join(' ');
            var rt_removeEqual = rt.replace(/=/gi, '');
            var rteval = eval(rt_removeEqual);
            total = Math.round(rteval * 100000000) / 100000000;
            resultDisplay.textContent = total.toString();
        }

        helpDisplayText.textContent = " ";

        for (var j = 0; j < st.length; j++) {
            if (st[j] != undefined) {
                if (st[j] !== "=") {
                    helpDisplayText.textContent += " " + st[j];
                }
            }
        }
    }



    function funcAC() {  //AC clears all 
        st = [];
        resultDisplay.textContent = ' ';
        total = 0;
        helpDisplayText.textContent = ' ';
        for (var i = 0; i < elements.length; i++) {
            elements[i].disabled = false;
        }
    }

    function funcCE() {  //CE clears last entry
        var test = st[st.length - 1];
        var f = parseInt(test, 10);
        if (Number.isInteger(f)) {
            st.pop();
            resultDisplay.textContent = st[st.length - 1];
        }
    }

    function identifyOperator() {  // multiply and divide buttons
        var op = this.textContent;
        if (op === "÷") {
            op = "/";
        }
        else {
            op = "*";
        }
        if (st.length > 0) {  // if this isn't the first entry in str array
            var test = st[st.length - 1]; // check to see if last index of str array is a number (helps to filter out multiple operators in a row in st array)
            var f = parseInt(test, 10);
            if (Number.isInteger(f)) {  // if the last index is a number, push / or * operator
                updateTotal();
                st.push(op);
            }
            else { // if previous index is operator, remove operator from st array and add new operator
                st.pop();
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
                updateTotal();
                st.push(sub);  // add minus sign to array
            }
            else {
                st.pop();
                st.push(sub);
            }
        }
    }

    function plus() {
        var pls = "+";
        resultDisplay.textContent = ' ';
        if (st.length > 0) {
            var test = st[st.length - 1];
            var f = parseInt(test, 10);
            if (Number.isInteger(f)) {
                updateTotal();
                st.push(pls);
            }
            else {
                st.pop();
                st.push(pls);
            }
        }
    }

    function decimal() {
        var plainDecimal = ".";
        var zeroDecimal = "0.";
        if (st.length === 0) {
            st[0] == zeroDecimal;
            resultDisplay.textContent = st[st.length - 1];
        }
        var test = st[st.length - 1];
        var f = parseInt(test, 10);
        if (Number.isInteger(f)) {
            updateTotal();
            st[st.length - 1] += plainDecimal;
            var removeExtraDecimalHold = st[st.length - 1];
            var fixedExtraDecimal = removeExtraDecimalHold.split('.');
            var fixedExtraDecimal = fixedExtraDecimal.shift() + (fixedExtraDecimal.length ? '.' + fixedExtraDecimal.join('') : ''); //used to remove all decimals except first used
            st[st.length - 1] = fixedExtraDecimal;
            resultDisplay.textContent = fixedExtraDecimal;
        }
        else if (test === "=") {
            st = [];
            total = 0;
            st.push(zeroDecimal);
            helpDisplayText.textContent = zeroDecimal;
            resultDisplay.textContent = zeroDecimal;
        }
        else {
            st.push(zeroDecimal);
            resultDisplay.textContent = st[st.length - 1];
        }
    }

    function funcNumber() {
        disableButtion();
        resultDisplay.textContent = ' ';
        var num = this.textContent;
        if (st.length === 0) {
            total = num.toString();
        }
        var test = st[st.length - 1];
        var f = parseInt(test, 10);
        if (Number.isInteger(f)) {
            st[st.length - 1] += num;
            resultDisplay.textContent = st[st.length - 1];
        }
        else if (test === "=") {
            st = [];
            total = 0;
            st.push(num);
            helpDisplayText.textContent = num;
            resultDisplay.textContent = num;
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
                updateTotal();
                st = [];
                st.push(total, "=");
            }
        }
    }

    function disableButtion() {
        var testStringLength = resultDisplay.textContent;
        if (testStringLength.length > 12) {
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].id !== 'AC') {
                    elements[i].disabled = true;
                }
                else {
                    elements[i].disabled = false;
                }
            }
        }
    }


});

