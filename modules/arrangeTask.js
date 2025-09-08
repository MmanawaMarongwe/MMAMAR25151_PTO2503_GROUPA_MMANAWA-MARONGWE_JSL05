const TODO_TASKS = document.getElementById("todo-list");
const DOING_TASKS = document.getElementById("doing-list");
const DONE_TASKS = document.getElementById("done-list");

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
