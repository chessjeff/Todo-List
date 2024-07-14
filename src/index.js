import { newTask, setTaskCount } from './task.js';
import { createParentDiv, newTaskButton, displayTask } from './display.js'
import { toggleBool, togglePriority } from './toggle.js';
import { newProject, addTaskToProject, setProjectCount } from './project.js';
import { openForm, closeForm, getFormData } from './form.js';
import './styles.css'

let createdProjects = [];
window.onload = () => {
    getProjectsFromStorage();
    enableNewProjects();
    setProjectCount(createdProjects);
    setTaskCount(createdProjects);
    //print projects and tasks from storage
    printCreated();
};

const printCreated = function() {
    if (createdProjects.length > 0) {
        for (let i = 0; i < createdProjects.length; i++) {
            const project = createdProjects[i];
            const content = createdProjects[i].content;
            const id = createdProjects[i].id;

            //Project div
            const projectDiv = createParentDiv(project);
            const taskButton = newTaskButton(id);
            projectDiv.appendChild(taskButton);
            
            //Tasks
            for (let j = 0; j < content.length; j++) {
                let task = content[j];
                if (task.title) {
                    displayTask(task, projectDiv);
                    enableDelete(task, project);
                }
            };

            //Continue to add content
            enableNewTasks(taskButton, project, projectDiv);
        };
    };
};

const enableNewProjects = function() {
    const newProjectButton = document.getElementById('new-project');
    newProjectButton.addEventListener('click', () => {
        const project = newProject();
        initiateProject(project);
        createdProjects.push(project);
        storeProject(createdProjects);
    });
};

const enableNewTasks = function(taskButton, project, projectDiv) {
    taskButton.addEventListener('click', () => {
        openForm();
        const submitButton = document.getElementById('form-submit');
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            const data = getFormData();
            closeForm();
            initiateNewTask(data, project, projectDiv);
        });
    });
};

const enableDelete = function(task, project) {
    const id = task.id;
    const deleteButton = document.getElementById(`delete-${id}`);
    deleteButton.addEventListener('click', () => {
        createdProjects[project.id].content[id] = {"id": id};
        updateCreated(project);
        storeProject();
    });
};

const initiateProject = function(project) {
    const projectDiv = createParentDiv(project);
    const taskButton = newTaskButton(project.id);
    projectDiv.appendChild(taskButton);
    enableNewTasks(taskButton, project, projectDiv);
};

const initiateNewTask = function (data, project, projectDiv) {
    const task = newTask(data);
    addTaskToProject(project, task);
    updateCreated(project);
    storeProject();
    displayTask(task, projectDiv);
    enableDelete(task, project);
};

const updateCreated = function(project) {
    const index = project.id;
    createdProjects[index] = project;
}

// Storage
const storeProject = function() {
    const projectsJSON = JSON.stringify(createdProjects);
    localStorage.setItem('projects', projectsJSON);
};

const getProjectsFromStorage = function() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    if (projects) {
        for (let i = 0; i < projects.length; i++) {
            createdProjects.push(projects[i]);
        };
    };
};

export { createdProjects };