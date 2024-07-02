import { newTask } from './task.js';
import { createParentDiv, newTaskButton, displayTask } from './display.js'
import { toggleBool, togglePriority } from './toggle.js';
import { newProject, addTaskToProject } from './project.js';
import { openForm, closeForm, getFormData } from './form.js';
import './styles.css'

const newProjectButton = document.getElementById('test');
let createdProjects = [];

newProjectButton.addEventListener('click', function initiateNewProject() {
    let project = newProject();
    if (project) {
        //Put project on the screen
        const projectDiv = createParentDiv(project);
        const taskButton = newTaskButton(projectDiv, project.id);
        
        createdProjects.push(project);
        
        initiateNewTask(taskButton, project, projectDiv);
    }
});

const initiateNewTask = function(taskButton, project, projectDiv) {
    taskButton.addEventListener('click', () => {
        openForm();

        const submitButton = document.getElementById('form-submit');
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            let data = newTask(getFormData());
            addTaskToProject(project, data);

            closeForm();

            displayTask(data, projectDiv);
        });
    });
}