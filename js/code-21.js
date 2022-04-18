const mainDiv = document.querySelector(".user-21")
mainDiv.textContent = "Celeste";

const img = document.createElement("img");
img.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/7300/7300050.png")
img.setAttribute("class", "mainImg")

mainDiv.appendChild(img);
