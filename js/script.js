//Menue big/small on scroll
$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("#header").removeClass("large").addClass("small");
	} else {
		$("#header").removeClass("small").addClass("large");
	}
	
});


//Mobile nav
$(document).ready(function(){

    var log = function(a){
        $(".info").html( $(".info").html() + "<br/>" + a );
    };
    
    var toggleClick = function(){

        var divObj = $(this).next();
        var nstyle = divObj.css("display");

        if(nstyle == "none"){
            divObj.slideDown(false,function(){
                $("html").bind("click",function(){
                    divObj.slideUp();
                    $("html").unbind("click");
                });
            });
        }
    };

    $(".clickme").click(toggleClick);
   
});

	
//Activ class on nav

var sections = $('section')
  , nav = $('nav')
  , nav_height = $('#header').outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height - 1,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a[href*="#"]').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  
  return false;
});
	

//Smoth scrooll
	 
	  
	 // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
	 


(function($){
    $.fn.extend({ 
        rotaterator: function(options) {
 
            var defaults = {
                fadeSpeed: 10000,
                pauseSpeed: 2000,
				child:null
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                  var o =options;
                  var obj = $(this);                
                  var items = $(obj.children(), obj);
				  items.each(function() {$(this).hide();})
				  if(!o.child){var next = $(obj).children(':first');
				  }else{var next = o.child;
				  }
				  $(next).fadeIn(o.fadeSpeed, function() {
						$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
							var next = $(this).next();
							if (next.length == 0){
									next = $(obj).children(':first');
							}
							$(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
						})
					});
            });
        }
    });
})(jQuery);

 $(document).ready(function() {
        $('#rotate').rotaterator({fadeSpeed:1000, pauseSpeed:9000});
 });
