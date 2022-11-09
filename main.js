const start = document.querySelector('.start')
const hourEl = document.querySelector('.hour')
const minEl = document.querySelector('.min')
const secEl = document.querySelector('.sec')

// 타이머 시작
start.addEventListener('click',
(e) => {
  startTimer(+hourEl.value,+minEl.value,+secEl.value)
})

function startTimer(hv,mv,sv){
  console.log('hi')
  if(hv <0 || mv <0 || sv <0 ){
    alert('시간을 제대로 입력해주세요.')
    return
  }
  let hour, min, sec,checkMin;
  let time = hv*60*60 + mv*60 + sv
  if(time === 0) return
  // if(start.lastElementChild.textContent === 'start'){

  // }
  setInterval(function(){
    if(time === 0) { // 0이면 정지
      clearInterval()
      return
    }
    // console.log(start.firstElementChild)
    // console.log(start.lastElementChild)
    time--; // 1초마다 증가, 타이머의 경우 time--;

      hour = Math.floor(time/3600);
      checkMin = Math.floor(time/60);
      sec = time%60
      min = checkMin%60

      let th = hour;
      let tm = min;
      let ts = sec;
      
      // 한자리일 경우 처리
      if(th < 10){
          th = "0" + hour;
      }
      if(tm < 10){
          tm = "0" + min;
      }
      if(ts < 10){
          ts = "0" + sec;
      }

      // 함수 호출 당시 받은 object의 html 교체
      hourEl.vlaue = th
      minEl.value = tm
      secEl.value = ts
      
  }
, 1000);
}

const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click',reset)

function reset(){
  clearInterval(setInterval)
}