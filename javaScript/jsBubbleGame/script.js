var timer = 60;
var score = 0;
var hitrn;

// event bubbling : - 
// jispe click karoge wo element par event raise hoga, aur event listener na milne pr event element ke parent pr listener dhoondhenga aur waha bhi na milne par event parent ke parent ke parent pr dhoodhenga. 

function increaseScore() {
   score += 10;
   document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
   hitrn = Math.floor(Math.random() * 10);
   document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
   var clutter = "";
   for (var i = 1; i < 161; i++) {
      var rn = Math.floor(Math.random() * 10);
      clutter += `<div class="bubble">${rn}</div>`;
   }
   document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
   var timeInterval = setInterval(() => {
      if (timer > 0) {
         timer--;
         document.querySelector("#timerValue").textContent = timer;
      } else {
         clearInterval(timeInterval);
         document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
      }
   }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
 var clickedNum = Number(details.target.textContent);
   if(clickedNum === hitrn ){
      increaseScore();
      makeBubble();
      getNewHit();
   }
   // alert(details.target);
});



runTimer();
makeBubble();
getNewHit();
