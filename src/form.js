let formActive = false;
const main = document.getElementById('main');

const openForm = function() {
    if (!formActive) {
        formActive = true;

        // create a form
        const form = document.createElement('form');
        form.setAttribute('method', 'get');
        form.id = 'task-form'
        
        //create input for Title
        const title = document.createElement('input');
        title.setAttribute('type', 'text');
        title.setAttribute('placeholder', 'Do Laundry');
        title.id = 'form-title';
        
        //create input for description
        const description = document.createElement('input');
        description.setAttribute('type', 'text');
        description.id = 'form-description'
    
        //create input for date
        const date = document.createElement('input');
        date.setAttribute('type', 'date');
        date.id = 'form-date'
    
        //create checkbox for complete
        const complete = document.createElement('checkBox');
        complete.id = 'form-complete'
    
        //create priority selection
        const priority = document.createElement('select');
        priority.setAttribute('form', 'task-form');
        priority.id = 'form-priority'
    
        //create selection options
        const lowPriority = document.createElement('option');
        lowPriority.text = 'Low';
        const medPriority = document.createElement('option');
        medPriority.text = 'Medium';
        const highPriority = document.createElement('option');
        highPriority.text = 'High';
    
        priority.options.add(lowPriority);
        priority.options.add(medPriority);
        priority.options.add(highPriority);
    
        //create submit button
        const submit = document.createElement('button');
        submit.textContent = 'Save Task';
        submit.id = 'form-submit';
        
        //append inputs to form
        form.append(title);
        form.append(description);
        form.append(date);
        form.append(complete);
        form.append(priority);
        form.append(submit);

        //Add all to parent div
        main.appendChild(form);
    }
}

const getFormData = function() {
    let title = document.getElementById('form-title').value;
    let description = document.getElementById('form-description').value;
    let date = document.getElementById('form-date').value;
    let priority = document.getElementById('form-priority').selectedIndex;

    let data = [title, description, date, priority];
    return data;
}

const closeForm = function() {
    let form = document.getElementById('task-form')
    main.removeChild(form);
    formActive = false;
}

export { openForm, closeForm, getFormData };