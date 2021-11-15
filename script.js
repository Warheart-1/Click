var clicker, reset_clicker, buy, id_interval_kill;
var numberclick = 0;
var compteur = 0;
var compteurbuy = 0;

clicker = document.getElementById('clicker');
reset_clicker = document.getElementById('reset-clicker');
buy = document.getElementById('soustract');

function buy20click(){
    numberclick = numberclick-20;
    ++compteurbuy;
    document.getElementById("buyclickplz").innerHTML = "<span> Vous avez acheté " + compteurbuy + " de temps. </span>"
    buy.id = "soustract12";
    document.getElementById("clicker-result").innerHTML = "<span> Vous avez cliqué : " + numberclick + " fois. </span>";
}

function displayCompteur(){
    id_interval_kill = setInterval(() => {   
            ++compteur;
            document.getElementById("compteur").innerHTML = "<span> Il s'est passé : " + compteur + " de secondes. </span>";
            if(numberclick>20){
                buy.disabled = false;
            }else{
                buy.disabled = true;
                buy.setAttribute("id", "soustract");
            }
    }, 1000);
}

function autoClicker(){
   ++numberclick;
}

function clickCounter(){
    document.getElementById("clicker-result").innerHTML = "<span> Vous avez cliqué : " + numberclick + " fois. </span>";
    ++numberclick;
    window.localStorage.setItem("key", numberclick);
}

function loadingNumberClick(){
    clearInterval(id_interval_kill);
    numberclick = window.localStorage.getItem("key");
    displayCompteur();
}

function resetCounter(){
    numberclick = 0;
    clickCounter();
}

buy.addEventListener('click', buy20click);

clicker.addEventListener('click', clickCounter);

reset_clicker.addEventListener('click', resetCounter);

window.addEventListener('load',loadingNumberClick);