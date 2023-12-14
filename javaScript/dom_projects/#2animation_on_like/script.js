var con = document.querySelector("#container");

var heart = document.querySelector("i");

con.addEventListener("dblclick", function () {
    heart.style.transform = "translate(0%,0%) scale(1)";
    heart.style.opacity = 0.8;
    setTimeout(function () {
        heart.style.opacity = 0;
    }, 1000);
    setTimeout(function () {
        heart.style.transform = "translate(-10%,-10%) scale(0)";
    }, 2000);
});

setTimeout