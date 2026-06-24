$(document).ready(function(){
// <!-- STAR FRAME 1 -->
	
	setTimeout(function(){
		$('.img-frame--01').addClass('fadeIn leftIn');
	}, 500)

	setTimeout(function(){
		$('.white-block--01').addClass('rightIn');
	}, 1500)

	setTimeout(function(){
		$('.img-frame--02').addClass('fadeIn leftIn');
	}, 2000)

	setTimeout(function(){
		$('.img-frame--03').addClass('fadeIn leftIn');
	}, 2400)

	setTimeout(function(){
		$('.img-frame--04').addClass('fadeIn');
		$('.white-block--01').addClass('fadeIn');
	}, 2800)

	setTimeout(function(){
		$('.img-frame--02 , .img-frame--03 , .img-frame--04').addClass('fadeOut');
	}, 5000)

	setTimeout(function(){
		$('.white-block--01').css('right' , '-86px');
	}, 5500)

	setTimeout(function(){
		$('.img-frame--05').addClass('fadeIn topIn');
		$('.white-block--03').addClass('fadeIn');
	}, 6000)

	setTimeout(function(){
		$('.img-frame--01').css('margin-left' , '100px');
		$('.white-block--03').addClass('leftIn');
	}, 6500)

	setTimeout(function(){
		$('.img-frame--06').addClass('fadeIn topIn');
	}, 7000)

	setTimeout(function(){
		$('.img-frame--07').addClass('btn-scaled');
		$('.img-frame--07').animate({opacity: '1'},{
			duration: 300,
		});
		$(document).on("mouseover", "img", function(e){
			$('.img-frame--07').addClass('btn-hovered');
		});
		$(document).on("mouseleave", "img", function(evento){
			$('.img-frame--07').removeClass('btn-hovered');
		});
	}, 7500)

	setTimeout(function(){
		$('.img-frame--07').removeClass('btn-scaled');
	}, 7700)


	setTimeout(function(){
		$('.img-frame--07').addClass('btn-scaled');
	}, 9500)

	setTimeout(function(){
		$('.img-frame--07').removeClass('btn-scaled');
	}, 9700)

// <!-- END FRAME 1 -->
// <!-- FRAME 2 -->
// <!-- END FRAME 2 -->
});

