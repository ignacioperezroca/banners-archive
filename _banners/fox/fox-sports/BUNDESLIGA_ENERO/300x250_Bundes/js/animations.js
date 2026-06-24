$(document).ready(function(){
// <!-- STAR FRAME 1 -->

	setTimeout(function(){
		$('.img-frame--04').addClass('opacityOn');
	}, 500)

	setTimeout(function(){
		$('.img-frame--01').addClass('opacityOn');
	}, 1200)

	setTimeout(function(){
		$('.img-frame--02').animate({opacity: '1', bottom: '0'},{
			duration: 300,
		});
	}, 1900)

	setTimeout(function(){
		$('.img-frame--03').addClass('transformation');
		$('.img-frame--03').animate({opacity: '1'},{
			duration: 300,
		});
		$(document).on("mouseover", "img", function(e){
			$('.img-frame--03').addClass('transformationed');
		});
		$(document).on("mouseleave", "img", function(evento){
			$('.img-frame--03').removeClass('transformationed');
		});
	}, 3000)

	setTimeout(function(){
		$('.img-frame--03').removeClass('transformation');
	}, 3200)


	setTimeout(function(){
		$('.img-frame--03').addClass('transformation');
	}, 5000)

	setTimeout(function(){
		$('.img-frame--03').removeClass('transformation');
	}, 5200)

// <!-- END FRAME 1 -->
});
