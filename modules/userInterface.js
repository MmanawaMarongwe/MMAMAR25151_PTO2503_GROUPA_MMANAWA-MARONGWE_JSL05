import { initialTasks } from "./initialData.js";
import { arrangeTask } from "./arrangeTask.js";
import { createTask } from "./createTask.js";

if (!localStorage.getItem("tasks")) {
  localStorage.setItem("tasks", JSON.stringify(initialTasks));
}

/**
 *
 * @returns {array} - The array of task objects
 */
export function getTasks() {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
}

export const tasks = getTasks();

/**
 * Loops through all task objects in the array and renders them on the page
 * @returns {HTMLDivElement} - The created task card
 */
export function renderTasks() {
  document.getElementById("todo-list").innerHTML = "";
  document.getElementById("doing-list").innerHTML = "";
  document.getElementById("done-list").innerHTML = "";

  tasks.forEach((task) => {
    const taskCard = createTask(task);
    arrangeTask(task, taskCard);
    return taskCard;
  });
}
