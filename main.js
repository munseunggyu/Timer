const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')
const hourEl = document.querySelector('.hour')
const minEl = document.querySelector('.min')
const secEl = document.querySelector('.sec')

leftBtn.addEventListener('click' , (e) => start(e))
rightBtn.addEventListener('click' ,(e) => start(e))
let pause = false
let timer
function start(e){
  let hour,min,sec
  if(e.currentTarget.dataset.name === 'left'){
    if(pause === true){ 
      pause = false
      clearInterval(timer)
      return
    }else{
      pause = true
    }
  }
  if(e.currentTarget.dataset.name === 'right'){
    clearInterval(timer)
    pause = false
    hourEl.value = ''
    minEl.value = ''
    secEl.value = ''
    return
  }
  let time = +hourEl.value*3600 + +minEl.value*60 + +secEl.value
  timer  = setInterval(() => {
    if(time === 0) {
  
      clearInterval(timer)
      return
    }
    time --
    min = Math.floor(time/60);
    hour = Math.floor(min/60);
    sec = time%60;
    min = min%60;
    hourEl.value = String(hour).padStart(2,'0')
    minEl.value = String(min).padStart(2,'0')
    secEl.value = String(sec).padStart(2,'0')
  },1000)
}