$(document).ready(function(){
// <!-- STAR FRAME 1 -->

  setTimeout(function(){
    $('.img-frame--01').addClass('fadeIn topIn');
  }, 500)

  setTimeout(function(){
    $('.img-frame--00').addClass('floating');
  }, 3000)

  setTimeout(function(){
    $('.img-frame--02').addClass('fadeIn bottomIn');
  }, 1500)

  setTimeout(function(){
    $('.img-frame--03').addClass('fadeIn');
    $('.img-frame--03').addClass('btn-scaled');
    $('.img-frame--03').animate({opacity: '1'},{
      duration: 300,
    });
  
    $(document).on("mouseover", "img", function(e){
      $('.img-frame--03').addClass('btn-hovered');
    });
    $(document).on("mouseleave", "img", function(evento){
      $('.img-frame--03').removeClass('btn-hovered');
    });
  }, 3000)

  setTimeout(function(){
    $('.img-frame--03').removeClass('btn-scaled');
  }, 3200)

  setTimeout(function(){
    $('.img-frame--03').addClass('btn-scaled');
  }, 5000)

  setTimeout(function(){
    $('.img-frame--03').removeClass('btn-scaled');
  }, 5200)


  setTimeout(function(){
    $('.img-frame--00').addClass('fadeIn topIn');
  }, 0)

// <!-- END FRAME 1 -->
// <!-- FRAME 2 -->
// <!-- END FRAME 2 -->
});


$(document).ready(function(){

  var human = 1;
  var astronauta = document.querySelector('.img-frame--00');
  var hoverLayer = document.querySelector('.img-frame--03');
  var hasBeenTrigged = false;
  var stop = false;
  
  var stopTheInterval = function (theInterval) {
    clearInterval(theInterval);
  };

  var initializeFor = function(){
    for(i=0;i<human;i++){

      $('.img-frame--00').each(function(i,obj){ 
        var minimum = 10;
        var maximum = 235;
        var minTop = 0;
        var maxTop = 40;
        var minLeft = 0;
        var maxLeft = 580;
        var minWidth = 70;
        var maxWidth = 200;

        var initializeInterval = (function () {
          var theInterval = setInterval(function(){

            if(stop){
              return;
            }

            var top = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
            var left = Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft;
            var width = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
            console.log(left);
            console.log(top);
            $(obj).animate({
                left: left,
                top: top,
                width: width
            });
          },9000);
        })();

        $(hoverLayer).hover(
           function(e){
              //do the mouseenter things here...
              stop = true;
           },
           function(e){
              //do the mouseleave things here...
              stop = false;
           }
        );

      });
    }
  };

  initializeFor();


});

