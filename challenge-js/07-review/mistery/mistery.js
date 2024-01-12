const $input = document.querySelector('.numInput');
const $btn = document.querySelector('.numSubmit');
const $hint = document.querySelector('.hint');
const $replay = document.querySelector('.replay');

let randomNumber = Math.floor(Math.random() * 100) + 1;

$btn.addEventListener('click', (e) => {
  e.preventDefault();
  let inputNumer = $input.value;

  if (inputNumer > 100 || inputNumer <= 0) {
    $input.value = '';
    alert('1부터 100사이의 숫자를 입력하세요');
    return;
  }

  if (inputNumer == randomNumber) {
    alert('좀 잘찍네? 정답');
    $replay.style.display = 'block';
  } else if (inputNumer > randomNumber) {
    $hint.innerText = `힌트 : 숫자가 커요! 줄여볼까요?!`;
  } else if (inputNumer < randomNumber) {
    $hint.innerText = `힌트 : 숫자가 너무 작아요! 조금 더 높여보세요!`;
  }
});

$replay.addEventListener('click', (e) => {
  $input.value = '';
  randomNumber = Math.floor(Math.random() * 100) + 1;
});
