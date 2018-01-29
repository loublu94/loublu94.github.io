	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
  var tlPath = new TimelineMax();
	tlPath
  .fromTo('.line1 .line2 .line3 .line4', .1, {drawSVG:"0%"}, {drawSVG:"100%"})


	$(document).ready(function() {
  //variable for the 'stroke-dashoffset' unit
  var $dashOffset = $(".path").css("stroke-dashoffset");
  //on a scroll event - execute function
  $(window).scroll(function() {
    //calculate how far down the page the user is 
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 10000);
    //convert dashoffset pixel value to interger
    var $newUnit = parseInt($dashOffset, 0);
    //get the value to be subtracted from the 'stroke-dashoffset'
    var $offsetUnit = $percentageComplete * ($newUnit / 10000);
    //set the new value of the dashoffset to create the drawing effect
    $(".path").css("stroke-dashoffset", $newUnit - $offsetUnit);
  });
});



	jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});



$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 10000) {
		$('.skillbar').addClass('active');
	} else {
		$('.skillbar').removeClass('active');
	}
});



$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});


