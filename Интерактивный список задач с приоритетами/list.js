document.getElementById('add_task_button').addEventListener('click', function() {
    const taskInput = document.getElementById('task_input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task_list');

        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});