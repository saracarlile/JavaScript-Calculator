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
        this.style.background = "#520b0a";
    }
    function changeBg() {
        this.style.background = "#757575";
        this.style.color = "#FFFFFF";
    }
     function changeBgDarkRedLeave() {
        this.style.background = "#a72d45";
    }
    function changeBgLeave() {
        this.style.background = "#BDBDBD";
        this.style.color = "#000000";
    }
});