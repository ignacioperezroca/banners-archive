$(document).ready(function(){
// <!-- STAR FRAME 1 -->
	
	$('.btn-open , .btn-close').click(function(){
		$('.full-container').toggleClass('collapsed');
		$('.container > div').toggleClass('full-height');
		$('.frame-02').fadeToggle(300);

		setTimeout(function(){
			$('.img-frame--06').addClass('fadeIn rightInBtn');
		}, 500)

		setTimeout(function(){
			$('.img-frame--07').addClass('fadeIn');
		}, 1000)

		setTimeout(function(){
			$('.img-frame--08').addClass('fadeIn leftIn');
		}, 1500)

		setTimeout(function(){
			$('.img-frame--09').addClass('fadeIn leftIn');
		}, 2000)

		setTimeout(function(){
			$('.img-frame--10').addClass('fadeIn');
			$('.img-frame--10').addClass('btn-scaled');
			$('.img-frame--10').animate({opacity: '1'},{
				duration: 300,
			});
			$(document).on("mouseover", "img", function(e){
				$('.img-frame--10').addClass('btn-hovered');
			});
			$(document).on("mouseleave", "img", function(evento){
				$('.img-frame--10').removeClass('btn-hovered');
			});
		}, 3000)

		setTimeout(function(){
			$('.img-frame--10').removeClass('btn-scaled');
		}, 3200)


		setTimeout(function(){
			$('.img-frame--10').addClass('btn-scaled');
		}, 5000)

		setTimeout(function(){
			$('.img-frame--10').removeClass('btn-scaled');
		}, 5200)

	});

	setTimeout(function(){
		$('.full-container').addClass('fadeIn');
	}, 300)

	setTimeout(function(){
		$('.img-frame--02').addClass('fadeIn leftIn');
		$('.img-frame--03').addClass('fadeIn rightIn');
	}, 1500)

	setTimeout(function(){
		$('.img-frame--04').addClass('fadeIn topIn');
	}, 2500)

	setTimeout(function(){
		$('.img-frame--05').addClass('fadeIn rightInBtn');
	}, 3000)

// <!-- END FRAME 1 -->

});
