import { displayTaskInModal } from "./ExistingTaskModal.js";
import { countTasks } from "./taskCounter.js";

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
  countTasks();
  taskCard.addEventListener("click", () => displayTaskInModal(task));

  return taskCard;
}
