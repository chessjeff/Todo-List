import { format, toDate } from 'date-fns'; 

const newTask = function() {
    let data = getTaskProps()
    if (data) {
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
    this.complete = data[4];
    this.id = data [5];
}

const getTaskProps = function() {
    let title = prompt('Task Title');
    if (title) {
        let description = prompt('Task Description');
        let dueDate = format(toDate(new Date().getTime()), 'M/d/y p')
        let priority = parseInt(prompt('Task Priority', '0, 1, 2'));
        let complete = selectComplete();
        let id = i;
        i++;
        return [title, description, dueDate, priority, complete, id];
    }
}

const selectComplete = function() {
    if (confirm("Is this task complete?\nOk for True, Cancel for False")) {
        return true;
    } else {
        return false;
    }
}

const formatDate = function() {
    //split string into three separate ints
    //ints in new Date() while formatting
    return format(date, "M/d/y");
}

let i = 0;

export { newTask };