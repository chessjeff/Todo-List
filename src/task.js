export default function newTask() {
    let data = getTaskProps()

    let newTask = new Task(data)
    return newTask
}

function Task(data) {
    this.title = data[0];
    this.description = data[1];
    this.dueDate = data[2];
    this.priority = data[3];
    this.complete = data[4];
}

const getTaskProps = function() {
    let title = prompt('Title');
    let description = prompt('Description');
    let dueDate = prompt('Due Date');
    let priority = prompt('Priority', 'High, Medium, Low');
    let complete = prompt('complete', 'True or False');

    return [title, description, dueDate, priority, complete]
}