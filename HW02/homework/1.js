/*

  Задание 1.

  Написать скрипт который будет будет переключать вкладки по нажатию
  на кнопки в хедере.

  Главное условие - изменять файл HTML нельзя.

  Алгоритм:
    1. Выбрать каждую кнопку в шапке
       + бонус выбрать одним селектором

    2. Повесить кнопку онклик
        button1.onclick = function(event) {

        }
        + бонус: один обработчик на все три кнопки

    3. Написать функцию которая выбирает соответствующую вкладку
       и добавляет к ней класс active

    4. Написать функцию hideAllTabs которая прячет все вкладки.
       Удаляя класс active со всех вкладок

  Методы для работы:

    getElementById
    querySelector
    classList
    classList.add
    forEach
    onclick

    element.onclick = function(event) {
      // do stuff ...
    }

*/

var tabs = document.querySelectorAll(".tab");

var showbtn = document.querySelectorAll(".showButton");

for (var i = 0; i < showbtn.length; i++) {
  showbtn[i].onclick = startEvent
};

function startEvent() {
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active")
  };

  var dataTab = this.getAttribute("data-tab");

  var getDT = dataTab;

  for (var i = 0; i < tabs.length; i++) {
    tabs[getDT - 1].classList.add("active")
  }
};