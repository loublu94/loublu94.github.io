	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tlPath = new TimelineMax();
	tlPath
	    .fromTo('.line1 .line2 .line3 .line4', .1, {
	        drawSVG: "0%"
	    }, {
	        drawSVG: "100%"
	    })


	$(document).ready(function () {
	    //variable for the 'stroke-dashoffset' unit
	    var $dashOffset = $(".path").css("stroke-dashoffset");
	    //on a scroll event - execute function
	    $(window).scroll(function () {
	        //calculate how far down the page the user is 
	        var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 6000);
	        //convert dashoffset pixel value to interger
	        var $newUnit = parseInt($dashOffset, 0);
	        //get the value to be subtracted from the 'stroke-dashoffset'
	        var $offsetUnit = $percentageComplete * ($newUnit / 2000);
	        //set the new value of the dashoffset to create the drawing effect
	        $(".path").css("stroke-dashoffset", $newUnit - $offsetUnit);
	    });
	});



	jQuery(document).ready(function () {
	    jQuery('.skillbar').each(function () {
	        jQuery(this).find('.skillbar-bar').animate({
	            width: jQuery(this).attr('data-percent')
	        }, 6000);
	    });
	});



	$(window).scroll(function () {
	    var $height = $(window).scrollTop();
	    if ($height > 10000) {
	        $('.skillbar').addClass('active');
	    } else {
	        $('.skillbar').removeClass('active');
	    }
	});



	var slideIndex = 1;
	showDivs(slideIndex);

	function plusDivs(n) {
	    showDivs(slideIndex += n);
	}

	function showDivs(n) {
	    var i;
	    var x = document.getElementsByClassName(" mySlides2");
	    if (n > x.length) {
	        slideIndex = 1
	    }
	    if (n < 1) {
	        slideIndex = x.length
	    }
	    for (i = 0; i < x.length; i++) {
	        x[i].style.display = "none";
	    }
	    x[slideIndex - 1].style.display = "block";
	}

	var slideIndex = 1;
	showDivs(slideIndex);

	function plusDivs(n) {
	    showDivs(slideIndex += n);
	}

	function showDivs(n) {
	    var i;
	    var x = document.getElementsByClassName(" mySlides");
	    if (n > x.length) {
	        slideIndex = 1
	    }
	    if (n < 1) {
	        slideIndex = x.length
	    }
	    for (i = 0; i < x.length; i++) {
	        x[i].style.display = "none";
	    }
	    x[slideIndex - 1].style.display = "block";
	}

	$('.slider').owlCarousel({      
	    items: 4,
	          singleItem: true,
	          nav: true,
	    dots: false,
	    loop: true,
	    autoPlay: 100
	});





	$('ul.tabs li').click(function () {
	    var tab_id = $(this).attr('data-tab');

	    $('ul.tabs li').removeClass('current');
	    $('.tab-content').removeClass('current');

	    $(this).addClass('current');
	    $("#" + tab_id).addClass('current');
	});
