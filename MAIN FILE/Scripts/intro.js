document.addEventListener("DOMContentLoaded", main);
function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}
function launch(){
    let beep = new Audio('../Assets/beep.mp3');
    beep.play();
    const intro = new Audio('../Assets/intronew.mp3');
    let ptr = document.querySelectorAll(".ptr");
    sleep(1.5).then(()=>{log.classList.remove("blinker")})
    sleep(1.5).then(()=>{log.innerHTML = "Authorizing..."})
    sleep(1.5).then(()=>{ptr[1].classList.remove("transparent")})
    sleep(1.5).then(()=>{auth.classList.remove("transparent"); 
        auth.classList.add("blinker");
        beep.play();
    })
    sleep(7.5).then(()=>{auth.innerHTML = "Login Successful!";
        auth.classList.remove("blinker");
        beep.play();
    })
    sleep(7.5).then(()=>{ptr[2].classList.remove("transparent")})
    sleep(7.5).then(()=>{succ.classList.remove("transparent"); 
        succ.classList.add("blinker");
    })
    sleep(8.5).then(()=>{succ.innerHTML = "Welcome, User";
        succ.classList.remove("blinker");
        beep.play();
    })
    sleep(10).then(()=>{intro.play()}   )
    sleep(11).then(welcome)
}
function main(){

    let ex = false;
    document.onkeyup = function(e){
        if(e.key == "Enter" && !ex){
            ex = true;
            launch();
        }
    }


}
function welcome(){
    sleep(1).then(()=>{window.location.replace("../MAIN FILE/Sub/main.html")})
}