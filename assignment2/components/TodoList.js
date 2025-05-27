function renderTodos() {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        list.appendChild(createTodoItem(todo, index));
    });
}