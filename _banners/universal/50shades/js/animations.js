$(document).ready(function(){
// <!-- STAR FRAME 1 -->
  
  setTimeout(function(){
    $('.img-frame--01').addClass('fadeIn');
  }, 500)

  setTimeout(function(){
    $('.img-frame--02').addClass('fadeIn');
  }, 1500)

  setTimeout(function(){
    $('.img-frame--03').addClass('fadeIn');
  }, 2500)

  setTimeout(function(){
    $('.img-frame--04').addClass('fadeIn');
  }, 3500)

  setTimeout(function(){
    $('.img-frame--05').addClass('fadeIn');
  }, 4500)

  setTimeout(function(){
    $('.img-frame--06').addClass('fadeIn');
  }, 5500)

  setTimeout(function(){
    $('.frame-01').addClass('fadeOut');
  }, 7000)

  setTimeout(function(){
    $('.frame-02').addClass('fadeIn');
  }, 8500)

  setTimeout(function(){
    $('.frame-01').removeClass('fadeOut');
  }, 9500)

  setTimeout(function(){
    $('.img-frame--07').addClass('fadeIn leftIn');
  }, 10000)

  setTimeout(function(){
    $('.img-frame--08').addClass('fadeIn leftIn');
  }, 10000)


  setTimeout(function(){
    $('.img-frame--09').addClass('introButton transformation');
    // $(document).on("mouseover", "img", function(e){
    //   $('.img-frame--09').addClass('transformationed');
    // });
    // $(document).on("mouseleave", "img", function(evento){
    //   $('.img-frame--09').removeClass('transformationed');
    // });
  }, 10800)

  setTimeout(function(){
    $('.img-frame--09').removeClass('transformation');
  }, 11000)


  setTimeout(function(){
    $('.img-frame--09').addClass('transformation');
  }, 13000)

  setTimeout(function(){
    $('.img-frame--09').removeClass('transformation');
  }, 13200)



// <!-- END FRAME 1 -->
// <!-- FRAME 2 -->
// <!-- END FRAME 2 -->
});
