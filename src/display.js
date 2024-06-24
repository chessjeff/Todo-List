import { togglePriority } from "./toggle";

//Variables
let container = document.getElementById('main'),
    title,
    description,
    dueDate,
    priority,
    id;

function displayTask(task, projectDiv) {
    let taskDiv = createTaskDiv(task.id); //div
    let children = createChildrenDivs(); //array

    addTextToChildren(children, task); 
    addChildrenToParent(children, taskDiv);

    //Special functions
    enableTaskFunctions(children, task);
    
    projectDiv.appendChild(taskDiv);
}

const enableTaskFunctions = function(children, task) {
    let button = children[3]
    button.addEventListener('click', () => {
        task.priority = togglePriority(task.priority);
        button.id = task.priority;
    });
}

//Create Elements
const createChildrenDivs = function() {
    const children = [
        title = document.createElement('h2'),
        description = document.createElement('div'),
        dueDate = document.createElement('div'),
        priority = document.createElement('button'),
        id = document.createElement('div'),
    ]

    title.className = 'task-title';
    description.className = 'task-description';
    dueDate.className = 'due-date';
    priority.className = 'task-priority';
    id.className = 'task-id';

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
const addTextToChildren = function(children, task) {
    let i = 0;
    for (const property in task) {
        if (children[i].tagName == "H2" || children[i].tagName == "DIV") {
            children[i].textContent = task[property];
        } else {
            //priority button
            children[i].id = task[property];
        }
        i++;
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

export { createParentDiv, newTaskButton, displayTask };