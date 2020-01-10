'use strict';

var max,
    i = 0,
    time,
    jokesData = {};

// Получить доступ к json
var address = 'http://localhost:3000/newj.json';
var request = new XMLHttpRequest();
request.open('GET', address, true);
request.responseType = 'json';
request.send();

// Загрузить шутку из json в переменную
request.onload = function() {
   jokesData = request.response;
   max = jokesData.length;
   shuffle(jokesData);
}

// Выбрать случайную шутку
function jokeChoice() {
  if (i == max) {
    i = 0;
    shuffle(jokesData);
  } else {
      return jokesData[i];
  }
}

// Функция слуйчайных перестановок Фишера-Йетса
function putToCache(elem, cache){
  if(cache.indexOf(elem) != -1){
    return;
  }
  var i = Math.floor(Math.random()*(cache.length + 1));
  cache.splice(i, 0, elem);
}
//функция, возвращающая компаратор
function madness(){
  var cache = [];
  return function(a, b){
    putToCache(a, cache);
    putToCache(b, cache);
    return cache.indexOf(b) - cache.indexOf(a);
  }
}
//собственно функция перемешивания
function shuffle(arr){
  var compare = madness();
  return arr.sort(compare);
}

// Передача шутку в скрамблер
// function start() {
//   var joke = jokeChoice();
//     Scrambler({
//       target: '#jokes',
//       random: [500, 1700],
//       speed: 135,
//       text: joke,
//     });
//     i++;
// };
//
//

// Запуск и кнопка
// document.getElementById('btn').onclick = function() {
//   clearInterval(time);
//   time = setInterval(start, 8000);
//   document.getElementById('btn-img').classList.add('joke__btn_animation');
//   start();
//   document.getElementById('btn-img').addEventListener('animationend', () => {
//     document.getElementById('btn-img').classList.remove('joke__btn_animation');
//   });
// };
