
/*  let user;
 let userName ="vasya";
 user=userName;
 console.log(user);

 const mainTitle = document.querySelector ("#main-title");
 const mainHeaderMenu =document.querySelectorAll("#main-header-menu");

console.log(mainHeaderMenu);

window.addEventListener( "scroll", function (){
 let scrollingPos =window.scrollY;

 if (scrollingPos>5) {
     mainTitle.classList.add('red');
 }
 else {
     mainTitle.classList.remove('red');
 }
 console.log(scrollingPos);
});

const aboutItemImage =
 document.querySelector(".about-item-image");


 window.addEventListener( "scroll", function (){
     let scrollAboutImage =window.scrollY;

     if (scrollAboutImage>700) {
         aboutItemImage.classList.add('rotate');
     }

     if (scrollAboutImage>900) {
         aboutItemImage.classList.remove('rotate');
     }
     console.log(scrollAboutImage);
 }); */

$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});