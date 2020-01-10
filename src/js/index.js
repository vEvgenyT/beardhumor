(function(){
'use strict';
}).call(this)

var max;

// Получить доступ к json
var address = 'localhost:3000/newj.json';
var request = new XMLHttpRequest();
request.open('GET', address);
request.responseType = 'json';
request.send();

// Загрузить шутку из json в переменную
var jokesData = {};
request.onload = function() {
   jokesData = request.response;
   max = jokesData.length;
}

// Текущая шутка
function currentJoke() {
  var current = document.getElementById('jokes').textContent;
  return current;
}

// Случайно выбрать шутку
  var replay = new Array();

  var rnd;
function rand() {
rnd = __vIntBaseRng(0, max);
  if (replay.length == max) {
    replay.length = 0;
    // console.log('обнулил массив');
  } else
  if (replay[replay.indexOf(rnd)]) {
    // console.log('вызвал еще раз');
    rand();
  } else {
    replay.push(rnd);
    return rnd;
  }
}

function __vIntBaseRng(min, max) {
  if (min != undefined && max != undefined) return Math.floor(Math.random() * (max - min)) + min;
  else return Math.random();
};

function jokeChoice() {
  return jokesData[rand()];
}

// Передать шутку в скрамблер
function start() {
 var joke = jokeChoice();
    Scrambler({
      target: '#jokes',
      random: [500, 1700],
      speed: 135,
      text: joke,
    });
}


var time = setInterval(start, 8000);


document.getElementById('btn').onclick = start;

