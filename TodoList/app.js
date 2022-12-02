const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

btn.addEventListener("click", () => {
  const TodoText = inp.value;

  if (TodoText === "") {
    alert("Empty Todo...");
    return;
  }

  const li = document.createElement("li");
  li.innerText = TodoText;

  // adding remove todo event
  li.addEventListener("click", () => {
    li.remove();
  });

  list.append(li);
  inp.value = "";
});
