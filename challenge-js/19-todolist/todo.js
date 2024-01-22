const todoList = document.querySelector('#todo-list')
const todoForm = document.querySelector('#todo-form')
let todoArr = []

function saveTodos() {
  const todoString = JSON.stringify(todoArr)
  localStorage.setItem('todoList', todoString)
}

function loadTodos() {
  const myTodos = localStorage.getItem('todoList')
  if (myTodos !== null) {
    todoArr = JSON.parse(myTodos)
    displayTodos()
  }
}

loadTodos()

function handleTodoDelBtnClick(clickedId) {
  todoArr = todoArr.filter((aTodo) => {
    return aTodo.todoId !== clickedId
  })
  displayTodos()
  saveTodos()
}

function handleTodoItemClick(clickedId) {
  todoArr = todoArr.map((aTodo) => {
    if (aTodo.todoId === clickedId) {
      return {
        ...aTodo,
        todoDone: !aTodo.todoDone,
      }
    } else {
      return aTodo
    }
  })
  displayTodos()
  saveTodos()
}

function displayTodos() {
  todoList.innerHTML = ''
  todoArr.forEach((aTodo) => {
    const todoItem = document.createElement('li')
    const todoDelBtn = document.createElement('span')
    todoDelBtn.textContent = ' x'
    todoItem.textContent = aTodo.todoText
    todoItem.title = '클릭하면 완료됨'
    if (aTodo.todoDone) {
      todoItem.classList.add('done')
    } else {
      todoItem.classList.add('yet')
    }
    todoDelBtn.title = '클릭하면 삭제됨'

    todoItem.addEventListener('click', () => {
      handleTodoItemClick(aTodo.todoId)
    })

    todoDelBtn.addEventListener('click', () => {
      handleTodoDelBtnClick(aTodo.todoId)
    })

    todoItem.appendChild(todoDelBtn)
    todoList.appendChild(todoItem)
  })
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const toBeAdded = {
    todoText: todoForm.todo.value,
    todoId: new Date().getTime(),
    todoDone: false,
  }
  todoForm.todo.value = ''
  todoArr.push(toBeAdded)
  displayTodos()
  saveTodos()
})
