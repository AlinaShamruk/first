"use strict";function isPalindrome(){var o=prompt("enter the world");(o=o.toLowerCase())===o.split("").reverse().join("")&&""!==o&&" "!==o?alert("yes"):alert("no")}function random(){for(var o=[];o.length<=6;){var r=Math.floor(10*Math.random()+1);-1==o.indexOf(r)&&o.push(r)}console.log(o),console.log(o.sort(function(o,r){return o-r}))}function zero(){for(var o=[],r=0;r<10;r++){var e=String(Math.floor(100*Math.random()+1));-1==o.indexOf(e)&&(e%10==0?o.push(e.replace(/0/g,"zero")):o.push(Number(e)))}console.log(o)}isPalindrome(),random(),zero();� уникальных случайных цифр. Создадим массив для семи элементов;
// Заполним его случайными цифрами от 0 до 10;
// Цифры в массиве не должны повторяться;
// Вывести этот массив в консоль;
// Упорядочить массив;
// Еще раз вывести его в консоль.

function random() {
  var arr = [];

  while (arr.length <= 6) {
    var a = Math.floor(Math.random() * 10 + 1);

    if (arr.indexOf(a) == -1) {
      arr.push(a);
    }
  }

  ;
  console.log(arr);
  console.log(arr.sort(function (a, b) {
    return a - b;
  }));
}

;
random(); // 3.Замена элементов массива. Создадим массив с десятью случайными элементами от 0 до 100;
// Напишем инструкцию, которая будет заменять все “0” на строку “zero”;
// Выводим полученный массив в консоль.
// прим. [12, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1];

function zero() {
  var arr = [];

  for (var i = 0; i < 10; i++) {
    var a = String(Math.floor(Math.random() * 100 + 1));

    if (arr.indexOf(a) == -1) {
      if (a % 10 == 0) {
        arr.push(a.replace(/0/g, 'zero'));
      } else {
        arr.push(Number(a));
      }
    }

    ;
  }

  ;
  console.log(arr);
}

;
zero();