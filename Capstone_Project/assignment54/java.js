
// Load saved tasks when the page opens
let tasks = loadTasks();

// Get HTML elements
const taskForm = document.getElementById("taskForm");
const titleInput = document.getElementById("title");
const subjectInput = document.getElementById("subject");
const dueDateInput = document.getElementById("dueDate");
const taskList = document.getElementById("taskList");

// Save tasks in Local Storage
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from Local Storage
function loadTasks() {
    try {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    } catch (error) {
        return [];
    }
}

// Validate task details
function validateTask(title, subject, dueDate) {
    if (title.trim() === "") {
        alert("Please enter a task title.");
        return false;
    }

    if (subject.trim() === "") {
        alert("Please enter a subject.");
        return false;
    }

    if (dueDate === "") {
        alert("Please select a due date.");
        return false;
    }

    return true;
}

// Create a new task
function createTask(title, subject, dueDate) {
    return {
        id: Date.now(),
        title: title,
        subject: subject,
        dueDate: dueDate,
        completed: false
    };
}

// Display tasks on the webpage
function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No tasks added yet.";
        taskList.appendChild(message);
        return;
    }

    tasks.forEach(function(task) {
        const taskCard = document.createElement("div");
        taskCard.className = "task-card";

        const taskTitle = document.createElement("h3");
        taskTitle.textContent = task.title;

        const taskSubject = document.createElement("p");
        taskSubject.textContent = "Subject: " + task.subject;

        const taskDate = document.createElement("p");
        taskDate.textContent = "Due Date: " + task.dueDate;

        const status = document.createElement("p");
        status.textContent = task.completed ? "Completed" : "Active";

        const completeButton = document.createElement("button");
        completeButton.textContent = task.completed
            ? "Mark Active"
            : "Mark Complete";

        completeButton.addEventListener("click", function() {
            task.completed = !task.completed;
            saveTasks(tasks);
            renderTasks();
        });

        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskSubject);
        taskCard.appendChild(taskDate);
        taskCard.appendChild(status);
        taskCard.appendChild(completeButton);

        taskList.appendChild(taskCard);
    });
}

// Add task when form is submitted
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = titleInput.value.trim();
    const subject = subjectInput.value.trim();
    const dueDate = dueDateInput.value;

    if (!validateTask(title, subject, dueDate)) {
        return;
    }

    const newTask = createTask(title, subject, dueDate);

    tasks.push(newTask);

    saveTasks(tasks);
    renderTasks();

    taskForm.reset();

    alert("Task added successfully!");
});

// Show previously saved tasks
renderTasks();
