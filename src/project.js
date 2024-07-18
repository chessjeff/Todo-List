const newProject = function () {
  let data = getProjectProperties();
  if (data) {
    let newProject = new Project(data);
    return newProject;
  } else {
    console.error("Projects must have a title.");
  }
};

function Project(data) {
  this.title = data[0];
  this.content = data[1];
  this.id = data[2];
}

const getProjectProperties = function () {
  let title = prompt("Project Title");
  let content = [];
  let id = getProjectId();
  if (title) {
    return [title, content, id];
  }
};

const getProjectId = function () {
  return projectCount++;
};

let projectCount = 0;
const setProjectCount = function (projects) {
  projectCount = projects.length;
  return projectCount;
};

const addTaskToProject = function (project, task) {
  return project.content.push(task);
};

export { newProject, addTaskToProject, setProjectCount };
