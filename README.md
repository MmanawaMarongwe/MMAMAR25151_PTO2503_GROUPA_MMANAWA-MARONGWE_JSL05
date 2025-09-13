# JSL05 Project Brief: Task Board with Local Storage Persistence and Task Creation

## 📽️ Overview

This project is a Kanban-style task board enhanced with local storage persistence and task creation via a modal.
Users can add new tasks, which are then stored in local storage and displayed immediately in the appropriate columns (“To Do”, “Doing”, “Done”).
Even after refreshing the page or reopening the browser, tasks remain available.

The goal was to practice local storage handling, DOM manipulation, modular JavaScript structure, and JSDoc documentation, while ensuring a clean, responsive design aligned with the Figma brief.

---
## 🛠️ Technologies Used
	•	HTML5 – base structure of the board and modal
	•	CSS3 – responsive styling for columns, tasks, and modal
	•	JavaScript (ES6 modules) – task creation, rendering, local storage persistence, modal interaction
	•	Local Storage – saving and retrieving tasks across sessions
	•	JSDoc – documenting major functions for maintainability
---

## 📋 Features
#### ✅ Local storage persistence:

	Tasks are saved whenever a new one is added.
	Tasks are reloaded from local storage on page refresh.

 
 #### ✅ Dynamic task board:

	Tasks are displayed under the correct column based on their status.

 
#### ✅ Add Task modal:

	Includes fields for title and description.
	Dropdown to select status (“To Do”, “Doing”, “Done”).
	Submit button adds the task instantly without refresh.

 
#### ✅ Responsive design:

	Matches the Figma design.
	Works smoothly on both desktop and mobile.
 
#### ✅ Clean modular code:

	Single-responsibility functions for task creation, rendering, storage, and modal handling.
	Functions and variables use descriptive names.
	Each module documented with JSDoc comments.
---

## 📂 Setup Instructions
	1.	Clone or download this repository.
	2.	Open the project folder on your computer.
	3.	Launch index.html in your browser.
	4.	Existing tasks (if any) will load automatically from local storage.
	5.	Click the “Add Task” button to open the modal.
	6.	Fill in task details and click Submit → task appears immediately in the correct column.
	7.	Refresh the page → tasks persist and reload correctly.
 
---
### 💻 Code Structure & Maintainability
	•	JavaScript is broken into modules (local storage, rendering, modal, etc.).
	•	Each function has a clear, single responsibility.
	•	JSDoc comments describe the purpose, parameters, and return values of major functions.
	•	Naming conventions follow readability and clarity best practices.
---

### ✅ Expected Outcome

A fully functional task board where:

	•	Tasks can be created via a modal.
	•	Tasks are saved to and retrieved from local storage.
	•	The board remains consistent across browser sessions.
	•	Code is modular, documented, and maintainable.

--- 
## 🔮 Future Improvements
	•	Enable task editing within the modal and update local storage accordingly.
	•	Allow task deletion with confirmation prompts.
	•	Add drag-and-drop functionality to move tasks between columns.
	•	Improve accessibility (keyboard navigation, ARIA labels).
