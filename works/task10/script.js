// Array to act as the call stack
let callStack = [];
// Function to add a task
function addTask() {
const taskInput = document.getElementById("taskInput");
const taskName = taskInput.value.trim();
if (taskName) {
callStack.push(taskName); // Add task to the stack
taskInput.value = ""; // Clear input field
displayStack(); // Update the display
} else {
alert("Please enter a task name.");
}
}
// Function to undo a task
function undoTask() {
if (callStack.length > 0) {
callStack.pop(); // Remove the last task from the stack
displayStack(); // Update the display
} else {
alert("No tasks to undo.");
}
}
// Function to display the current stack
function displayStack() {
const processLine = document.getElementById("processLine");
processLine.textContent = callStack.join(", ");
}
