const start = document.querySelector('.start')
const hourEl = document.querySelector('.hour')
const minEl = document.querySelector('.min')
const secEl = document.querySelector('.sec')
start.addEventListener('click',() => startTimer(+hourEl.value,+minEl.value,+secEl.value))
function startTimer(hv,mv,sv){
  if(hv <0 || mv <0 || sv <0 ){
    alert('시간을 제대로 입력해주세요.')
    return
  }
  console.log(hv,mv,sv)
  var hour, min, sec;
  let time = hv*60*60 + mv*60 + sv
  var timer = setInterval(function(){
    if(time === 0) return
    time--; // 1초마다 증가, 타이머의 경우 time--;

      min = Math.floor(time/60);
      hour = Math.floor(min/60);
      sec = time%60;
      min = min%60;

      var th = hour;
      var tm = min;
      var ts = sec;
      
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