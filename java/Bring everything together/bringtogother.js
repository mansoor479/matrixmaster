
let btn = document.getElementById("btn_name");
btn.addEventListener("click", function (){
    let user_name = document.getElementById("name_inbut").value;
    let text = document.getElementById("greeting");
    text.textContent = `Hello ${user_name}`;
    if(user_name ==2){
        alert("enter the right name");
    }

})

   let age_bttn = document.getElementById("btn_age");
   

 age_bttn.addEventListener("click", function(){
    let age_inbut  = document.getElementById("age_input").value;
    let text = document.getElementById("greeting1");
    if(age_inbut == 0){
        alert("you need enter your age");
       
    }
    if(age_inbut >= 18){
        text.textContent = 'you cane enter';

    }else{
        text.textContent = `you need ${18-age_inbut} years left to enter`;
        
    }
})
