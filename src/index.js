document.addEventListener("DOMContentLoaded", () => {
  
});

let form = document.querySelector("#create-task-form")
let taskBox = document.querySelector("#new-task-description")
let newTask = document.querySelector("#list")

form.addEventListener("submit", function(e){
  e.preventDefault()
  let createNewTask = document.createElement("li")
  createNewTask.innerText = taskBox.value
  newTask.append(createNewTask)


})