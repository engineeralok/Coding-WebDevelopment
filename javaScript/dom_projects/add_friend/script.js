var isStatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var isCheck = 0;

btn.addEventListener("click", function () {
    if (isCheck == 0) {
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        btn.style.color = "black";
        btn.style.backgroundColor = "#dadada";
        isCheck = 1;
        console.log("hello");
    } else {
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        btn.style.color = "white";
        btn.style.backgroundColor = "cadetblue";
        isCheck = 0;
        console.log("hello again");
    }
})
