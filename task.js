// /* function readTextFile(file, callback) {
//   let rawFile = new XMLHttpRequest();
//   rawFile.overrideMimeType("application/json");
//   rawFile.open("GET", file, true);
//   rawFile.onreadystatechange = function() {
//       if (rawFile.readyState === 4 && rawFile.status == "200") {
//           callback(rawFile.responseText);
//       }
//   }
//   rawFile.send(null);
// }

// readTextFile("/db.json", function(text){
//   let data = JSON.parse(text);
//   console.log(data.todos[0].title);
// }); */
fetch("/db.json")
  .then(function(res){
    return res.json()
  })
  .then(function(todosArr){
    let arr = Object.entries(todosArr);
    arr.forEach(([key,values]) => {
      console.log(key);
      values.forEach((value) =>{
        document.querySelector(".task").innerHTML += `<p><a>${value.title}</a></p>`;
        document.querySelector(".time").innerHTML += `<p>${value.id}</p>`
      })
    })
  })
  .catch(function(error){
    console.log(error)
  });
let buttonTask = document.querySelector(".buttonSubmit");

buttonTask.addEventListener("click", function () {
  let task = document.querySelector(".task").value;
  let deadline = document.querySelector(".time").value;
  console.log(task, deadline);
  document.querySelector(".todo").innerHTML = task;
  document.querySelector(".time").innerHTML = deadline;
})