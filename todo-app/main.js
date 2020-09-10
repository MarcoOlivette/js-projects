var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

function renderTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick','deleteTodo('+ todos.indexOf(todo) +')');
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

function deleteTodo(pos){
    todos.splice(pos,1)
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}