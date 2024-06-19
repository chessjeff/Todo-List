//create new dom element inside body
//add text obtained from task.js
//append all children to container dom element

export default function displayTask(task) {
    let parent = createParentDiv();
    let children = createChildren();
    addTextToChildren(children, task); 
    addChildrenToParent(children, parent);
}

//Variables
let container = document.getElementById('main'),
    title,
    description,
    dueDate,
    priority,
    complete;

const createChildren = function() {
    const children = [
        title = document.createElement('div'),
        description = document.createElement('div'),
        dueDate = document.createElement('div'),
        priority = document.createElement('button'),
        complete = document.createElement('button'),
    ]

    title.className = 'task-title';
    description.className = 'task-description';
    dueDate.className = 'due-date';
    priority.className = 'task-priority';
    complete.className = 'task-complete';

    return children;
}

const addTextToChildren = function(children, task) {
    let i = 0;
    for (const property in task) {
        children[i].textContent = task[property];
        i++;
    }
    return children;
};

const addChildrenToParent = function(children, parent) {
    for (let i = 0; i < children.length; i++) {
        parent.appendChild(children[i]);
    };
};

const createParentDiv = function() {
    let parent = document.createElement('div');
    parent.id = 'task-container';
    container.appendChild(parent);
    return parent;
};