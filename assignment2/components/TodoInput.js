document.addEventListener('DOMContentLoaded', () => {
    const inputContainer = document.getElementById('todo-input');
    inputContainer.innerHTML = `
    <input type="text" id="new-todo" placeholder="할 일 입력" />
    <button id="add-btn">추가</button>
  `;

    const input = document.getElementById('new-todo');
    const button = document.getElementById('add-btn');

    button.addEventListener('click', () => {
        if (input.value.trim()) {
            addTodo(input.value.trim());
            input.value = '';
            input.focus();
        }
    });

    input.focus();
});