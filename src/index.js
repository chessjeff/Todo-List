import { newTask } from './task.js';
import { displayTask } from './display.js'
import { toggleBool, togglePriority } from './toggle.js';
import { newProject, addTaskToProject } from './project.js';
import { openForm } from './form.js';

const newProjectButton = document.getElementById('test');
let createdProjects = [];

newProjectButton.addEventListener('click', () => {
    let project = newProject();
    if (project) {
        let task = newTask();
        addTaskToProject(project, task);
        createdProjects.push(project);
        console.log(createdProjects);
    }
});

const formButton = document.getElementById('test2');
formButton.addEventListener('click', openForm);

/**
 * +Task button pulls up a form
 * form submit returns array which is sent to newTask (may need to be reworked)
 * add task to project
 * other logic for displaying info
*/

//newTask needs project.id to know which it belongs to when being created
//newTask(project.id)
//addTaskToProject(createdProjects[project.id], task)
//project.id will be parsed by button in dom logic