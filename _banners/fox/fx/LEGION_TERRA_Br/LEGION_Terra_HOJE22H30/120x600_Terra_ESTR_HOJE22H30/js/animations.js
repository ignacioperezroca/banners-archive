$(document).ready(function(){
// <!-- STAR FRAME 1 -->
	
	// setTimeout(function(){
	// 	$('.img-frame--01').addClass('fadeIn');
	// }, 500)

	setTimeout(function(){
		$('.img-frame--02').addClass('fadeIn');
	}, 2000)

	setTimeout(function(){
		$('.frame-01.main-background').addClass('moved');
		$('.main-background').animate({bottom: '0'},{
			duration: 500,
		});
	}, 4000)

	setTimeout(function(){
		$('.img-frame--01 , .img-frame--02').animate({top: '-25%'},{
			duration: 1500,
		});
	}, 4100)

	setTimeout(function(){
		$('.img-frame--03').addClass('fadeIn leftIn');
	}, 5200)

	setTimeout(function(){
		$('.img-frame--04').addClass('fadeIn leftIn');
	}, 5800)

	setTimeout(function(){
		$('.img-frame--06').addClass('fadeIn rightIn');
	}, 5800)

	setTimeout(function(){
		$('.img-frame--05').addClass('fadeIn');
	}, 7000)



// <!-- END FRAME 1 -->
// <!-- FRAME 2 -->
// <!-- END FRAME 2 -->
});


