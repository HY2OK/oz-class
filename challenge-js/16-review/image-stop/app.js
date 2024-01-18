const $container = document.querySelector('.container')
const $btn = document.querySelector('.stop')

const imgUrl = ['./image/1.jpg', './image/2.jpg', './image/3.jpg']
let cnt = 0
let toggle = true

$container.style.backgroundImage = `url(${imgUrl[2]})`

const changeImg = () => {
  $container.style.backgroundImage = `url(${imgUrl[cnt]})`

  if (cnt === 2) cnt = 0
  else cnt++
}

let interval = setInterval(changeImg, 500)

$btn.addEventListener('click', () => {
  if (toggle) {
    clearInterval(interval)
    toggle = false
  } else {
    interval = setInterval(changeImg, 500)
    toggle = true
  }
})
