/* let buttonTask = document.querySelector(".buttonSubmit");

buttonTask.addEventListener("click", function () {
  let task = document.querySelector(".taskText").value;
  let deadline = document.querySelector(".deadline").value;
  console.log(task, deadline);
  document.querySelector(".todo").innerHTML = task;
  document.querySelector(".time").innerHTML = deadline;
}); */



let buttonTask = document.querySelector(".buttonSubmit");

buttonTask.addEventListener("click", function () {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    json.forEach(element => {
      document.querySelector(".todo").innerHTML += `<p>${element.title}</p>`;
      document.querySelector(".time").innerHTML += `<p>${element.completed}</p>`;
    });
    
  });
}); 