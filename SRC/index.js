document.addEventListener("DOMContentLoaded" , () => {
   let name1 =  prompt("Hello,what's your name?");
   alert(`Welcome to our site ${name1}`);
})

let btn = document.getElementById("btn" );
    btn.addEventListener("click" , () => {
    alert("Thank you for subscribing.")
    });
