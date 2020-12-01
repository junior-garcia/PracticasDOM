export function digitalClock(clock,btnPlay,btnStop){
    let clockTiempo;

    document.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            clockTiempo = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                document.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            },1000);

            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTiempo);
            document.querySelector(clock).innerHTML = null;
            document.querySelector(btnPlay).disabled = false;
        }
    })

}

export function alarm(sound,btnPlay,btnstop){
    let alarmTiempo;
    const $alarm = document.createElement("audio");
    $alarm.src=sound;
    document.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
            alarmTiempo = setTimeout(()=>{
                $alarm.play()
            },2000);

            e.target.disabled = true;
        }
        if(e.target.matches(btnstop)){
            clearTimeout(alarmTiempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            document.querySelector(btnPlay).disabled = false;
        }
        
    });
    
}