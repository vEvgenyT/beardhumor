"use strict";
var max;

// Получить доступ к json

var URL = 'http://localhost:3000/newj.json';
var request = new XMLHttpRequest();
request.open('GET', URL);
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

function jokeChoice() {
  var rnd = __vIntBaseRng(0, max);
  return jokesData[rnd];
}

function __vIntBaseRng(min, max) {
  if (min != undefined && max != undefined) return Math.floor(Math.random() * (max - min)) + min;
  else return Math.random();
};

// Передать шутку в скрамблер
//
