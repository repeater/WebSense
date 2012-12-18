$(document).ready(function(){	
	/*
	----------------------------------------------------------------------
	ANIMATED STICKY LEFT NAV AND RIGHT RAIL
	----------------------------------------------------------------------
	
	var $sidebar = $(".scroller");
	var $biggest;
	$window = $(window);
	offset = $sidebar.offset();
	topPadding = 30;
	
	if( $('#left-nav').outerHeight() > $('#right-rail').outerHeight() )
		$biggest = $('#left-nav');
	else
		$biggest = $('#right-rail');
	
	var footTop = $('#main-content').outerHeight();
	var maxY = footTop - $biggest.outerHeight();

	$window.scroll(function() {
		if ($window.scrollTop() > offset.top && $window.scrollTop() < maxY) {
			$sidebar.stop().animate({
				marginTop: $window.scrollTop() - offset.top + topPadding
			});
		} else {
			$sidebar.stop().animate({
				marginTop: 0
			});
		}
	});
	*/
	
	/*
	----------------------------------------------------------------------
	RIGHT RAIL OPEN CLOSE CHILDREN
	----------------------------------------------------------------------
	*/
	$('#right-rail ul li.hasChildren').live('click',function(e){
		e.preventDefault();
		$(this).toggleClass('closed').children('ul').slideUp(200);
	})
	
	$('#right-rail ul li.closed').live('click',function(e){
		e.preventDefault();
		$(this).children('ul').slideDown(200, function(){
			$('#right-rail ul li.closed').toggleClass('closed');
		});
	})
	
	/*
	----------------------------------------------------------------------
	SECONDARY TAB HOVER ANIMATIONS
	----------------------------------------------------------------------
	*/
	
	var webPos = $('#web-tab a').position();
	var emailPos = $('#email-tab a').position();
	var dataPos = $('#data-tab a').position();
	var mobilePos = $('#mobile-tab a').position();
	var activePos = $('.active a').position();
	
	$('#product-tabs #triton-tab').hover(function(){
		var tritonPos = $(this).position();
		$('#web-tab a').css({
			'position':'absolute',
			'zindex':0,
			'left' : webPos.left
		})
		$('#email-tab a').css({
			'position':'absolute',
			'zindex':0,
			'left' : emailPos.left
		})
		$('#data-tab a').css({
			'position':'absolute',
			'zindex':0,
			'left' : dataPos.left
		})
		$('#mobile-tab a').css({
			'position':'absolute',
			'zindex':0,
			'left' : mobilePos.left
		})
		
		$('#product-tabs ul li:not(#triton-tab) a').filter(':not(:animated)').animate({
			left: tritonPos.left,
			opacity: 0
		
		
		}, 300, function(){
			$('#product-tabs ul li:not(#triton-tab) a').css({'display':'none'});
			$('.active a').css({'display':'block'}).animate({left: activePos.left, opacity: 1}, 300);
			
			$('#triton-tab a').animate({fontSize: 22}, 50, function(){
				$('#triton-tab a').animate({fontSize: 19}, 50, function(){
					
				});
				
			})
		})
		
		
	}, function(){
		$('#web-tab a').css({'display':'block'}).stop(true, true).animate({
			left: webPos.left,
			opacity: 1
		}, 300);
		
		$('#email-tab a').css({'display':'block'}).stop(true, true).animate({
			left: emailPos.left,
			opacity: 1
		}, 300);
		
		$('#data-tab a').css({'display':'block'}).stop(true, true).animate({
			left: dataPos.left,
			opacity: 1
		}, 300);
		
		$('#mobile-tab a').css({'display':'block'}).stop(true, true).animate({
			left: mobilePos.left,
			opacity: 1
		}, 300);
	})
	
});	