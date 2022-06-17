let tempo = 1000;
let cronometro;
let hh = 0;
let min = 0;
let sec = 0;
let button = 0;


function start(){
    button++; //Condicional para bloquear mais de um clique no botão, impedindo contagem adulterada
    if(button<2){
    cronometro =  setInterval(() => { timer();}, tempo);
    }


}

function stop(){
    button = 0;
    clearInterval(cronometro);
    hh = hh;
    min = min;
    sec = sec;

}

function reset(){
    button=0;
    clearInterval(cronometro);

    hh = 0;
    min = 0;
    sec = 0;

    document.getElementById('hora').innerText = hh
    document.getElementById('minutos').innerText = min
    document.getElementById('segundos').innerText = sec
}

function timer(){
    sec++;

    if(sec == 60){
        sec = 0;
        min++;

        if(min==60){
            min =0;
            hr++;
        }

    }
    document.getElementById('hora').innerText = hh
    document.getElementById('minutos').innerText = min
    document.getElementById('segundos').innerText = sec



}