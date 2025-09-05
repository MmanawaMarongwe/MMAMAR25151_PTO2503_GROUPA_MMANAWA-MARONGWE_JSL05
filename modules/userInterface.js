import { initialTasks } from "./initialData.js";
import { displayTaskInModal } from "./ExistingTaskModal.js";

const TODO_TASKS = document.getElementById("todo-list");
const DOING_TASKS = document.getElementById("doing-list");
const DONE_TASKS = document.getElementById("done-list");

if (!localStorage.getItem("tasks")) {
  localStorage.setItem("tasks", JSON.stringify(initialTasks));
}

// 2. Always read tasks fresh from localStorage
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

/**
 * Creates the task card with a <p> inside showing the title of the task
 * @param {{title: string}} task - The task object title value
 * @returns {HTMLDivElement} The created task card
 */
export function createTask(task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-name";
  const taskTitle = document.createElement("p");
  taskTitle.textContent = task.title;
  taskCard.appendChild(taskTitle);
  taskCard.addEventListener("click", () => displayTaskInModal(task));
  return taskCard;
}

/**
 * Appends the task element into the correct container according to their status (todo/doing/done)
 *
 * @param {{status: string}} task - The task object with status property
 * @param {HTMLDivElement} taskCard - The created task card
 * @returns {void}
 */
export function arrangeTask(task, taskCard) {
  if (task.status === "done") {
    DONE_TASKS.appendChild(taskCard);
  }
  if (task.status === "todo") {
    TODO_TASKS.appendChild(taskCard);
  }
  if (task.status === "doing") {
    DOING_TASKS.appendChild(taskCard);
  }
}
