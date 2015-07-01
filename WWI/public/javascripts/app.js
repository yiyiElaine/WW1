var main = function() {  

	$('.btn').click(function() {
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text('1000');
    $('.btn').addClass('disabled'); 
  });
  
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 1000 - postLength;
    $('.counter').text(charactersLeft);
  
    if(charactersLeft < 0) {
      $('.btn').addClass('disabled'); 
    }
    else if(charactersLeft == 1000) {
      $('.btn').addClass('disabled');
    }
    else {
      $('.btn').removeClass('disabled');
    }
  });
  
  $('.btn').addClass('disabled');

/*
	// when home is clicked
	$('.navbar-header').click(function(){
		$('.viewstory').css('display', 'none');
		$('.overview').css('display', 'none');
		$('.places2see').css('display', 'none');
		$('.pointA').css('display', 'none');
		
		$('.slider').css('display', 'block');
		$('.slider-nav').css('display', 'block');
	});
	
	// when overview is clicked
	$('#ovbutton').click(function(){
		$('.slider').css('display', 'none');
		$('.slider-nav').css('display', 'none');
		$('.viewstory').css('display', 'none');
		$('.places2see').css('display', 'none');
		$('.pointA').css('display', 'none');
		
		$('.overview').css('display', 'block');
	});
	
	// when view story is clicked
	$('#vsbutton').click(function(){
		$('.slider').css('display', 'none');
		$('.slider-nav').css('display', 'none');
		$('.overview').css('display', 'none');
		$('.places2see').css('display', 'none');
		$('.pointA').css('display', 'none');
		
		$('.viewstory').css('display', 'block');

	});
	
	// when places-to-see is clicked
	$('#p2s').click(function(){
		$('.slider').css('display', 'none');
		$('.slider-nav').css('display', 'none');
		$('.overview').css('display', 'none');
		$('.viewstory').css('display', 'none');
		$('.pointA').css('display', 'none');
		
		$('.places2see').css('display', 'block');
	});
	
	// when point A is clicked
	$('#pA').click(function(){
		$('.slider').css('display', 'none');
		$('.slider-nav').css('display', 'none');
		$('.overview').css('display', 'none');
		$('.viewstory').css('display', 'none');
		$('.places2see').css('display', 'none');
		
		$('.pointA').css('display', 'block');
		
	});
	*/
	$('.arrow-next').click(function() {
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();

		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		if(nextSlide.length === 0) {
			nextSlide = $('.slide').first();
			nextDot = $('.dot').first();
		}
    
		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});


	$('.arrow-prev').click(function() {
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();

		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();

		if(prevSlide.length === 0) {
			prevSlide = $('.slide').last();
			prevDot = $('.dot').last();
		}
    
		currentSlide.fadeOut(600).removeClass('active-slide');
		prevSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
	});
}

$(document).ready(main);