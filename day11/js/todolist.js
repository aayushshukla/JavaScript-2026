const taskInput = document.getElementById("taskInput");
const addButton = document.querySelector("button");
const taskList = document.getElementById("taskList");

// step 1 adding listner for button
addButton.addEventListener("click", () => {
  // get value from task input field
  // .value to get element value
  const task = taskInput.value.trim(); // trim to remove whitespace
  console.log(task);

  if (task === "") {
    alert("Please enter task");
  }

  // creating list element
  const li = document.createElement("li");
  li.textContent = task;
  const taskDoneBtn = document.createElement("button"); // creating task done button
  taskDoneBtn.textContent = "✔️"; // adding text for task done button
  // appling css class task complete btn
  taskDoneBtn.classList.add("btn", "complete-btn"); // replacing btn class css with complete btn class style
  const taskRemoveBtn = document.createElement("button"); // creating task remove button
  taskRemoveBtn.textContent = "⚔️"; // adding text for task remove button
  taskDoneBtn.classList.add("btn", "delete-btn");
  // adding button to li ---  button are children to li tag
  li.appendChild(taskDoneBtn);
  li.appendChild(taskRemoveBtn);
  // li tag is child to ul  -- li is child of ul
  taskList.appendChild(li);
  // clear input fiedl
  taskInput.value = "";

  // mark task is complete when user click taskdonebtn
  taskDoneBtn.addEventListener("click", () => {
    li.classList.toggle("done");
  });
  // remove list element from list when user click remove task button
  taskRemoveBtn.addEventListener("click", () => {
    taskList.removeChild(li); // removing li child from the tasklist ul parent
  });
  // create a edit button edit task  - practice assignment
});
