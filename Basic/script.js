
function ClickMe() {
    alert("Hello!");
}

var nav = document.getElementsByClassName("main-nav")[0];
nav.style.background = "none";

var navul = nav.getElementsByTagName("ul")[0];
navul.style.listStyle = "none";
navul.style.display = "flex";
navul.style.justifyContent = "center";

var navli = navul.getElementsByTagName("li");
for (var i = 0; i < navli.length; i++) {
    navli[i].style.margin = "10px 20px";
}

var nava = navul.getElementsByTagName("a");
for (var i = 0; i < nava.length; i++) {
    nava[i].style.animationName = "anim3";
    nava[i].style.animationDuration = "10s";
    nava[i].style.animationIterationCount = "infinite";
    nava[i].style.animationTimingFunction = "ease-in-out";
    nava[i].style.textDecoration = "none";
    nava[i].style.fontWeight = "bold";
}

