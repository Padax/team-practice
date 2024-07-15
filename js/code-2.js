let user = document.querySelector(".user-2");
user.innerHTML = "<button id='myBtn'>按鈕</button>";

let button = document.getElementById("myBtn");
button.addEventListener("click", function() {alert("大家好");});
