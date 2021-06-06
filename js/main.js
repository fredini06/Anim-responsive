jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01
      });

      $(window).scroll(function(){
          var top = $(window).scrollTop();
          if(top>=60){
              $('nav').addClass('secondary');
          } else {
              if($("nav").hasClass('secondary')) {
                $('nav').removeClass('secondary');
              }
          }
      })
});

//==============Texte défilant=================//

var typed = new Typed('.type', {
    // Waits 1000ms after typing "First"
    strings: ['<strong>Développement </strong><strong class="primary">Web</strong>', '<strong>et Web</strong> <strong class="primary">Design</strong>'],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true            
            });