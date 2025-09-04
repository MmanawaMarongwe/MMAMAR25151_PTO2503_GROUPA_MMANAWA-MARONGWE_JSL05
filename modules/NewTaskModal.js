export const newTaskBtnMobile = document.getElementById("add-task");
export const newTaskBtnDesk = document.getElementById("add-task-desktop");
const MODAL = document.getElementById("empty-modal");
const MODAL_CLOSE_BTN = document.getElementsByClassName("modal-close")[0];

const MODAL_TITLE = document.getElementById("new-task-name");
const MODAL_DESC = document.getElementById("new-task-description");
const MODAL_STATUS = document.getElementById("new-task-status");

export function OpenEmptyModal() {
  console.log("This is running correctly");
  MODAL.style.display = "flex";
}
