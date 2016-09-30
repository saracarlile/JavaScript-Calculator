$(document).ready(function () {
    var elements = document.getElementsByClassName('btn-lg');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].id === 'AC' || elements[i].id === 'CE') {
            elements[i].addEventListener("mouseenter", changeBgDarkRed, false);
            elements[i].addEventListener("mouseleave", changeBgDarkRedLeave, false);
        }
        else {
            elements[i].addEventListener("mouseenter", changeBg, false);
            elements[i].addEventListener("mouseleave", changeBgLeave, false);
        }
    }
    function changeBgDarkRed() {
        console.log("red");
    }
    function changeBg() {
        console.log("dark grey");
    }
     function changeBgDarkRedLeave() {
        console.log("red leave");
    }
    function changeBgLeave() {
        console.log("dark grey leave");
    }
});