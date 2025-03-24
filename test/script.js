const InputText = document.getElementById("InputText");
const AddButton = document.getElementById("AddButton");
const TaskList = document.getElementById("TaskList");

AddButton.addEventListener('click', function(){
  if(InputText.type == 'text' && InputText.value != ''){
    const li_text = document.createElement('li')
    const delete_button = document.createElement('button');
    
    // delete_button.setAttribute('type', 'buttton');
    // delete_button.classList.add('btn');
    delete_button.innerText = 'удалить';
    document.body.appendChild(delete_button)

    TaskList.appendChild(li_text);
    li_text.innerHTML = InputText.value;

    delete_button.addEventListener('click', function(){
      li_text.remove();
      delete_button.remove();
    })

    console.log(li_text.innerHTML);
  }
})