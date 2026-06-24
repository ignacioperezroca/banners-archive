$(document).ready(function(){
// <!-- STAR FRAME 1 -->
	
	setTimeout(function(){
		$('.img-frame--01').addClass('fadeIn topIn');
	}, 500)

	setTimeout(function(){
		$('.img-frame--02').addClass('fadeIn');
	}, 1500)

	setTimeout(function(){
		$('.img-frame--03').addClass('fadeIn');
	}, 2500)

	setTimeout(function(){
		$('.img-frame--04').addClass('fadeIn topIn');
	}, 3500)

	setTimeout(function(){
		$('.img-frame--05').addClass('fadeIn leftIn');
	}, 4500)

	setTimeout(function(){
		$('.img-frame--06').addClass('fadeIn rightIn');
	}, 4500)

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
	}, 6000)

	setTimeout(function(){
		$('.img-frame--07').removeClass('btn-scaled');
	}, 6200)


	setTimeout(function(){
		$('.img-frame--07').addClass('btn-scaled');
	}, 8000)

	setTimeout(function(){
		$('.img-frame--07').removeClass('btn-scaled');
	}, 8200)

// <!-- END FRAME 1 -->
// <!-- FRAME 2 -->
// <!-- END FRAME 2 -->
});

