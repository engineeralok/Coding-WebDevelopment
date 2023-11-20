var clutter = ""

for (var i = 1; i < 181; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${i}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;