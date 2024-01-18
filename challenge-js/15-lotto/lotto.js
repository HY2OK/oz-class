const todaySpan = document.querySelector('#today')
const numbersDiv = document.querySelector('.numbers')
const drawBtn = document.querySelector('#draw')
const resetBtn = document.querySelector('#reset')

let lottoNumbers = []

const today = new Date()
let year = today.getFullYear()
let month = today.getMonth() + 1
let date = today.getDate()
todaySpan.textContent = `${year}년 ${month}월 ${date}일`

function paintNumber(number) {
  const eachNumDiv = document.createElement('div')
  eachNumDiv.classList.add('eachnum')
  eachNumDiv.style.backgroundColor = getRandomColor()
  eachNumDiv.textContent = number
  numbersDiv.append(eachNumDiv)
}

function resetLottos() {
  lottoNumbers.splice(0, 6)
  numbersDiv.innerHTML = ''
}

function getRandomColor() {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

drawBtn.addEventListener('click', () => {
  if (lottoNumbers.length === 6) resetLottos()

  while (lottoNumbers.length < 6) {
    let rn = Math.floor(Math.random() * 45) + 1

    if (lottoNumbers.indexOf(rn) === -1) {
      lottoNumbers.push(rn)
      paintNumber(rn)
    }
  }
})

resetBtn.addEventListener('click', () => resetLottos())
