let tempo = 1000;
let cronometro;
let hh = 0;
let min = 0;
let sec = 0;
let button = 0;

if (hh < 10) {
  hh = "0" + hh;
}
if (min < 10) {
  min = "0" + min;
}
if (sec < 10) {
  sec = "0" + sec;
}

function start() {
  button++; //Condicional para bloquear mais de um clique no botão, impedindo contagem adulterada
  if (button < 2) {
    cronometro = setInterval(() => {
      timer();
    }, tempo);
  }
}

function stop() {
  button = 0;
  clearInterval(cronometro);
  hh = hh;
  min = min;
  sec = sec;
}

function reset() {
  button = 0;
  clearInterval(cronometro);

  hh = 0;
  min = 0;
  sec = 0;

  document.getElementById("hora").innerText = hh;
  document.getElementById("minutos").innerText = min;
  document.getElementById("segundos").innerText = sec;
}

function timer() {
  sec++;

  if (sec == 60) {
    sec = 0;
    min++;

    if (min == 60) {
      min = 0;
      hh++;
    }
  } 


  document.getElementById("hora").innerText = hh;
  document.getElementById("minutos").innerText = min;
  document.getElementById("segundos").innerText = sec;
}

function watch() {
  relogio = setInterval(() => {
    timer_watch();
  }, tempo);
  
  clearInterval(cronometro);
 
  document.getElementById("botoes").style.display = "none"; // some a div do cronometro
}

function counter() {
  clearInterval(relogio);
  clearInterval(cronometro);
  reset();
  document.getElementById("botoes").style.display = "block"; //aparece a div do cronometro
}
function timer_watch() {
  let data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  if (hora < 10) {
    hora = "0" + hora;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  document.getElementById("hora").innerText = hora;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}

function alarm(){
  // const music = new Audio('adf.wav');
  // music.play();
  // music.loop =true;   **Uso do Objeto Audio**
  // music.playbackRate = 2;
  // music.pause();qqazszdgfbgtyj
  // timer_alarm()
}
function timer_alarm(){
  // if(5 ands comparando as datas para validação ){
  //   tocar alarme
  // }
  // if(botao desligar alarme){
  //   desligo alarme
  // }
}
