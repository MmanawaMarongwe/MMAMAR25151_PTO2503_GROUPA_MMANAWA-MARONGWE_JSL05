const todoEl = document.getElementById("todo-counter");
const doingEl = document.getElementById("doing-counter");
const doneEl = document.getElementById("done-counter");

export function countTasks() {
  // get tasks from localStorage
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  let todoCount = tasks.filter((task) => task.status === "todo");
  let doingCount = tasks.filter((task) => task.status === "doing");
  let doneCount = tasks.filter((task) => task.status === "done");

  // update UI
  todoEl.textContent = `(${todoCount.length})`;
  doingEl.textContent = `(${doingCount.length})`;
  doneEl.textContent = `(${doneCount.length})`;
}
