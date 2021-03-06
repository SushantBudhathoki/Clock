const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

const toggleBtn = document.querySelector('.toggle')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

toggleBtn.addEventListener('click', () => {
  const html = document.querySelector('html')

  html.classList.toggle('dark')

  if(html.classList.contains('dark')){
    toggleBtn.innerText = ("Light Mode")
  } else {
    toggleBtn.innerText = ("Dark Mode")
  }
})

setTime()

setInterval(setTime,1000)

function setTime() {
  const time = new Date();

  const month = time.getMonth() 
  const day = time.getDay()
  const date = time.getDate()

  const hours = time.getHours()
  const hoursForClock = hours % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,59,0,360)}deg)`

  timeEl.innerHTML =  `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} <span>${ampm}</span>`

  console.log(time)
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

}

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}