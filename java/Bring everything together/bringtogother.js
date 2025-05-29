
let btn = document.getElementById("btn_name");
btn.addEventListener("click", function (){
    let user_name = document.getElementById("name_inbut").value;
    let text = document.getElementById("greeting");
    text.textContent = `Hello ${user_name}`;

})
