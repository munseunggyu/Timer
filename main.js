const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");

leftBtn.addEventListener("click", (e) => start(e));
rightBtn.addEventListener("click", (e) => start(e));
let pause = false;
let timer;
function start(e) {
  let hour, min, sec;
  console.log(e.currentTarget.lastElementChild);
  let time = +hourEl.value * 3600 + +minEl.value * 60 + +secEl.value;

  if (e.currentTarget.dataset.name === "left") {
    if (pause === true) {
      pause = false;
      e.currentTarget.lastElementChild.innerText = "start";
      clearInterval(timer);
      return;
    } else {
      if (time === 0) {
        alert("시간을 입력해주세요");
        return;
      } else if (time < 0) {
        alert("시간을 제대로 입력해주세요.");
        hourEl.value = "";
        minEl.value = "";
        secEl.value = "";
        return;
      }
      pause = true;
      e.currentTarget.lastElementChild.innerText = "pause";
    }
  }
  if (e.currentTarget.dataset.name === "right") {
    clearInterval(timer);
    pause = false;
    hourEl.value = "";
    minEl.value = "";
    secEl.value = "";
    leftBtn.lastElementChild.innerText = "start";
    return;
  }
  timer = setInterval(() => {
    if (time === 0) {
      clearInterval(timer);
      alert("타미어가 끝나 브렀으");

      return;
    }
    time--;
    min = Math.floor(time / 60);
    hour = Math.floor(min / 60);
    sec = time % 60;
    min = min % 60;
    hourEl.value = String(hour).padStart(2, "0");
    minEl.value = String(min).padStart(2, "0");
    secEl.value = String(sec).padStart(2, "0");
  }, 1000);
}
