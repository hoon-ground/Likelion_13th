let todos = [];

function addTodo(text) {
    todos.push({ text, completed: false });
    renderTodos();
}
function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

const btn1 = document.createElement('button');
btn1.innerText = '버튼1';
btn1.onclick = function () { console.log('버튼1의 this는?:', this); };
document.body.appendChild(btn1);

const btn2 = document.createElement('button');
btn2.innerText = '버튼2';
btn2.onclick = () => { console.log('버튼2의 this는?:', this); };
document.body.appendChild(btn2);

const scrollBtn = document.createElement('button');
scrollBtn.innerText = 'Todo로 스크롤';
scrollBtn.onclick = () => {
    document.getElementById('todo-input').scrollIntoView({ behavior: 'smooth' });
};
document.body.appendChild(scrollBtn);
