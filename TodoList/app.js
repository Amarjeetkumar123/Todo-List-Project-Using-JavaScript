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
  li.innerHTML = `${TodoText} <i class="fa-solid fa-trash-can"></i>`;

  // adding remove todo event
  li.querySelector("i").addEventListener("click", () => {
    li.remove();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  list.append(li);
  inp.value = "";
});


inp.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    const TodoText = inp.value;

    if (TodoText === "") {
      alert("Empty Todo...");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `${TodoText} <i class="fa-solid fa-trash-can"></i>`;

    // adding remove todo event
    li.querySelector("i").addEventListener("click", () => {
      li.remove();
    });

    li.addEventListener("click", () => {
      li.classList.toggle("done");
    });

    list.append(li);
    inp.value = "";
  }
});
