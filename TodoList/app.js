const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

const removeTodo = (li)=> {
  
  li.querySelector("i").addEventListener("click", () => {
    li.remove();
  });

};

const checkTodo = (li) => {
  
   li.addEventListener("click", () => {
     li.classList.toggle("done");
   });
}

const addTodo = () => {
  
  const TodoText = inp.value;

  if (TodoText === "") {
    alert("Empty Todo...");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${TodoText} <i class="fa-solid fa-trash-can"></i>`;

  // remove todo
  removeTodo(li);

 // Mark todo
  checkTodo(li);


  list.append(li);
  inp.value = "";
};

// events
btn.addEventListener("click", () => {
  addTodo();
});

inp.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && e.target.value != "") addTodo();
});
