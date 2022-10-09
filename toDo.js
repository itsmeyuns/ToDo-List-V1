let addButton      =    document.querySelector('#add'),
    taskInput      =    document.querySelector('.header input'),
    tasksContainer =    document.querySelector('.tasks-container');


function addTask() {

  if (taskInput.value) {

    let p = document.createElement('p');

    p.textContent = taskInput.value;

    p.className = 'task-name';

    let task = document.createElement('div');

    task.classList.add('task');

    let actions = document.createElement('div');

    actions.className = 'actions';

    // let editButton = document.createElement('button');

    // editButton.className = 'edit';

    // editButton.textContent = '?';

    let deleteButton = document.createElement('button');

    deleteButton.className = 'del';

    deleteButton.textContent = 'X';

    // actions.append(deleteButton);

    task.append(p, deleteButton);

    tasksContainer.appendChild(task);

    taskInput.value = '';

    taskInput.focus();

    deleteButton.addEventListener('click', deleteTask);

  }

}


function deleteTask(){

  let qst = confirm('Are you sure ?');

  if (qst) {

    this.parentElement.remove();

  }

}

addButton.addEventListener('click', addTask);


document.addEventListener('click', function (e) {

  if (e.target.classList.contains('task-name')) {

    let oldContent = e.target;

    let editField = document.createElement('input');

    editField.type = 'text';

    editField.value = oldContent.textContent;

    let editButton = document.createElement('button');

    editButton.className = 'edit';

    editButton.textContent = 'Edit';

    oldContent.parentElement.append(editButton);

    editButton.previousElementSibling.style.margin = '0 15px';

    oldContent.parentElement.replaceChild(editField, oldContent);

    editField.focus();

  }


});


document.addEventListener('click', function(e) {

  if (e.target.classList.contains('edit')) {
    
    let editInput = e.target.previousElementSibling.previousElementSibling;    

    if (editInput.value) {

      let newContent = document.createElement('p'); 

      newContent.className = 'task-name';

      newContent.textContent =  editInput.value;

      e.target.parentElement.replaceChild(newContent, e.target.parentElement.firstChild);

      e.target.previousElementSibling.style.margin = '0';

      e.target.remove();

    }

  }


});


document.addEventListener('keypress', function (e) {

  if (e.key === 'Enter') {

    addButton.click();

  }
});


let scrollButton = document.querySelector('.go-to-top');
window.addEventListener('scroll', function () {

  this.scrollY > 265 ? scrollButton.classList.add('show-button') : scrollButton.classList.remove('show-button'); 
});


scrollButton.addEventListener('click', function () {
  window.scrollTo(0, 180);
})

