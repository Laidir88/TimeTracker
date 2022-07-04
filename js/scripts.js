class Task {
  constructor(id = 0, summary = "", time = "") {
    this.id = id;
    this.summary = summary;
    // Time is expected to be string date
    if (time === 0) {
      this.time = new Date();
    } else {
      this.time = new Date(time);
    }
  }

  modify(newSummary = "", newTime = "") {
    if (newSummary.length > 0) {
      this.summary = newSummary;
    }
    if (newTime.length > 0) {
      this.time = newTime;
    }
  }
}

// Let's create a default array until we learn backend database hook ups
const tasks = [
  new Task(1, "Figure out backend databases.", new Date().toUTCString()),
  new Task(2, "Learn React.", new Date().toUTCString()),
  new Task(3, "Need to figure out all this js crud.", new Date().toUTCString()),
];

function createDefaultTasks() {
  // Add tasks to page
  const taskList = document.getElementById("taskList");
  // loop through tasks and add them to the DOM
  // Create task div structure template
  for (const task of tasks) {
    // Create "task info"
    let newTask = document.createElement("div");
    newTask.className = "row";
    newTask.classList.add("pt-2", "pb-2", "pl-2", "pr-2");

    let newTaskId = document.createElement("div");
    newTaskId.className = "col-2";
    let newTaskSummary = document.createElement("div");
    newTaskSummary.className = "col";
    let newTaskTime = document.createElement("div");
    newTaskTime.className = "col-2";

    newTaskId.innerHTML = task.id;
    newTaskSummary.innerHTML = task.summary;
    newTaskTime.innerHTML = task.time.toDateString();
    newTask.id = "Task" + task.id.toString();
    newTask.appendChild(newTaskId);
    newTask.appendChild(newTaskSummary);
    newTask.appendChild(newTaskTime);
    // Now add it to the container
    taskList.appendChild(newTask);
  }
}

function addTask(task) {
  // Add tasks to page
  const taskList = document.getElementById("taskList");

  // Create "task info"
  let newTask = document.createElement("div");
  newTask.className = "row";
  newTask.classList.add("pt-2", "pb-2", "pl-2", "pr-2");

  let newTaskId = document.createElement("div");
  newTaskId.className = "col-2";
  let newTaskSummary = document.createElement("div");
  newTaskSummary.className = "col";
  let newTaskTime = document.createElement("div");
  newTaskTime.className = "col-2";

  newTaskId.innerHTML = task.id;
  newTaskSummary.innerHTML = task.summary;
  newTaskTime.innerHTML = task.time.toDateString();
  newTask.id = "Task" + task.id.toString();
  newTask.appendChild(newTaskId);
  newTask.appendChild(newTaskSummary);
  newTask.appendChild(newTaskTime);
  // Now add it to the container
  taskList.appendChild(newTask);

  return true;
}

$(function () {
  console.log("Hello Time Tracker");

  if (tasks.length > 0) {
    createDefaultTasks();
  }

  // Add event listener for adding a new task
  document
    .getElementById("newTaskSubmit")
    .addEventListener("click", function () {
      console.log("you are trying to create a new task");
      let newId = tasks.length + 1;
      let newSummary = document.getElementById("newTaskSummary").value;
      let newDate = document.getElementById("newTaskDate").value;

      let newTask = new Task(
        newId,
        newSummary,
        new Date(newDate).toUTCString()
      );

      tasks.push(newTask);
      let done = addTask(newTask);

      if (done) {
        $("#newTaskModal").modal("hide");
      }
    });

  $("#newTaskBtn").click(function () {
    $("#newTaskModal").modal("show");
  });

  $("#newTaskModalX").click(function () {
    $("#newTaskModal").modal("hide");
  });

  $("#newTaskModalCancel").click(function () {
    $("#newTaskModal").modal("hide");
  });
});
