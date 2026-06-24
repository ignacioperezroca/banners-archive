$(document).ready(function(){
// <!-- STAR FRAME 1 -->

	setTimeout(function(){
		$('.img-frame--01').addClass('bounceInDown');
		$('.img-frame--01').animate({opacity: '1'},{
			duration: 500,
		});
	}, 0) 

	setTimeout(function(){
		$('.img-frame--02').animate({opacity: '1', right: '0'},{
			duration: 300,
		});
	}, 150)

	setTimeout(function(){
		$('.img-frame--03').animate({opacity: '1'},{
			duration: 300,
		});
	}, 1600)

	setTimeout(function(){
		$('.img-frame--04').addClass('bounceInLeft');
		$('.img-frame--04').animate({opacity: '1', left: '0'},{
			duration: 300,
		});
	}, 3000)

// <!-- END FRAME 1 -->
// <!-- FRAME 2 -->
// <!-- END FRAME 2 -->
});
