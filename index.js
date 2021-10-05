const newTask = document.querySelector('input');
const arr = [];


function addTask() {
  const obj = {};
  let task = document.createElement('li');
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('checked', 'checked')
  if(checkbox.checked) {
    taskList.style.textDecoration = 'line-through';
  }
  taskList.appendChild(checkbox);
  obj.text = newTask.value;
  arr.push(obj);
  arr.forEach(item => task.innerHTML = item.text);
  taskList.append(task);
  console.log(arr, 'arr');
  console.log(obj, 'obj')
}

function deleteTask() {
  arr.splice(-1, 1);
  
}

function checkedTask() {
  
}


btnAdd.onclick = function() {
  addTask();
};

newTask.addEventListener('keyup', function(e) {
  if(e.key === 'Enter') {
    addTask();
  }
});

btnDelete.onclick = function() {
  deleteTask();
};


