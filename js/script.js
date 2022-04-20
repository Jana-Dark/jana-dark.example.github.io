

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
});

const aboutItemImage =
 document.querySelector(".about-item-image");


 /*window.addEventListener( "scroll", function (){
     let scrollAboutImage =window.scrollY;

     if (scrollAboutImage>700) {
         aboutItemImage.classList.add('rotate');
     }

     if (scrollAboutImage>900) {
         aboutItemImage.classList.remove('rotate');
     }
     console.log(scrollAboutImage);
 }); */


 // inputmask
 const form = document.querySelector('form');
 const telSelector = form.querySelector('input[type="tel"]');
 const inputMask = new Inputmask ('+38 (099) 999-99-99');
 inputMask.mask(telSelector);

 const validation = new JustValidate('.form');
 validation
     .addField('.input-name', [
      {
       rule: 'minLength',
       value: 3,
      },
      {
       rule: 'maxLength',
       value: 15,
      },
      {
       rule: 'required',
       value: true,
       errorMessage: 'Введите имя!',
      }
     ])
     .addField('.input-tel', [
      {
       rule: 'required',
       value: true,
       errorMessage: 'Введите телефон',
      },
      {
       rule: 'function',
       validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 9;
       },
       errorMessage: 'Введите корректный телефон',
      },
     ]).onSuccess((event) => {
     console.log('Validation passes and form submitted', event);

     let formData = new FormData(event.target);

     let xhr = new XMLHttpRequest();

     xhr.onreadystatechange = function () {
         if (xhr.readyState === 4) {
             if (xhr.status === 200) {
                 console.log('Отправлено');
             }
         }
     }

     xhr.open('POST', 'mail.php', true);
     xhr.send(formData);

     event.target.reset();
 });




 /*new window.JustValidate('.form', {
  rules: {
   name: {
    required: true
   },

   tel : {
     required: true,
     function: () => {
     const phone =telSelector.inputmask.unmaskedvalue();
     return Number (phone) && phone.length === 10;
    }
   }
  },
  messages :{
   name: {
    required : 'Введите имя',
    minLength: 'Введите 3 и более символов',
    maxLength: 'Запрещено воодить более 15 символов'
   }
  },
  submitHandler: function(thisForm) {

  }

 })*/








/*$(document).ready(function() {

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

});*/