$(document).ready(function(){
// <!-- STAR FRAME 1 -->

	setTimeout(function(){
		$('.img-frame--01').animate({opacity: '1'},{
			duration: 300,
		});
	}, 300)

	setTimeout(function(){
		$('.img-frame--02').animate({opacity: '1'},{
			duration: 300,
		});
	}, 900)

	setTimeout(function(){
		$('.img-frame--02').animate({opacity: '0'},{
			duration: 300,
		});
	}, 3800)

	setTimeout(function(){
		// $('.img-frame--01').addClass('scaled');
	}, 4500)

	setTimeout(function(){
		$('.img-frame--03').animate({opacity: '1', top: 0},{
			duration: 100,
		});
	}, 4600)

	setTimeout(function(){
		$('.img-frame--04').animate({opacity: '1', left: 0},{
			duration: 100,
		});
	}, 4800)

	setTimeout(function(){
		$('.img-frame--05').animate({opacity: '1', left: 0},{
			duration: 300,
		});
	}, 6000)

	setTimeout(function(){
		$('.img-frame--06').animate({opacity: '1', left: 0},{
			duration: 300,
		});
	}, 6000)

	setTimeout(function(){
		$('.img-frame--07').addClass('transformation');
		$('.img-frame--07').animate({opacity: '1'},{
			duration: 300,
		});
		$(document).on("mouseover", "img", function(e){
			$('.img-frame--07').addClass('transformationed');
		});
		$(document).on("mouseleave", "img", function(evento){
			$('.img-frame--07').removeClass('transformationed');
		});
	}, 6600)

	setTimeout(function(){
		$('.img-frame--07').removeClass('transformation');
	}, 6800)

	setTimeout(function(){
		$('.img-frame--07').addClass('transformation');
	}, 9000)

	setTimeout(function(){
		$('.img-frame--07').removeClass('transformation');
	}, 9200)


// <!-- END FRAME 1 -->
// <!-- FRAME 2 -->
// <!-- END FRAME 2 -->
});
