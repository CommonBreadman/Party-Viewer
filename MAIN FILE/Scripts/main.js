document.addEventListener("DOMContentLoaded", main);
function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

function main(){

    Vos.onclick = () => {
        let beep = new Audio('../Assets/beep.mp3')
        beep.play();
            sleep(0.2).then(() => {window.location.replace("vostats.html")})
    }


}
