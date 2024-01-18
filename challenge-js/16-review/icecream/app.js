const $add = document.querySelector('.add')
const $print = document.querySelector('.print')
const $list = document.querySelector('.list')
const $container = document.querySelector('.container')

let list = ['메로나']

function addIce() {
  const ice = prompt('추가하고 싶은 아이스크림의 이름을 입력해주세요')
  if (ice === '') return
  if (list.includes(ice)) {
    alert('이미 있는 아이스')
    return
  }
  list.push(ice)
}

function printIce() {
  list.forEach((ice) => alert(ice))
}

function listToText() {
  $container.textContent = list.join(', ')
}

function init() {
  listToText()
  $add.addEventListener('click', addIce)
  $print.addEventListener('click', printIce)
  $list.addEventListener('click', listToText)
}

init()
