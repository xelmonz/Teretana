$(function() {
    const forma= document.getElementById('kontakt');

      var myModal = new bootstrap.Modal(document.getElementById('myModal'),focus);
      var $forma = $("#kontakt");

        $forma.validate({
          rules:{
            ime:{
              required: true,
              minlength: 1
            },
            prezime:{
              required: true,
              minlength: 1
            },
            email:{
              required: true,
              email: true
            },
            poruka:{
              required: true,
              minlength: 2
            }
          },
          messages:{
            ime:{
              required: "Molimo Vas da unesete svoje ime"
            },
            prezime:{
              required: "Molimo Vas da unesete svoje prezime"
            },
            email: {
              required: "Molimo Vas da unesete svoj email u pravilnom formatu",
              email: "Molimo Vas da unesete svoj email u pravilnom formatu"
            },
            poruka:{
              required: "Molimo Vas da unesete svoju poruku"
            }
          },
          submitHandler: function(form) {
          myModal.show() 
          //Reset forme
          setTimeout(function() {
          forma.reset();
      }, 1000); 
          // return false;   
          } 
        });      
    });
