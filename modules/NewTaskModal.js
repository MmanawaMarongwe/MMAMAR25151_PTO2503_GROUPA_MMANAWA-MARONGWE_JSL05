export const newTaskBtnMobile = document.getElementById("add-task");
export const newTaskBtnDesk = document.getElementById("add-task-desktop");
const MODAL = document.getElementById("empty-modal");
export const MODAL_CLOSE_BTN =
  document.getElementsByClassName("modal-close")[1];

const MODAL_TITLE = document.getElementById("new-task-name");
const MODAL_DESC = document.getElementById("new-task-description");
const MODAL_STATUS = document.getElementById("new-task-status");

export function OpenEmptyModal() {
  MODAL.style.display = "flex";
}

export function closeModal() {
  MODAL.style.display = "none";
}
