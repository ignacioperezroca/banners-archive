$(document).ready(function(){
// <!-- STAR FRAME 1 -->
	
	setTimeout(function(){
		$('.img-frame--01').addClass('fadeIn topIn');
	}, 500)

	setTimeout(function(){
		$('.white-block--01').addClass('fadeIn bottomIn');
	}, 1500)

	setTimeout(function(){
		$('.img-frame--02').addClass('fadeIn leftIn');
	}, 2000)

	setTimeout(function(){
		$('.img-frame--03').addClass('fadeIn leftIn');
	}, 2400)

	setTimeout(function(){
		$('.img-frame--04').addClass('fadeIn leftIn');
	}, 2800)

	setTimeout(function(){
		$('.img-frame--02 , .img-frame--03 , .img-frame--04').addClass('fadeOut');
	}, 5000)

	setTimeout(function(){
		$('.white-block--01').css('bottom' , '-70px');
		$('.img-frame--01').css('top' , '70px');
		$('.white-block--02').addClass('fadeIn topIn');
	}, 5500)

	setTimeout(function(){
		$('.img-frame--05').addClass('fadeIn topIn');
	}, 6000)

	setTimeout(function(){
		$('.img-frame--06').addClass('fadeIn rightIn');
	}, 6500)

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
	}, 7000)

	setTimeout(function(){
		$('.img-frame--07').removeClass('btn-scaled');
	}, 7200)


	setTimeout(function(){
		$('.img-frame--07').addClass('btn-scaled');
	}, 9000)

	setTimeout(function(){
		$('.img-frame--07').removeClass('btn-scaled');
	}, 9200)

// <!-- END FRAME 1 -->
// <!-- FRAME 2 -->
// <!-- END FRAME 2 -->
});

