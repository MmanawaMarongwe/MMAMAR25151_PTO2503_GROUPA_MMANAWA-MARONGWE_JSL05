const MODAL = document.getElementsByClassName("overlay")[0];
const MODAL_CLOSE_BTN = document.getElementsByClassName("modal-close")[0];

const MODAL_TITLE = document.getElementById("task-name-field");
const MODAL_DESC = document.getElementById("task-description");
const MODAL_STATUS = document.getElementById("task-status");

/**
 * Shows the task data inside the modal
 *
 * @param {{ title: string, description: string, status: string }} task
 *  The task object (status is one of "todo", "doing", "done")
 * @returns {void}
 */
export function displayTaskInModal(task) {
  MODAL_TITLE.value = task.title;
  MODAL_DESC.value = task.description;
  MODAL_STATUS.value = task.status.toLowerCase();
  MODAL.style.display = "flex";
}

MODAL_CLOSE_BTN.addEventListener("click", () => {
  MODAL.style.display = "none";
});
