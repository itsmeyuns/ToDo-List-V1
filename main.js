let form = document.querySelector('form');
let input = document.getElementById('new-task-input');
let tasksContainer = document.getElementById('tasks');
let goTop = document.getElementById('go-to-top');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  let task = input.value;

  if (task) {
    let taskBox = document.createElement('div');
    taskBox.classList.add('task');

    let taskContent = document.createElement('div');
    taskContent.classList.add('content');

    let taskInput = document.createElement('input');
    taskInput.classList.add('text');
    taskInput.type = 'text';
    taskInput.value =  task;
    taskInput.setAttribute('readonly', 'readonly');

    taskContent.appendChild(taskInput);

    let actions = document.createElement('div');
    actions.classList.add('actions');

    let edit = document.createElement('button');
    edit.textContent = 'Edit';
    edit.classList.add('edit');

    let del = document.createElement('button');
    del.textContent = 'Delete';
    del.classList.add('delete');

    actions.append(edit, del);
    taskBox.append(taskContent, actions);
    tasksContainer.appendChild(taskBox);

    input.value = '';

    edit.addEventListener('click', () => {
      if (edit.textContent.toLocaleLowerCase() === 'edit') {
        taskInput.removeAttribute('readonly');
        taskInput.focus();
        edit.textContent = 'Save';
      } else {
        taskInput.setAttribute('readonly', 'readonly');
        edit.textContent = 'Edit';
      }
    });

    del.addEventListener('click', () => {
      taskBox.remove();
    })
  }

});







window.addEventListener('scroll', () => {
  goTop.style.right = (this.scrollY > 15) ? '10px' : '-100px';
});

goTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});