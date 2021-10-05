const newTask = document.querySelector('input');

function addTask() {
  let task = document.createElement('li');
  task.innerHTML = newTask.value;
  taskList.append(task);
}


btnAdd.onclick = function() {
  addTask();
};

newTask.addEventListener('keyup', function(e) {
  if(e.key === 'Enter') {
    addTask();
  }
});