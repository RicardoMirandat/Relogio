const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr =  dateToday.getHours();
    let minuts = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(minuts < 10 ) minuts = '0' + minuts;
    if (sec < 10) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = minuts;
    segundos.textContent = sec;

})