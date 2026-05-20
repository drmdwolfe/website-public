$(document).ready(function () {

	// Vimeo Variation 
	$('.video-overlay-vimeo').click(function () {
		var vimeo = $(this).closest('.video-module').attr('data-vimeo');
		var iframecode = '<div class="video-modal-container"><div class="video-modal-container-interior"><iframe class="video-modal-iframe" src="' + 'https://player.vimeo.com/video/' + vimeo + '?autoplay=1' +'" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div></div>';
		var modal = $(this).closest('.video-module').find('.video-modal-container');
		let greeting = document.querySelector('.injectVideo');
		let videomodal = document.querySelector('.video-modal');
		let iframe = document.querySelector('.video-modal-iframe');
		greeting.innerHTML = iframecode;
		videomodal.style.display = "block";	
		$('html').css('overflow', 'hidden');
		$('body').css('overflow', 'scroll');
	});
	
	$('.video-modal-close').click(function () {
		// $(this).closest('.video-module').find('.video-overlay').removeClass('active').css('opacity', '0');
		let greeting = document.querySelector('.injectVideo');
		$(this).closest('.video-modal').fadeOut();
		greeting.innerHTML = '';
		$('html').css('overflow', 'visible');
		$('body').css('overflow', 'visible');
	});


    // YouTube Variation
	$('.video-overlay-youtube').click(function () {
		var youtube = $(this).closest('.video-module').attr('data-youtube');
		var iframecode = '<div class="video-modal-container"><div class="video-modal-container-interior"><iframe class="video-modal-iframe" src="' + 'https://www.youtube-nocookie.com/embed/' + youtube + '?rel=0&autoplay=1' +'" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div></div>';
		var modal = $(this).closest('.video-module').find('.video-modal-container');
		let greeting = document.querySelector('.injectVideo');
		let videomodal = document.querySelector('.video-modal');
		let iframe = document.querySelector('.video-modal-iframe');
		greeting.innerHTML = iframecode;
		videomodal.style.display = "block";	
		$('html').css('overflow', 'hidden');
		$('body').css('overflow', 'scroll');
	});

});