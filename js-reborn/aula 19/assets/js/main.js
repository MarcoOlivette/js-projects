const inputElement = document.querySelector('.input');
const btnElement = document.querySelector('.btn');
const tarefasElement = document.querySelector('.tarefas');


function criaTarefa(text) {
  const liElement = document.createElement('li');
  const textNodeElement = document.createTextNode(text);
  liElement.appendChild(textNodeElement);
  tarefasElement.appendChild(liElement);
  limpaTarefa();
  criaBotaoApagar(liElement);
  salvarTarefa();
}

function criaBotaoApagar(li) {
  li.innerHTML += ' ';
  const newButton = document.createElement('button');
  newButton.setAttribute('title', 'Apagar tarefa');
  newButton.setAttribute('class', 'apagar');
  newButton.innerHTML = 'Apagar'
  li.appendChild(newButton);
}

function limpaTarefa() {
  inputElement.value = '';
  inputElement.focus();
}

inputElement.addEventListener('keypress', (ev) => {
  if (ev.keyCode === 13) {
    if (!(inputElement.value)) {
      return
    }
    criaTarefa(inputElement.value);
  }
})

btnElement.addEventListener('click', (ev) => {
  if (!(inputElement.value)) {
    return
  }
  criaTarefa(inputElement.value);
})

document.addEventListener('click', (ev) => {
  const el = ev.target;
  console.log(el);
  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefa();
  }
})

function salvarTarefa() {
  const liTarefas = document.querySelectorAll('li');
  const tarefas = [];
  for (let i of liTarefas) {
    let temp = i.innerText;
    temp = temp.replace('Apagar', '').trim();
    tarefas.push(temp);
  }
  const tarefasJson = JSON.stringify(tarefas);
  console.log(tarefasJson);
  localStorage.setItem('tarefas', tarefasJson);
}

function criaTarefas() {
  const tarefasJson = localStorage.getItem('tarefas');
  const tarefas  = JSON.parse(tarefasJson);
  for (let i of tarefas) {
    criaTarefa(i);
  }
}

criaTarefas();

