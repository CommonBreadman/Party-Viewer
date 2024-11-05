document.addEventListener("DOMContentLoaded", main);
function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}
function main(){

    let ex = false;
    document.onkeyup = function(e){
        if(e.key == "Escape" && !ex){
            ex = true;
            sleep(0.2).then(() => {window.location.replace("main.html")})
        }
    }


}
