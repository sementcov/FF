var countDownDate = new Date("May 17, 2022 03:00:00").getTime();
var countDownFunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days + "д " + hours + "ч " + minutes + "м " + seconds + "с "; 
    if (distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("timer").innerHTML = "Проект запущен";
    }
}, 1000)