import { format } from 'date-fns'; 

const newTask = function(data) {
    if (data) {
        data = getTaskId(data);
        let newTask = new Task(data)
        return newTask;
    } else {
        console.error('Tasks must have a title.')
    }
};

function Task(data) {
    // from form
    this.title = data[0];
    this.description = data[1];
    this.dueDate = data[2];
    this.priority = data[3];
    this.id = data [4];
    // date and time created
    this.timeCreated = format(new Date().getTime(), "M/d/y H:mm");
};

let i = 0;
const getTaskId = function(data) {
    data.push(i);
    i++;
    return data;
};

export { newTask };