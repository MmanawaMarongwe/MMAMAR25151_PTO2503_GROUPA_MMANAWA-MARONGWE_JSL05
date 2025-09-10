const todoEl = document.getElementById("todo-counter");
const doingEl = document.getElementById("doing-counter");
const doneEl = document.getElementById("done-counter");
// get tasks from localStorage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let todoCount = 0;
let doingCount = 0;
let doneCount = 0;
export function countTasks(task) {
  tasks.forEach((task) => {
    if (task.status === "todo") todoCount++;
    if (task.status === "doing") doingCount++;
    if (task.status === "done") doneCount++;
  });
  // update UI
  todoEl.textContent = `(${todoCount})`;
  doingEl.textContent = `(${doingCount})`;
  doneEl.textContent = `(${doneCount})`;
  resetCounters();
}

function resetCounters() {
  todoCount = 0;
  doneCount = 0;
  doingCount = 0;
}
