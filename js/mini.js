/* toggling audio */


var vid = document.getElementById("myVideo");
function myFunction() {
    vid.muted = true;
    document.getElementById("demo").setAttribute('onclick', 'myFunctiontwo()')
    document.getElementById("ho").className = "bi bi-volume-mute";


}

function myFunctiontwo() {
    vid.muted = false;
    document.getElementById("demo").setAttribute('onclick', 'myFunction()')

    document.getElementById("ho").className = "bi bi-volume-up";


}


/* hiding unhiding navbar */
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
}



