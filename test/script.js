const taskname = document.getElementById("taskname");
const inputTask = document.getElementById("InputTask");
const addBtn = document.getElementById("addBtn");
const tasklist = document.getElementById("taskList");

function TaskText(text) {
  const li = document.createElement("li");
  li.className = "li_text";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
  });

  const red_prio = document.createElement("button");
  const blue_prio = document.createElement("button");
  const green_prio = document.createElement("button");
  const del_prio = document.createElement("button");

  const delete_button = document.createElement("button");
  delete_button.innerText = "Удалить";
  delete_button.className = "del_btn";
  delete_button.addEventListener("click", function () {
    tasklist.removeChild(li);
  });

  const span = document.createElement("span");
  span.className = "text";
  span.textContent = text;

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delete_button);
  tasklist.appendChild(li);
}

addBtn.addEventListener("click", function () {
  const main_text = inputTask.value;
  if (main_text !== "") {
    TaskText(main_text);
  }
});

inputTask.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

// Загружаем сохранённый текст при загрузке страницы
window.addEventListener("DOMContentLoaded", () => {
  const savedText = localStorage.getItem("savedInputText");
  if (savedText) {
    taskname.value = savedText;
  }
});

// Сохраняем текст при каждом изменении input
taskname.addEventListener("input", () => {
  localStorage.setItem("savedInputText", taskname.value);
});
