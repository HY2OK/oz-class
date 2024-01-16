const $calc = document.querySelector('.calculator');
const $field = document.querySelector('.calcField');

$calc.addEventListener('click', (e) => {
  switch (e.target.className) {
    case 'btn':
      if ($field.innerText === '0') {
        $field.innerText = e.target.name;
        return;
      }
      $field.innerText += e.target.name;
      break;

    case 'reset':
      $field.innerText = '0';
      break;

    case 'result':
      try {
        const result = new Function('return ' + $field.innerText)();
        $field.innerText = Math.round(result * 1000) / 1000;
      } catch (error) {
        alert('유효하지 않은 식');
      }
      break;

    default:
      break;
  }
});
