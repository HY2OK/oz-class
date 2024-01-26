const apiRandomDogs = 'https://dog.ceo/api/breeds/image/random/5'
const apiAllBreeds = 'https://dog.ceo/api/breeds/list/all'
let request1 = new XMLHttpRequest()
const request2 = new XMLHttpRequest()

const header = document.getElementById('header')
const main = document.getElementById('main')
const input = document.getElementById('filter-text')
const button = document.getElementById('filter-button')
const select = document.getElementById('filter-select')
const more = document.getElementById('more')
const tothetop = document.getElementById('tothetop')
const resetBtn = document.querySelector('.reset-btn')

const currentDogs = []

function displayDogs(item) {
  const dogImgDiv = document.createElement('div')
  dogImgDiv.classList.add('flex-item')
  dogImgDiv.innerHTML = `<img src=${item}>`
  main.appendChild(dogImgDiv)
}

function fetchData() {
  request1.open('get', apiRandomDogs)
  request1.addEventListener('load', () => {
    const response = JSON.parse(request1.response)
    response.message.forEach((item) => {
      currentDogs.push(item)
      displayDogs(item)
    })
  })
  request1.send()
}

window.addEventListener('load', () => {
  fetchData()

  request2.open('get', apiAllBreeds)
  request2.addEventListener('load', () => {
    const response = JSON.parse(request2.response)
    Object.keys(response.message).forEach((item) => {
      const option = document.createElement('option')
      option.textContent = item
      option.value = item
      select.appendChild(option)
    })
  })
  request2.send()
})

button.addEventListener('click', () => {
  main.innerHTML = ``
  let filteredDogs = currentDogs.filter((item) => item.indexOf(input.value) !== -1)
  input.value = ''
  filteredDogs.forEach((item) => displayDogs(item))
})

select.addEventListener('change', () => {
  main.innerHTML = ``
  let filteredDogs = currentDogs.filter((item) => {
    return item.indexOf(select.value) !== -1
  })

  filteredDogs.forEach((item) => displayDogs(item))
})

more.addEventListener('click', async () => {
  request1.open('get', apiRandomDogs)
  request1.send()
})

tothetop.addEventListener('click', () => {
  window.scrollTo({ top: 0 })
})

resetBtn.addEventListener('click', () => {
  main.innerHTML = ``
  request1 = new XMLHttpRequest()
  currentDogs.length = 0
  fetchData()
})
