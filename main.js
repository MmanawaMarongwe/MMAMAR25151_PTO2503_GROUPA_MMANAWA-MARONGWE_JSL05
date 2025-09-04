import { renderTasks } from "../modules/userInterface.js";
import {
  OpenEmptyModal,
  newTaskBtnMobile,
  newTaskBtnDesk,
} from "../NewTaskModal.js";

renderTasks();
newTaskBtnMobile.addEventListener("click", OpenEmptyModal);
newTaskBtnDesk.addEventListener("click", OpenEmptyModal);
