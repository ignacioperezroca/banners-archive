
(function afterEffects() {
    setTimeout(funcAnm01, 500);
    setTimeout(funcAnm02, 2000);
    setTimeout(funcAnm03, 3500);
    setTimeout(funcAnm04, 4000);
    setTimeout(funcAnm05, 4100);
    setTimeout(funcAnm06, 5200);
    setTimeout(funcAnm07, 5800);
    setTimeout(funcAnm08, 5800);
    setTimeout(funcAnm09, 7000);
}());

function funcAnm01() {
  document.querySelector('.img-frame--01').classList.add("fadeIn");
}
function funcAnm02() {
  document.querySelector('.img-frame--02').classList.add("fadeIn");
}
function funcAnm03() {
  document.querySelector('.img-frame--01').classList.add("fadeOut");
}
function funcAnm04() {
  document.querySelector('.main-background').classList.add("bottomIn");
}
function funcAnm05() {
  document.querySelector('.img-frame--02').classList.add("espcTop");
}
function funcAnm06() {
  document.querySelector('.img-frame--03').classList.add("fadeIn" , "leftIn");
}
function funcAnm07() {
  document.querySelector('.img-frame--04').classList.add("fadeIn" , "leftIn");
}
function funcAnm08() {
  document.querySelector('.img-frame--06').classList.add("fadeIn" , "rightIn");
}
function funcAnm09() {
  document.querySelector('.img-frame--05').classList.add("fadeIn" , "rightIn");
}
