/**
 * create an html fragment
 * create all form elements for task
 * assign classes to everything
 * add elements to form
 * add form to fragment? 
 * add fragment to project div
 * 
 * all inputs returned as an array
 */

const openForm = function() {
    // create a form
    const form = document.createElement('form');
    form.setAttribute('method', 'get');
    form.id = 'task-form'

    //create input for Title
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Do Laundry');

    //create input for description
    const description = document.createElement('input');
    description.setAttribute('type', 'text');

    //create input for date
    const date = document.createElement('input');
    date.setAttribute('type', 'date');

    //create checkbox for complete
    const complete = document.createElement('checkBox');
    complete.setAttribute

    //create priority selection
    const priority = document.createElement('select');
    priority.setAttribute('form', 'task-form');

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

    //append inputs to form
    form.append(title);
    form.append(description);
    form.append(date);
    form.append(complete);
    form.append(priority);

    document.getElementById('main').appendChild(form);
}

export { openForm };