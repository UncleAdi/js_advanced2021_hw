/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
var currentPosition = 0;

var slider = document.getElementById("slider");
var prevSlide = document.getElementById("PrevSilde");
var nextSlide = document.getElementById("NextSilde");
var img = document.createElement("img");

nextSlide.addEventListener("click", nSlide);
prevSlide.addEventListener("click", pSlide);
//1
window.addEventListener("load", 

function () {
  img.src = OurSliderImages[currentPosition]
  slider.appendChild(img)
});
//3
function nSlide() {
  img.src = OurSliderImages[currentPosition]
  currentPosition++
  if (currentPosition >= 8) {
    currentPosition = 0
  } else {
    slider.appendChild(img)
  }
};
//4
function pSlide() {
  img.src = OurSliderImages[currentPosition]
  if (currentPosition < 0) {
    currentPosition = 7
  } else {
    slider.appendChild(img)
  }
};
