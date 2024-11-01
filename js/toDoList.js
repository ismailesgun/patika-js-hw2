
const LIST_DOM = document.getElementById("list");

function newElement() {
  const INPUT = document.getElementById("task");
  if (INPUT.value){
    let newLiDOM = document.createElement("li");
    newLiDOM.innerText = INPUT.value;
    let span = document.createElement('span');
    span.innerText = "\u00D7";
    span.className = "close";
    newLiDOM.appendChild(span);
    LIST_DOM.appendChild(newLiDOM);
    localStorage.setItem("task",INPUT.value)
    INPUT.value = "";
    $(".success").toast('show');
  }else{
    $(".error").toast('show')
  }

}
let liDOMsList = document.getElementsByTagName('li');
for (let i = 0; i < liDOMsList.length; i++){
  let span = document.createElement('span');
  span.innerText = "\u00D7";
  span.className = "close";
  liDOMsList[i].appendChild(span);
}



let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
