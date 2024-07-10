import { newTask } from './task.js';
import { createParentDiv, newTaskButton, displayTask } from './display.js'
import { toggleBool, togglePriority } from './toggle.js';
import { newProject, addTaskToProject } from './project.js';
import { openForm, closeForm, getFormData } from './form.js';
import './styles.css'

const newProjectButton = document.getElementById('new-project');
let createdProjects = [];

newProjectButton.addEventListener('click', function initiateNewProject() {
    let project = newProject();
    if (project) {
        //Put project on the screen
        const projectDiv = createParentDiv(project);
        const taskButton = newTaskButton(projectDiv, project.id);
        
        createdProjects.push(project);
        storeProject(createdProjects);

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
            addTaskToProject(project, data)
            storeProject(createdProjects);

            closeForm();

            displayTask(data, projectDiv);
        });
    });
}

const storeProject = function(projects) {
    let projectsJSON = JSON.stringify(projects)
    localStorage.setItem('projects', projectsJSON);
}

const getProjectsFromStorage = function() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    console.log(projects.length);
    if (projects) {
        for (let i = 0; i < projects.length; i++) {
            createdProjects.push(projects[i]);
            return createdProjects;
        }
    }
}

getProjectsFromStorage();