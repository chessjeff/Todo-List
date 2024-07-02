const toggleBool = function(bool) {
    return bool ? false : true;
}

const togglePriority = function(oldPriority) {
    const priorities = ['priority-0', 'priority-1', 'priority-2'];
    let i = priorities.indexOf(oldPriority);
    let newPriority;
    if (i === 2) {
        i = 0;
        return newPriority = priorities[0];
    } else {
        return newPriority = priorities[i + 1];
    }
}

const deleteTask = function(taskDiv, projectDiv) {
    projectDiv.removeChild(taskDiv);
}

const editText = function(text) {
    //when text div is clicked, open new input box its place
    //close and replace text after enter
}

const removeProject = function(index, arr) {
    //take in createdProjects arr
    //remove project at index
}

export { toggleBool, togglePriority, deleteTask };