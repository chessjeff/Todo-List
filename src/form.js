let formActive = false;
const sideBar = document.getElementById("side-bar");

const openForm = function () {
  if (!formActive) {
    formActive = true;

    const formContainer = document.createElement("div");
    formContainer.id = "form-container";
    formContainer.classList.add("form-container");

    // create a form
    const form = document.createElement("form");
    form.setAttribute("method", "get");
    form.id = "task-form";

    //create input for Title
    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.id = "form-title";

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "form-title");
    titleLabel.textContent = "Task Title:";

    //create input for description
    const description = document.createElement("input");
    description.setAttribute("type", "text");
    description.id = "form-description";

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "form-description");
    descriptionLabel.textContent = "Description:";

    //create input for date
    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.id = "form-date";

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "form-date");
    dateLabel.textContent = "Due Date:";

    //create priority selection
    const priority = document.createElement("select");
    priority.setAttribute("form", "task-form");
    priority.id = "form-priority";

    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "form-priority");
    priorityLabel.textContent = "Priority:";

    //create selection options
    const lowPriority = document.createElement("option");
    lowPriority.text = "Low";
    const medPriority = document.createElement("option");
    medPriority.text = "Medium";
    const highPriority = document.createElement("option");
    highPriority.text = "High";

    priority.options.add(lowPriority);
    priority.options.add(medPriority);
    priority.options.add(highPriority);

    //create submit button
    const submit = document.createElement("button");
    submit.textContent = "Save Task";
    submit.id = "form-submit";

    //append inputs to form
    form.append(titleLabel);
    form.append(title);
    form.append(descriptionLabel);
    form.append(description);
    form.append(dateLabel);
    form.append(date);
    form.append(priorityLabel);
    form.append(priority);
    form.append(submit);

    //Add all to parent div
    formContainer.appendChild(form);
    sideBar.appendChild(formContainer);
  }
};

const getFormData = function () {
  let title = document.getElementById("form-title").value,
    description = document.getElementById("form-description").value,
    date = document.getElementById("form-date").value,
    priority = setPriority(
      document.getElementById("form-priority").selectedIndex,
    );

  let data = [title, description, date, priority];
  return data;
};

const closeForm = function () {
  const form = document.getElementById("form-container");
  sideBar.removeChild(form);
  formActive = false;
};

const setPriority = function (selectedIndex) {
  const priorities = ["priority-0", "priority-1", "priority-2"];
  return priorities[selectedIndex];
};

export { openForm, closeForm, getFormData };
