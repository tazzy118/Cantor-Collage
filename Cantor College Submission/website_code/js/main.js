$(document).ready(function(){

    const menuBtn = document.getElementsByClassName('menu-btn')[0]

    const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    menuBtn.addEventListener('click' , () => {
        navbarLinks.classList.toggle('active')
    })
    
    /*For the subcribe button and menu drop down */

    function subscribe() {
        let name = prompt("What is your name?");
        let email = prompt("What is your email address?");

        /*if (email != ["@cantorcollege.ac.uk","@gmail.com","@icloud.com","@hotmail.com","@yahoo.com"])
            alert('Enter a valid email address!');

        else*/
        alert(`Thanks, ${name}! We'll be in touch soon!
        Please keep exploring the Cantor College website :)`);
    }

    let button = document.querySelector("button");
    button.addEventListener("click", subscribe);


    $("#student_button, #options").hover(function(){
        $("#options").show();
    },
    function(){
        $("#options").hide();
    });
});