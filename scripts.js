import { initialTasks } from "./initialData.js";

const TODO_TASKS = document.getElementById("todo-list");
const DOING_TASKS = document.getElementById("doing-list");
const DONE_TASKS = document.getElementById("done-list");

const MODAL = document.getElementsByClassName("overlay")[0];
const TASKS = document.getElementsByClassName("task-name");
const MODAL_CLOSE_BTN = document.getElementsByClassName("modal-close")[0];

const MODAL_TITLE = document.getElementById("task-name-field");
const MODAL_DESC = document.getElementById("task-description");
const MODAL_STATUS = document.getElementById("task-status");

/**
 * Loops through all task objects in the array and renders them on the page
 * @returns {HTMLDivElement} - The created task card
 */
function renderTasks() {
  initialTasks.forEach((task) => {
    const taskCard = createTask(task);
    console.dir(taskCard);
    arrangeTask(task, taskCard);
    return taskCard;
  });
}

/**
 * Creates the task card with a <p> inside showing the title of the task
 * @param {{title: string}} task - The task object title value
 * @returns {HTMLDivElement} The created task card
 */
function createTask(task) {
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
function arrangeTask(task, taskCard) {
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

/**
 * Shows the task data inside the modal
 *
 * @param {{ title: string, description: string, status: string }} task
 *  The task object (status is one of "todo", "doing", "done")
 * @returns {void}
 */
function displayTaskInModal(task) {
  MODAL_TITLE.value = task.title;
  MODAL_DESC.value = task.description;
  MODAL_STATUS.value = task.status.toLowerCase();
  MODAL.style.display = "flex";
}

renderTasks();

MODAL_CLOSE_BTN.addEventListener("click", () => {
  MODAL.style.display = "none";
});
