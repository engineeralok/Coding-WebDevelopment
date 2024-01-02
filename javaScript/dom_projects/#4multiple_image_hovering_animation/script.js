var elem = document.querySelectorAll('.elem');
var elemImage = document.querySelectorAll('.elem img');

elem.forEach(element => {
    element.addEventListener("mousemove", function (dets) {
        element.childNodes[3].style.left = dets.x + "px";
        element.childNodes[3].style.top = dets.y - 50 + "px";
    });
    element.addEventListener("mouseenter", function (dets) {
        element.childNodes[3].style.opacity = 1;
    });
    element.addEventListener("mouseleave", function (dets) {
        element.childNodes[3].style.opacity = 0;
    });
});

