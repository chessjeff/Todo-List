import { togglePriority, deleteTask } from "./toggle";

//Variables
let container = document.getElementById('main'),
    title,
    description,
    dueDate,
    priority,
    time;

function displayTask(task, projectDiv) {
    let taskDiv = createTaskDiv(task.id); //div
    let children = createChildrenDivs(); //array

    // All content from task constructor
    addContentToChildren(children, task);

    // Include extra buttons for special functions
    includeComplete(children)
    includeDelete(children, task.id);
    
    //Special functions
    enableTaskFunctions(children, task, taskDiv, projectDiv);
    
    // Put everything on the page at once
    addChildrenToParent(children, taskDiv);
    projectDiv.appendChild(taskDiv);
}

const enableTaskFunctions = function(children, task, taskDiv, projectDiv) {
    let toggleButton = children[3];
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.remove(task.priority);
        task.priority = togglePriority(task.priority);
        toggleButton.classList.add(task.priority);
    });

    let deleteButton = children[6];
    deleteButton.addEventListener('click', () => {
        deleteTask(taskDiv, projectDiv);
    });
}

//Create Elements
const createChildrenDivs = function() {
    const children = [
        title = document.createElement('h2'),
        description = document.createElement('div'),
        dueDate = document.createElement('div'),
        priority = document.createElement('button'),
        time = document.createElement('div'),
    ]

    title.className = 'task-title';
    description.className = 'task-description';
    dueDate.className = 'due-date';
    priority.className = 'task-priority';
    time.className = 'task-time';
    
    dueDate.textContent = 'Due on: ';
    time.textContent = 'Created on: '
    
    return children;
}

const createParentDiv = function(project) {
    let parent = document.createElement('h1');
    parent.id = project.id;
    parent.textContent = project.title;
    container.appendChild(parent);
    return parent;
};

const createTaskDiv = function(id) {
    const taskDiv = document.createElement('div');
    taskDiv.id = id;

    return taskDiv;
}

//Build Elements
const addContentToChildren = function(children, task) {
    let i = 0;
    for (const property in task) {
        let taskProp = task[property]
        if (property !== 'id') {
            if (children[i].tagName == "BUTTON") {
                const priorities = ['priority-0', 'priority-1', 'priority-2'];
                taskProp = priorities[taskProp]
                children[i].classList.add(taskProp);
            } else {
                children[i].textContent += taskProp;
           }
            i++;
        }
    }
    return children;
};

const addChildrenToParent = function(children, taskDiv) {
    for (let i = 0; i < children.length; i++) {
        taskDiv.appendChild(children[i]);
    };
};

//Buttons
const newTaskButton = function(projectDiv, id) {
    const button = document.createElement('button');
    button.textContent = '+ Task';
    button.id = id;

    projectDiv.appendChild(button);
    return button;
}

const includeDelete = function(children, id) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete' //prob an svg someday
    deleteButton.id = id;
    deleteButton.classList.add(`delete-${id}`);

    children.push(deleteButton)
}

const includeComplete = function(children) {
    const completeButton = document.createElement('input');
    completeButton.setAttribute('type', 'checkbox');
    completeButton.classList.add('complete-button');

    children.push(completeButton);
}

export { createParentDiv, newTaskButton, displayTask };