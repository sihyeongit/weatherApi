const curdate = new Date();

let year = curdate.getFullYear();
let month = curdate.getMonth() + 1;
let date = curdate.getDate();

let realDate = year + "." + month + "." + date;

let datejs = document.getElementById("date");
datejs.textContent = realDate;
let weather = document.getElementById("weather");

function handleToDoSumbmit(event){
    event.preventDefault();
    
    var parentElement = document.getElementById("memotext");

    var newElement = document.createElement("p");
    newElement.textContent = toDoInput.value;;
    parentElement.appendChild(newElement);
    toDoInput.value = "";
    newElement.addEventListener("click", function() {
        newElement.remove();
        
    });
}

const todoForm = document.getElementById("todo-form");
const toDoInput = todoForm.querySelector("input");
todoForm.addEventListener("submit", handleToDoSumbmit);

const a = document.getElementById("memo");
const b = document.getElementById("onmemo").querySelector("span");
onmemo.addEventListener("click", function () {
  var computedStyle = getComputedStyle(a);
  if (computedStyle.zIndex === "1") {
    b.innerHTML = "켜기"
    a.style.zIndex = -3;
  } else {
    b.innerHTML = "끄기"
    a.style.zIndex = 1;
  }
});

