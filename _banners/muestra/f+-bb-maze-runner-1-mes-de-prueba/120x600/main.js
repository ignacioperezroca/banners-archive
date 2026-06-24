$().ready(function(){
    /*instancia 1*/
	setTimeout(function(){
		$('.logo-1').animate({opacity:'1'},{
            duration: 400, 
            easing: 'swing', 
        });
	},500)
	
    setTimeout(function(){
		$('.texto-1').animate({opacity:'1', left:'0'},{
            duration: 500, 
            easing: 'swing', 
        });
	},1000)

    setTimeout(function(){
		$('.texto-1, .logo-1').animate({opacity:'0'},{
            duration: 400, 
            easing: 'swing', 
        });
	},2500) 
	
	setTimeout(function(){
		$('.imagen-1').animate({opacity:'1', left:'0'},{
            duration: 500, 
            easing: 'swing', 
        });
	},2500)
	
	setTimeout(function(){
		$('.logo-2').animate({opacity:'1'},{
            duration: 500, 
            easing: 'swing', 
        });
	},3500)

    setTimeout(function(){
		$('.texto-3').animate({opacity:'1'},{
            duration: 500, 
            easing: 'swing', 
        });
	},4000)
	
	setTimeout(function(){
		$('.btn').css({display:'block', opacity:'0'});
		setTimeout(function(){
			$('.btn').animate({opacity:'1',width:'130px', height:'auto', left:'-6px', marginTop:'-20px'},{
				duration: 300, 
				easing: 'easeOutQuint', 
			});
			//hover
			$(document).on("mouseover", "img", function(evento){
				$('.btn').animate({opacity:'1',width:'130px', height:'auto', left:'-6px', marginTop:'-20px'},{
					duration: 300, 
					easing: 'easeOutQuint', 
				});
			});
			
			//hover
			$(document).on("mouseleave", "img", function(evento){
				$('.btn').animate({opacity:'1',width:'120px', height:'auto', left:'0px', marginTop:'0px'},{
					duration: 300, 
					easing: 'easeOutQuint', 
				});
			});
		},100);
		setTimeout(function(){
			$('.btn').animate({opacity:'1',width:'120px', height:'auto', left:'0px', marginTop:'0px'},{
				duration: 300, 
				easing: 'easeOutQuint', 
			});
		},400)
	},4500)
	
	setTimeout(function(){
		$('.texto-2').animate({opacity:'1'},{
            duration: 500, 
            easing: 'swing', 
        });
	},5000)
	
	setTimeout(function(){
		$('.btn').animate({opacity:'1',width:'130px', height:'auto', left:'-6px', marginTop:'-20px'},{
            duration: 300, 
            easing: 'easeOutQuint', 
        });
	},6500)

	setTimeout(function(){
		$('.btn').animate({opacity:'1',width:'120px', height:'auto', left:'0px', marginTop:'0px'},{
            duration: 300, 
            easing: 'easeOutQuint', 
        });
	},6800);
});