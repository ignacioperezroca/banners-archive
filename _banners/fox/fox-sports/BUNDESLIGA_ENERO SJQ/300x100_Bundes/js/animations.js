(function afterEffects() {
    setTimeout(imgFrame04, 500);
    setTimeout(imgFrame01, 1200);
    setTimeout(imgFrame02, 1900);
    setTimeout(imgFrame03, 3000);
    setTimeout(imgFrame05, 3200);
    setTimeout(imgFrame06, 5000);
    setTimeout(imgFrame07, 5200);
}());

function imgFrame04() {
  document.querySelector('.img-frame--04').style.opacity = '1';
}

function imgFrame01() {
  document.querySelector('.img-frame--01').style.opacity = '1';
}

function imgFrame02() {
  document.querySelector('.img-frame--02').style.bottom = '0px';
  document.querySelector('.img-frame--02').style.opacity = '1';
}

function imgFrame03() {
  document.querySelector('.img-frame--03').style.opacity = '1';
  document.querySelector('.img-frame--03').classList.add("transformation");
  document.querySelector('.img-frame--03').addEventListener("mouseover", mouseOver);
  document.querySelector('.img-frame--03').addEventListener("mouseout", mouseOut);
}
function mouseOver(){
  document.querySelector('.img-frame--03').classList.add("transformationed");
}
function mouseOut(){
  document.querySelector('.img-frame--03').classList.remove("transformationed");
}

function imgFrame05() {
  document.querySelector('.img-frame--03').classList.remove("transformation");
}

function imgFrame06() {
  document.querySelector('.img-frame--03').classList.add("transformation");
}

function imgFrame07() {
  document.querySelector('.img-frame--03').classList.remove("transformation");
}