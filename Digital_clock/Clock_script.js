let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();

    

    if(min.innerHTML < 10){
        min.innerHTML = "0" + min.innerHTML;
    }else{
        min.innerHTML = ""  + min.innerHTML;
    }

    if(sec.innerHTML < 10){
        sec.innerHTML = "0" + sec.innerHTML;
    }else{
        sec.innerHTML = ""  + sec.innerHTML;
    }

    if(hrs.innerHTML > 12){
        hrs.innerHTML = hrs.innerHTML - 12;
    }

    if(hrs.innerHTML < 10){
        hrs.innerHTML = "0" + hrs.innerHTML;
    }else{
        hrs.innerHTML = ""  + hrs.innerHTML;
    }

}, 1000);