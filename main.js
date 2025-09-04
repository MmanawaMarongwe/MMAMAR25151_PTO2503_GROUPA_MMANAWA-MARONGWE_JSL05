import { renderTasks } from "./modules/userInterface.js";
import {
  OpenEmptyModal,
  newTaskBtnDesk,
  newTaskBtnMobile,
} from "./modules/NewTaskModal.js";

renderTasks();
newTaskBtnMobile.addEventListener("click", OpenEmptyModal);
newTaskBtnDesk.addEventListener("click", OpenEmptyModal);
