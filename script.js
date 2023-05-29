const inputBoxEl = document.getElementById("input-box");

const ListContainerEl = document.getElementById("list-container");

function AddTask() {
  if (inputBoxEl.value === "") {
    alert("You Must write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBoxEl.value;
    ListContainerEl.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBoxEl.value = "";

  saveData();
}

ListContainerEl.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");

    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", ListContainerEl.innerHTML);
}

function showTask() {
  ListContainerEl.innerHTML = localStorage.getItem("data");
}

showTask();
