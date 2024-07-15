function cat(){
    const user14 =document.querySelector("#users>.user-14");
    user14.textContent="貓貓";
    const img = document.createElement('img');
    img.src = 'https://placekitten.com/300/200';
    img.style.width = '30px'; 
    img.style.hight = '30px'; 
    user14.appendChild(img);
}
cat();
