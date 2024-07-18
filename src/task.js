import { format } from "date-fns";

const newTask = function (data) {
  if (data[0]) {
    getTaskTime(data);
    let newTask = new Task(data);
    return newTask;
  } else {
    console.error("Tasks must have a title.");
  }
};

function Task(data) {
  // from form
  this.title = data[0];
  this.description = data[1];
  this.dueDate = data[2];
  this.priority = data[3];
  this.id = getTaskId();
  this.timeCreated = data[4];
}

let taskCount = 0;
const setTaskCount = function (projects) {
  for (let i = 0; i < projects.length; i++) {
    let tasks = projects[i].content.length;
    taskCount += tasks;
  }
};

const getTaskId = function () {
  return taskCount++;
};

const getTaskTime = function (data) {
  const time = format(new Date().getTime(), "M/d/y H:mm");
  data.push(time);
};

export { newTask, setTaskCount };
