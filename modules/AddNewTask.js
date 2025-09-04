import { initialTasks } from "./initialData.js";
import { renderTasks } from "./userInterface.js";

const MODAL_TITLE = document.getElementById("new-task");
const MODAL_DESC = document.getElementById("new-task-description");
const MODAL_STATUS = document.getElementById("new-task-status");
export const addTaskBtn = document.getElementById("create-btn");

function getNextId() {
  //get the last object in the array and use it to get the next id
  const lastObject = initialTasks[initialTasks.length - 1];
  const lastId = lastObject.id;
  const nextId = lastId + 1;

  //return the next id so it can be used for the next object
  return nextId;
}

export function AddNewTask() {
  let newTaskTitle = MODAL_TITLE.value;
  let newTaskDesc = MODAL_DESC.value;
  let newTaskStatus = MODAL_STATUS.value;

  let newTask = {
    id: getNextId(),
    title: newTaskTitle,
    description: newTaskDesc,
    status: newTaskStatus,
  };
  MODAL_TITLE.value = "";
  MODAL_DESC.value = "";
  MODAL_STATUS.value = "";

  initialTasks.push(newTask);
  renderTasks();
}
