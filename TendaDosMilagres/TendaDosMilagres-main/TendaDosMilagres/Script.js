let carroselPrimeiro = document.getElementById("primeiro");
let impulso = 0;
let sentido = false;
const num = -816;

setInterval(function(){
    if(impulso <= num){
        sentido = true;
    };
    if(impulso == 1) {
        sentido = false;
    };
    if(sentido == false){
        impulso--;
    };
    if(sentido == true) {
        impulso++;
    };
    carroselPrimeiro.style.marginLeft = impulso + "px";
}, 50);


