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

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-01');
  // }, 4000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-02');
  //   $('.img-frame--00').removeClass('position-01');
  // }, 8000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-03');
  //   $('.img-frame--00').removeClass('position-02');
  // }, 12000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-04');
  //   $('.img-frame--00').removeClass('position-03');
  // }, 16000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-05');
  //   $('.img-frame--00').removeClass('position-04');
  // }, 20000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-06');
  //   $('.img-frame--00').removeClass('position-05');
  // }, 24000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-04');
  //   $('.img-frame--00').removeClass('position-06');
  // }, 28000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-02');
  //   $('.img-frame--00').removeClass('position-04');
  // }, 32000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-01');
  //   $('.img-frame--00').removeClass('position-02');
  // }, 36000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-02');
  //   $('.img-frame--00').removeClass('position-01');
  // }, 40000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-01');
  //   $('.img-frame--00').removeClass('position-02');
  // }, 44000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-02');
  //   $('.img-frame--00').removeClass('position-01');
  // }, 48000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-03');
  //   $('.img-frame--00').removeClass('position-02');
  // }, 52000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-04');
  //   $('.img-frame--00').removeClass('position-03');
  // }, 56000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-05');
  //   $('.img-frame--00').removeClass('position-04');
  // }, 60000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-06');
  //   $('.img-frame--00').removeClass('position-05');
  // }, 64000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-04');
  //   $('.img-frame--00').removeClass('position-06');
  // }, 68000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-02');
  //   $('.img-frame--00').removeClass('position-04');
  // }, 72000)

  // setTimeout(function(){
  //   $('.img-frame--00').addClass('position-01');
  //   $('.img-frame--00').removeClass('position-02');
  // }, 76000)



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

