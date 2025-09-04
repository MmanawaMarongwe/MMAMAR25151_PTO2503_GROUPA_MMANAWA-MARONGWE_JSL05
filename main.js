import { renderTasks } from "./modules/userInterface.js";
import { AddNewTask, addTaskBtn } from "./modules/AddNewTask.js";
import {
  OpenEmptyModal,
  newTaskBtnDesk,
  newTaskBtnMobile,
  closeModal,
  MODAL_CLOSE_BTN,
} from "./modules/NewTaskModal.js";

renderTasks();

newTaskBtnMobile.addEventListener("click", OpenEmptyModal);
newTaskBtnDesk.addEventListener("click", OpenEmptyModal);

addTaskBtn.addEventListener("click", AddNewTask);

MODAL_CLOSE_BTN.addEventListener("click", closeModal);
