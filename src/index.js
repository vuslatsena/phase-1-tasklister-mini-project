document.addEventListener("DOMContentLoaded", () => {
  // your code here
document.addEventListener("DOMContentLoaded", () => {
  const task = document.querySelector('#new-task-description');
  const todo = document.querySelector("#tasks");
  const button = document.querySelector('#submit-button');

  button.addEventListener('click', (event)=>{
    event.preventDefault();
    const adding = task.value;
    const toadd = document.createElement("li");
    toadd.textContent = adding;
    todo.appendChild(toadd);
    task.value="";
  })
});
});
