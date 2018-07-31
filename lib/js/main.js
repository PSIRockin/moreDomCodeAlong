let first = document.getElementById("first");
//first.style.visibility = "hidden";
//first.style.display = "none"
//first.remove();

let thirdSmiley = document.createElement("img");
let mainContainer = document.getElementsByClassName("main-container")[0];

mainContainer.appendChild(thirdSmiley);
thirdSmiley.src = "assets/cry.png";