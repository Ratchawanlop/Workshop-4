document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("กรุณากรอกงานที่ต้องทำ!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">❌</button>`;
    
    taskList.appendChild(li);
    saveTask(taskText);

    taskInput.value = ""; // เคลียร์ช่องป้อนข้อมูล
}

function deleteTask(button) {
    let taskItem = button.parentElement;
    let taskText = taskItem.textContent.replace("❌", "").trim();

    taskItem.remove();
    removeTaskFromStorage(taskText);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete-btn" onclick="deleteTask(this)">❌</button>`;
        taskList.appendChild(li);
    });
}
