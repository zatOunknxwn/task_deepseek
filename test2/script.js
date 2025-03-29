const taskname = document.getElementById('tasknaem');
const inputTask = document.getElementById("InputTask");
const addBtn = document.getElementById("addBtn");
const tasklist = document.getElementById('tasklist');

function TaskText(text){
    const li = document.createElement("li");
    li.className = "li_text";

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', ()=>{
        li.classList.toggle('completed');
    })

    const delete_button = document.createElement('button');
    delete_button.innerText = "Удалить";
    delete_button.className = 'del_btn';
    delete_button.addEventListener('click', function(){
        tasklist.removeChild(li);
    })

    const span = document.createElement('span');
    span.textContent = 'tex';
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delete_button);
    tasklist.appendChild(li);
}

if (inputTask.value != ''){
    const main_text = inputTask.value;
    TaskText(main_text);
}