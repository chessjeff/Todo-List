const newProject = function() {
    let data = getProjectProperties();
    if (data) {
        let newProject = new Project(data);
        return newProject;
    } else {
        console.error('Projects must have a title.')
    }
}

function Project(data) {
    this.title = data[0];
    this.content = data[1];
    this.id = data[2];
};

const getProjectProperties = function() {
    let title = prompt('Project Title')
    let content = [];
    let id = i;
    if (title) {
        i++;
        return [title, content, id];
    };
};

const addTaskToProject = function(project, task) {
    project.content.push(task);
};

let i = 0;

export { newProject, addTaskToProject };