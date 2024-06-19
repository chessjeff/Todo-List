export default function newTask(title) {
    let newTask = new Task(title)
    return newTask
}

function Task(title) {
    this.title = title;
}