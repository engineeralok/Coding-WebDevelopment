var arr = [
    {
        dp: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1616091093714-c64882e9ab55?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1616091093623-cf4b7bbd2e18?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1617961940217-9ddb3338670e?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1617961940214-ae863cb58f1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1612553688496-ed9c69e2e7a8?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1612553688536-7afc18d8af3d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

var clutter = "";
var stories = document.querySelector("#stories");
arr.forEach(function (element, index) {
    clutter += `<div class="story">
    <img id="${index}" src="${element.dp}" alt="">
</div>`;
})

stories.innerHTML = clutter;
var fullScreen = document.querySelector("#full-screen");
stories.addEventListener('click', function (event) {
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${arr[event.target.id].story})`;
    // window.location.href = arr[event.target.id].story;
    startStory();
    setTimeout(function () {
        fullScreen.style.display = "none";
    }, 3000)
})

const storyBar = document.getElementById("story-bar");

function startStory() {
    storyBar.style.width = "0";
    setTimeout(function () {
        storyBar.style.width = "20%";
    }, 50);
    setTimeout(function () {
        storyBar.style.width = "40%";
    }, 100);
    setTimeout(function () {
        storyBar.style.width = "100%";
    }, 100);
}
