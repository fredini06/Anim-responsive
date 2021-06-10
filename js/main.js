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
      });

    $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
          }
      });

      $("#team-members").owlCarousel(
        {responsive : {
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:3
                }
        }}
//        items:3,
//        autoplay:true,
//        smartSpeed:700,
//        loop:true,
//        autoplayHoverPause:true,
            
    );

    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });

    $('a').smoothScroll();

});

//==============Texte défilant=================//

var typed = new Typed('.type', {
    // Waits 1000ms after typing "First"
    strings: ['<strong>Développement </strong><strong class="primary">Web</strong>', '<strong>et Web</strong> <strong class="primary">Design</strong>'],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true            
            });