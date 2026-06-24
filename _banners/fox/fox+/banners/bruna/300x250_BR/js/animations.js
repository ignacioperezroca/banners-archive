$(document).ready(function(){
// <!-- STAR FRAME 1 -->
	setTimeout(function(){
		$('.typo-title--01').animate({opacity: '1'},{
			duration: 900,
		});
	}, 1000)

	setTimeout(function(){
		$('.typo-subtitle--01').animate({opacity: '1', left: '0px'},{
			duration: 1100,
		});
		$('.typo-paragraph--01').animate({opacity: '1', right: '0'},{
			duration: 1100,
		});
	}, 1200)

	setTimeout(function(){
		$('.typo-paragraph--01').animate({opacity: '0'},{
			duration: 1200,
		});
		$('.typo-paragraph--02').animate({opacity: '1', right: '0'},{
			duration: 1100,
		});
	}, 2800)

	setTimeout(function(){
		$('.typo-paragraph--02').animate({opacity: '0'},{
			duration: 1200,
		});
		$('.typo-paragraph--03').animate({opacity: '1', right: '0'},{
			duration: 1100,
		});
	}, 4400)

	setTimeout(function(){
		$('.typo-paragraph--03').animate({opacity: '0'},{
			duration: 1200,
		});
		$('.typo-paragraph--04').animate({opacity: '1', right: '0'},{
			duration: 1100,
		});
	}, 6000)

	setTimeout(function(){
		$('.typo-title--01').animate({opacity: '0', top: '-10px'},{
			duration: 900,
		});
		$('.typo-title--01').css({
	    "-webkit-transform":"scale(.9)",
	    "-ms-transform":"scale(.9)",
	    "transform":"scale(.9)",
	    "transition": "transform 300ms"
	  });
		$('.typo-subtitle--01').animate({left: '-10px', opacity: '0'},{
			duration: 900,
		});
		$('.typo-paragraph--04').animate({right: '-60px', opacity: '0'},{
			duration: 900,
		});
		$('.typo-subtitle--01').css({
	    "-webkit-transform":"scale(.9)",
	    "-ms-transform":"scale(.9)",
	    "transform":"scale(.9)",
	    "transition": "transform 300ms"
	  });
		$('.typo-paragraph--03').css({
	    "-webkit-transform":"scale(.9)",
	    "-ms-transform":"scale(.9)",
	    "transform":"scale(.9)",
	    "transition": "transform 300ms"
	  });
	}, 7800)
// <!-- END FRAME 1 -->
// <!-- STAR FRAME 2 -->
	setTimeout(function(){
		$('.frame-02.main-background').animate({opacity: '1'},{
			duration: 900,
		});	
		$('.frame-02.main-background').css({
	    "-webkit-transform":"scale(1)",
	    "-ms-transform":"scale(1)",
	    "transform":"scale(1)",
	    "transition": "transform 300ms"
	  });
	}, 8200)

	setTimeout(function(){
		$('.typo-subtitle--02').animate({top: '0px', opacity: 1},{
			duration: 300,
		});
	}, 8900)
	setTimeout(function(){
		$('.typo-episode--01').animate({opacity: '1', left: '0px'},{
			duration: 100,
		});
	}, 10900)
	setTimeout(function(){
		$('.fox-btn--01').addClass('bounce');
		$('.fox-btn--01').animate({opacity: '1'},{
			duration: 300,
		});
	}, 11400)



// <!-- END FRAME 2 -->
});
