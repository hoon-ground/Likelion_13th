function createTodoItem(todo, index) {
    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';
    li.innerHTML = `
    <span>${todo.text}</span>
    <button onclick="toggleComplete(${index})">완료</button>
    <button onclick="deleteTodo(${index})">삭제</button>
  `;
    return li;
}
