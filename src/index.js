import { newTask } from './task.js';
import { createParentDiv, newTaskButton } from './display.js'
import { toggleBool, togglePriority } from './toggle.js';
import { newProject, addTaskToProject } from './project.js';
import { openForm, closeForm, getFormData } from './form.js';

const newProjectButton = document.getElementById('test');
let createdProjects = [];

newProjectButton.addEventListener('click', function initiateNewProject() {
    //project div will have class [project.id]
    let project = newProject();
    if (project) {
        console.log(project);
        const projectDiv = createParentDiv(project);
        const taskButton = newTaskButton(projectDiv);
        
        createdProjects.push(project);
        
        initiateNewTask(taskButton);
        return project;
    }
});

const initiateNewTask = function(taskButton) {
    taskButton.addEventListener('click', () => {
        openForm();
    
        let submitButton = document.getElementById('form-submit');
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            let data = getFormData()
            console.log(data);
            closeForm();
        });
    });
}





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