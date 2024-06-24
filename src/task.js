import { format, toDate } from 'date-fns'; 

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
    this.title = data[0];
    this.description = data[1];
    this.dueDate = data[2];
    this.priority = data[3];
    this.id = data [4];
}

let i = 0;
const getTaskId = function(data) {
    data.push(i);
    i++;
    return data;
}

const selectComplete = function() {
    
}

const formatDate = function() {
    //split string into three separate ints
    //ints in new Date() while formatting
    return format(date, "M/d/y");
}


export { newTask };