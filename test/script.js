const InputText = document.getElementById("InputText");
const AddButton = document.getElementById("AddButton");
const TaskList = document.getElementById("TaskList");



AddButton.addEventListener('click', function(){
  if(InputText.type == 'text' && InputText.value != ''){
    const li_text = document.createElement('li')
    const delete_button = document.createElement('button');
    const checkbox = document.createElement('input')

    // const listContainer = document.createElement('div')
    // listContainer.innerHTML = "<input type='checkbox' id='Mycheckbox'>" + InputText.value + "  <button>Удалить</button>"

    delete_button.innerText = 'удалить';

    checkbox.type = "checkbox";
    checkbox.id = "mycheckbox";

    TaskList.appendChild(checkbox);
    TaskList.appendChild(li_text);
    TaskList.appendChild(delete_button);
    
    li_text.innerHTML = InputText.value;
    
    // TaskList.appendChild(listContainer);

    // console.log(checkbox.value);
    console.log(checkbox.checked);
  
    if (checkbox.checked){
      li_text.style.textDecoration = 'line-through';
    }
    else{
      li_text.style.textDecoration = 'none';
    }

    delete_button.addEventListener('click', function(){
      li_text.remove();
      delete_button.remove();
      checkbox.remove();

      // if (delete_button.target.tagName === "BUTTON"){
      //   listContainer.remove();
      // }
    })
    // console.log(li_text.innerHTML);
  }
})