const $input = document.querySelector('#user')
const $btn = document.querySelector('.btn')
const $result = document.querySelector('.result')

const R_S_P = ['바위', '가위', '보']

$btn.addEventListener('click', () => {
  const user = $input.value
  const computer = R_S_P[Math.floor(Math.random() * 3)]
  let result = ''

  if (!R_S_P.includes(user)) {
    alert('입력 오류')
    $input.value = ''
    return
  }

  if (user === computer) {
    result = '비겼습니다!'
  } else if (user === '바위') {
    if (computer === '가위') result = '이겼습니다!'
    else if (computer === '보') result = '졌습니다!'
  } else if (user === '가위') {
    if (computer === '보') result = '이겼습니다!'
    else if (computer === '바위') result = '졌습니다!'
  } else if (user === '보') {
    if (computer === '바위') result = '이겼습니다!'
    else if (computer === '가위') result = '졌습니다!'
  }

  $result.textContent = `당신의 선택: ${user} / 컴퓨터의 선택: ${computer} / 결과: ${result}`
})
