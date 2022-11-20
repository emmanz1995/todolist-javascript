let addBtn = document.querySelector('.add-btn')
let input = document.querySelector('.form-control')
let todoContainer = document.querySelector('.todo-container')
let errorMessage = document.querySelector('.error')

addBtn.addEventListener('click', todoActions)

function todoActions(evt) {
  evt.preventDefault()
  const todoList = document.createElement('li')
  todoList.classList.add('todo')
  todoList.innerHTML = input.value
  todoList.style.margin = '10px 0'

  const deleteBtn = document.createElement('span')
  deleteBtn.classList.add('close-btn')
  deleteBtn.innerHTML = '&times;'

  const completeBtn = document.createElement('button')
  completeBtn.classList.add('complete-btn')
  completeBtn.innerHTML = 'Complete'

  todoList.appendChild(completeBtn)
  todoList.appendChild(deleteBtn)
  if (input.value === '') {
    errorMessage.innerHTML = '<p class="error-message">You need to provide a text!</p>'
    setTimeout(() => {
      errorMessage.innerHTML = ''
    }, 5000)
  } else {
    todoContainer.appendChild(todoList)
    window.localStorage.setItem('todo', JSON.stringify(input.value))
    input.value = ''
  }

  deleteBtn.addEventListener('click', (evt) => {
    evt.preventDefault()
    todoContainer.removeChild(todoList)
    window.localStorage.removeItem('todo')
  })

  completeBtn.addEventListener('click', (evt) => {
    evt.preventDefault()
    todoList.style.textDecoration = 'line-through'
  })

  todoList.addEventListener('dblclick', (evt) => {
    evt.preventDefault()
    todoList.style.textDecoration = 'none'
  })
}
