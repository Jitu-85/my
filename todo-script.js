// todo-script.js

// Task array to store the list of tasks
let tasks = [];

// Function to add a new task
function addTask(taskName) {
    const task = {
        id: new Date().getTime(),  // Unique ID based on timestamp
        name: taskName,
        completed: false
    };
    tasks.push(task);
    saveTasks();
}

// Function to delete a task by ID
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
}

// Function to mark a task as complete
function markComplete(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = true;
        saveTasks();
    }
}

// Function to save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

// Load tasks when the script is run
loadTasks();

// Example of using the functions
addTask('Learn JavaScript');
addTask('Build to-do app');
deleteTask(tasks[0].id);  // Replace with an actual ID after adding a task
markComplete(tasks[1].id);  // Replace with an actual ID after adding a task
