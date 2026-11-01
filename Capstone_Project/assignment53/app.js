
// 1. Create a new task
function createTask(title, subject, dueDate) {

    return {
        id: Date.now(),
        title: title,
        subject: subject,
        dueDate: dueDate,
        completed: false
    };
}


// 2. Validate task details
function validateTask(title, subject, dueDate) {

    if (title.trim() === "") {
        return false;
    }

    if (subject.trim() === "") {
        return false;
    }

    if (!dueDate || isNaN(Date.parse(dueDate))) {
        return false;
    }

    return true;
}


// 3. Save tasks in Local Storage
function saveTasks(tasks) {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}


// 4. Load tasks from Local Storage
function loadTasks() {

    try {
        return JSON.parse(
            localStorage.getItem("tasks")
        ) || [];

    } catch (error) {
        return [];
    }
}


// 5. Filter tasks
function filterTasks(tasks, type) {

    if (type === "active") {

        return tasks.filter(function(task) {
            return task.completed === false;
        });

    }

    if (type === "completed") {

        return tasks.filter(function(task) {
            return task.completed === true;
        });

    }

    return tasks;
}


// 6. Test the utility functions

let sampleTask = createTask(
    "Java Assignment",
    "Java",
    "2026-11-10"
);

console.log("Created Task:");
console.log(sampleTask);

console.log("Validation Result:");

console.log(
    validateTask(
        "Java Assignment",
        "Java",
        "2026-11-10"
    )
);

let sampleTasks = [sampleTask];

console.log("Active Tasks:");
console.log(filterTasks(sampleTasks, "active"));
