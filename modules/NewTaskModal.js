export const newTaskBtnMobile = document.getElementById("add-task");
export const newTaskBtnDesk = document.getElementById("add-task-desktop");
const MODAL = document.getElementById("empty-modal");
export const MODAL_CLOSE_BTN =
  document.getElementsByClassName("modal-close")[1];

export function OpenEmptyModal() {
  MODAL.style.display = "flex";
}

export function closeModal() {
  MODAL.style.display = "none";
}
