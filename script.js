const inputBtn = document.getElementById("input-btn");
const inputBox = document.getElementById("input-box");
const listItems = document.getElementById("list-items");

//TO DISPLAY INPUT
inputBtn.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("Common, Set a task for yourself😉");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listItems.appendChild(li);
    //TO ADD CANCEL
    let span = document.createElement("span");
    span.innerHTML = " \u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});
//TO CHECK, UNCHECK AND DELETE
listItems.addEventListener(
  "click",
  function (checkTheLIst) {
    if (checkTheLIst.target.tagName === "LI") {
      checkTheLIst.target.classList.toggle("checked");
      saveData();
    } else if (checkTheLIst.target.tagName === "SPAN") {
      checkTheLIst.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listItems.innerHTML);
}

function showTaskList() {
  listItems.innerHTML = localStorage.getItem("data");
}

showTaskList();
