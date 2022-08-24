//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task events
    clearBtn.addEventListener('click', clearTasks);
    //Filter tasks events
    filter.addEventListener('keyup', filterTask);
}

// Add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to the li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);

    // console.log(li);

    //clear the input

    taskInput.value = '';

    e.preventDefault();
}

//Remove task

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

//clear tasks
function clearTasks() {
    //taskList.innerHTML = '';

    //Faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

//filter tasks
function filterTask(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}