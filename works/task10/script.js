let callStack = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (task !== "") {
        callStack.push(task);
        input.value = "";
        updateProcessLine();
    }
}

function undoTask() {
    if (callStack.length > 0) {
        callStack.pop();
        updateProcessLine();
    }
}

function updateProcessLine() {
    const processLine = document.getElementById("processLine");
    processLine.textContent = callStack.join(" -> ");
}
