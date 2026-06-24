$(document).ready(function(){
// <!-- STAR FRAME 1 -->
  
  setTimeout(function(){
    $('.img-frame--01').addClass('fadeIn');
  }, 500)


  $('#h1').click(function(){
    $('.img-frame--02').addClass('fadeIn');
    ga('send', 'event', 'button', 'click', 'letra-hula-h');
  });
  
  $('#h2').click(function(){
    $('.img-frame--02').addClass('fadeIn');
    ga('send', 'event', 'button', 'click', 'letra-hoop-h');
  });

  $('#o2').click(function(){
    $('.img-frame--03').addClass('fadeIn');
    ga('send', 'event', 'button', 'click', 'letra-hoop-oo');
  });

  $('#u1').click(function(){
    $('.img-frame--04').addClass('fadeIn');
    ga('send', 'event', 'button', 'click', 'letra-hula-u');
  });

  $('#l1').click(function(){
    $('.img-frame--05').addClass('fadeIn');
    ga('send', 'event', 'button', 'click', 'letra-hula-l');
  });

  $('#a1').click(function(){
    $('.img-frame--06').addClass('fadeIn');
    ga('send', 'event', 'button', 'click', 'letra-hula-a');
  });

  $('#p1').click(function(){
    $('.img-frame--07').addClass('fadeIn');
    ga('send', 'event', 'button', 'click', 'letra-hoop-p');
  });

  $('#h1 , #h2 , #o2 , #u1 , #l1 , #a1 , #p1').click(function(){

    console.log($('.fadeIn').size());

    if($('.fadeIn').size() == 7){

     setTimeout(function(){
       $('.out').addClass('fadeOut');
     }, 500)

     setTimeout(function(){
       $('.main-background').addClass('fadeIn');
     }, 1500)

     setTimeout(function(){
       $('.img-frame--08').addClass('fadeIn');
       $('.img-frame--09').show();
     }, 3000)

     setTimeout(function(){
       $('.img-frame--09').addClass('fadeIn');
     }, 4000)


     setTimeout(function(){
       $('.img-frame--09').addClass('fadeIn transformation');
       $(document).on("mouseover", "img", function(e){
         $('.img-frame--09').addClass('transformationed');
       });
       $(document).on("mouseleave", "img", function(evento){
         $('.img-frame--09').removeClass('transformationed');
       });
     }, 4800)

     setTimeout(function(){
       $('.img-frame--09').removeClass('transformation');
     }, 5000)


     setTimeout(function(){
       $('.img-frame--09').addClass('transformation');
     }, 10000)

     setTimeout(function(){
       $('.img-frame--09').removeClass('transformation');
     }, 10200)

    };
  });


  // setTimeout(function(){
  //   $('.img-frame--02').addClass('fadeIn');
  // }, 1500)

  // setTimeout(function(){
  //   $('.img-frame--03').addClass('fadeIn');
  // }, 2000)

  // setTimeout(function(){
  //   $('.img-frame--04').addClass('fadeIn');
  // }, 2500)

  // setTimeout(function(){
  //   $('.img-frame--05').addClass('fadeIn');
  // }, 3000)

  // setTimeout(function(){
  //   $('.img-frame--06').addClass('fadeIn');
  // }, 3500)

  // setTimeout(function(){
  //   $('.img-frame--07').addClass('fadeIn');
  // }, 4000)

  // setTimeout(function(){
  //   $('.out').addClass('fadeOut');
  // }, 4500)

  // setTimeout(function(){
  //   $('.main-background').addClass('fadeIn');
  // }, 5500)

  // setTimeout(function(){
  //   $('.img-frame--08').addClass('fadeIn');
  // }, 7000)

  // setTimeout(function(){
  //   $('.img-frame--09').addClass('fadeIn leftIn');
  // }, 8000)


  // setTimeout(function(){
  //   $('.img-frame--09').addClass('fadeIn transformation');
  //   $(document).on("mouseover", "img", function(e){
  //     $('.img-frame--09').addClass('transformationed');
  //   });
  //   $(document).on("mouseleave", "img", function(evento){
  //     $('.img-frame--09').removeClass('transformationed');
  //   });
  // }, 8800)

  // setTimeout(function(){
  //   $('.img-frame--09').removeClass('transformation');
  // }, 9000)


  // setTimeout(function(){
  //   $('.img-frame--09').addClass('transformation');
  // }, 11000)

  // setTimeout(function(){
  //   $('.img-frame--09').removeClass('transformation');
  // }, 11200)



// <!-- END FRAME 1 -->
// <!-- FRAME 2 -->
// <!-- END FRAME 2 -->
});

