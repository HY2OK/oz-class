const tbody = document.querySelector('.table-body')
const hScore = document.querySelector('.high-score')

const SCORE = [
  { name: '짱구', score: 45 },
  { name: '맹구', score: 75 },
  { name: '철수', score: 95 },
  { name: '훈이', score: 50 },
  { name: '유리', score: 68 },
  { name: '수지', score: 86 },
]

window.addEventListener('load', () => {
  tbody.innerHTML = SCORE.map(({ name, score }) => {
    return `<tr>
        <td>${name}</td>
        <td>${score}</td>
      </tr>`
  }).join('')
})

hScore.textContent = SCORE.filter(({ score }) => score >= 75)
  .sort((a, b) => b.score - a.score)
  .map(({ name }) => name)
  .join(', ')
