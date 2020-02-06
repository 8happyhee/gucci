(function($){
    $.fn.scrollingTo = function( opts ) {
        var defaults = {
            animationTime : 1000,
            easing : '',
            callbackBeforeTransition : function(){},
            callbackAfterTransition : function(){}
        };

        var config = $.extend( {}, defaults, opts );

        $(this).click(function(e){
            var eventVal = e;
            e.preventDefault();

            var $section = $(document).find( $(this).data('section') );
            if ( $section.length < 1 ) {
                return false;
            };

            if ( $('html, body').is(':animated') ) {
                $('html, body').stop( true, true );
            };

            var scrollPos = $section.offset().top;

            if ( $(window).scrollTop() == scrollPos ) {
                return false;
            };

            config.callbackBeforeTransition(eventVal, $section);

            $('html, body').animate({
                'scrollTop' : (scrollPos+'px' )
            }, config.animationTime, config.easing, function(){
                config.callbackAfterTransition(eventVal, $section);
            });
        });
    };

}(jQuery));



jQuery(document).ready(function(){
	"use strict";
	new WOW().init();


(function(){
 jQuery('.smooth-scroll').scrollingTo();
}());

});


// fancybox
$(".fancybox").fancybox({
    padding: 0,

    openEffect : 'elastic',
    openSpeed  : 450,

    closeEffect : 'elastic',
    closeSpeed  : 350,

    closeClick : true,
    helpers : {
        title : { 
            type: 'inside' 
        },
        overlay : {
            css : {
                'background' : 'rgba(0,0,0,0.8)'
            }
        }
    }
});

// scroll nav on
var menu =$(".main-menu a");

menu.click(function(){
  $(menu).removeClass("active");
  $(this).addClass("active");
})

$(window).on("scroll",function(){
  var scroll =$(window).scrollTop();
  var bg1_top =$(".bg1").offset().top;
  var bg2_top =$(".bg2").offset().top;
  var bg3_top =$(".bg3").offset().top;
  var bg4_top =$(".bg4").offset().top;

    if(scroll>=0 && scroll<bg1_top-100){
      menu.removeClass("active");
      menu.eq(0).addClass("active");
    }
    if(scroll>=bg1_top-100 && scroll<bg2_top-100){
      menu.removeClass("active");
      menu.eq(1).addClass("active");
    }
    if(scroll>=bg2_top-100 && scroll<bg3_top-100){
      menu.removeClass("active");
      menu.eq(2).addClass("active");
    }
    if(scroll>=bg3_top-100 && scroll<bg4_top-100){
      menu.removeClass("active");
      menu.eq(3).addClass("active");
    }

    if(scroll>=bg4_top-200 && scroll<bg4_top-100){
      menu.removeClass("active");
      menu.eq(4).addClass("active");
    }



  })





 




