const addButton = document.querySelector('.btn');
const input = document.querySelector('.input');
const tarefas = document.querySelector('.tarefas');

addButton.onclick = () => {
  if (input.value) {
    console.log(input.value);
    addTodo(input.value);
  }
}

function addTodo(text) {
  const liElement = document.createElement('li');
  const textNodeElement = document.createTextNode(text);
  const buttonDelete = document.createElement('button');
  buttonDelete.setAttribute('class', 'delete');
  buttonDelete.innerHTML = 'Apagar';
  buttonDelete.style.marginLeft = '20px';
  liElement.appendChild(textNodeElement);
  liElement.appendChild(buttonDelete);
  tarefas.appendChild(liElement);
  input.value = "";
  saveTodos();
}

document.addEventListener('keypress', (ev) => {
  if (ev.key === 'Enter') {
    if (input.value) {
      console.log(input.value);
      addTodo(input.value);
    }
  }
})

document.addEventListener('click', (ev) => {
  const target = ev.target;
  if (target.classList.contains('delete')) {
    target.parentElement.remove();
    saveTodos();
  }
})

function saveTodos() {
  const todosElements = tarefas.querySelectorAll('li');
  let todosArray = [];
  for (let i of todosElements) {
    let todo = i.innerText;
    todo = todo.replace('Apagar', '');
    todosArray.push(todo);
  }
  let todosJson = JSON.stringify(todosArray);
  localStorage.setItem('todos', todosJson);
}

function rederAllTodos() {
  let todosJson = localStorage.getItem('todos');
  let todosArray = JSON.parse(todosJson);
  for (let i of todosArray) {
    addTodo(i);
  }
}

rederAllTodos();
