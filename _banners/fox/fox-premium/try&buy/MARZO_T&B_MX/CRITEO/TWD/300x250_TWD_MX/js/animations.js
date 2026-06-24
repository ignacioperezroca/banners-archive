$(document).ready(function(){
// <!-- STAR FRAME 1 -->
	
	setTimeout(function(){
		$('.img-frame--01').addClass('fadeIn topIn');
	}, 500)

	// setTimeout(function(){
	// 	$('.img-frame--01').css('margin-left' , '180px');
	// }, 1500)

	setTimeout(function(){
		$('.white-block--01').addClass('leftIn');
	}, 1700)

	setTimeout(function(){
		$('.img-frame--02').addClass('fadeIn leftIn');
	}, 2000)

	setTimeout(function(){
		$('.img-frame--03').addClass('fadeIn leftIn');
	}, 2400)

	setTimeout(function(){
		$('.img-frame--04').addClass('fadeIn leftIn');
		$('.white-block--01').addClass('fadeIn');
	}, 2800)

	setTimeout(function(){
		$('.img-frame--02 , .img-frame--03 , .img-frame--04').addClass('fadeOut');
	}, 5000)

	setTimeout(function(){
		$('.img-frame--01').css('margin-left' , '0px');
		$('.white-block--01').css('left' , '-180px');
	}, 5300)

	setTimeout(function(){
		$('.white-block--02').addClass('topIn');
	}, 5500)

	setTimeout(function(){
		$('.img-frame--05').addClass('fadeIn topIn');
	}, 6000)

	setTimeout(function(){
		$('.white-block--03').addClass('bottomIn');
	}, 6500)

	setTimeout(function(){
		$('.img-frame--06').addClass('fadeIn leftIn');
	}, 7000)

	setTimeout(function(){
		$('.img-frame--07').addClass('fadeIn');
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


