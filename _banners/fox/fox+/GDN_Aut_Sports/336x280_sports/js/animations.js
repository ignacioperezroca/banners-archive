$(document).ready(function(){
// <!-- STAR FRAME 1 -->

	setTimeout(function(){
		$('.frame-02.main-background').animate({opacity: '1'},{
			duration: 600,
		});
	}, 1000) 

	setTimeout(function(){
		$('.frame-03.main-background').animate({opacity: '1'},{
			duration: 600,
		});
	}, 2300) 

	setTimeout(function(){
		$('.frame-04.main-background').animate({opacity: '1'},{
			duration: 600,
		});
	}, 3600) 

	setTimeout(function(){
		$('.img-frame--01').animate({opacity: '1', left: '0'},{
			duration: 300,
		});
	}, 3900)
	setTimeout(function(){
		$('.img-frame--02').animate({opacity: '1', right: '0'},{
			duration: 300,
		});
	}, 3900)

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
	}, 5200)

	setTimeout(function(){
		$('.img-frame--03').removeClass('transformation');
	}, 5400)

	// setTimeout(function(){
	// 	$('.img-frame--03').addClass('transformation');
	// }, 5600)

	// setTimeout(function(){
	// 	$('.img-frame--03').removeClass('transformation');
	// }, 5800)

	setTimeout(function(){
		$('.img-frame--04').animate({opacity: '1'},{
			duration: 300,
		});
	}, 6000)

	setTimeout(function(){
		$('.img-frame--03').addClass('transformation');
	}, 8000)

	setTimeout(function(){
		$('.img-frame--03').removeClass('transformation');
	}, 8200)


// <!-- END FRAME 1 -->
// <!-- FRAME 2 -->
// <!-- END FRAME 2 -->
});
