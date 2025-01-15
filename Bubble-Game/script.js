function getNewHit() {
    let rn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = rn;

}
function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 144; i++) {
    let ran = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${ran}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
  let timer = 60;
  let timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerint);
    }
  }, 1000);
}


runTimer();
makeBubble();
getNewHit();