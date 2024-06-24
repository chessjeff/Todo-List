const toggleBool = function(bool) {
    return bool ? false : true;
}

const togglePriority = function(data) {
    return data = data === 2 ? data = 0 : ++data;
}

const editText = function(text) {
    //when text div is clicked, open new input box its place
    //close and replace text after enter
}

const removeProject = function(index, arr) {
    //take in createdProjects arr
    //remove project at index
}

export {toggleBool, togglePriority}