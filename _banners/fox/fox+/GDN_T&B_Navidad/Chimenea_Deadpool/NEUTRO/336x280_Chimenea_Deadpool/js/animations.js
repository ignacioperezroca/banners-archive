$(document).ready(function(){
// <!-- STAR FRAME 1 -->
	
	setTimeout(function(){
		$('.frame-01.main-background').addClass('scaled');
	}, 150)

	setTimeout(function(){
		$('.img-frame--01').animate({opacity: '1'},{
			duration: 500,
		});
	}, 500)

	setTimeout(function(){
		$('.frame-02.main-background').animate({opacity: '1'},{
			duration: 500,
		});
	}, 3000)

	setTimeout(function(){
		$('.img-frame--02').animate({opacity: '1', top: '0'},{
			duration: 300,
		});
	}, 3600)

	setTimeout(function(){
		$('.img-frame--03').animate({opacity: '1', left: '0'},{
			duration: 300,
		});
	}, 4200)

	setTimeout(function(){
		$('.img-frame--04').animate({opacity: '1', right: '0'},{
			duration: 300,
		});
	}, 4200)

	setTimeout(function(){
		$('.img-frame--05').addClass('transformation');
		$('.img-frame--05').animate({opacity: '1'},{
			duration: 300,
		});
		$(document).on("mouseover", "img", function(e){
			$('.img-frame--05').addClass('transformationed');
		});
		$(document).on("mouseleave", "img", function(evento){
			$('.img-frame--05').removeClass('transformationed');
		});
	}, 5200)

	setTimeout(function(){
		$('.img-frame--05').removeClass('transformation');
	}, 5400)


	setTimeout(function(){
		$('.img-frame--05').addClass('transformation');
	}, 8000)

	setTimeout(function(){
		$('.img-frame--05').removeClass('transformation');
	}, 8200)

// <!-- END FRAME 1 -->
// <!-- FRAME 2 -->
// <!-- END FRAME 2 -->
});
