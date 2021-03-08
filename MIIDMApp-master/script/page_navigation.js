/*
    Codice per il controllo della navigazione attraverso le sezioni dell'app.
    Ogni sezione dell'app viene caricata tramite AJAX e una richiesta ASINCRONA
    al server. La risposta viene poi inserita nell'HTML della pagina.
*/

//Nel caso in cui si scorra, rendi la TopBar trasparente
window.onscroll = controllaTrasparenzaTopNavbar;

var bodyPagina = document.getElementById("page_render"); //Non coincide con il body
                                                         //vero e proprio, ma con il pezzo dove andranno renderizzate le altre sezioni
var titoloButton = document.getElementById("navbar_titoloTopNav")
var cercaButton = document.getElementById("bottom-nav_button-C");
var cercaButtonTop = document.getElementById("navbar_buttonTopNavSearch");
var info_sidebar_button = document.getElementById("info_sidebar");
var homeButton = document.getElementById("bottom-nav_button-H");
var esplora_sidebar_button = document.getElementById("esplora_sidebar");
var qr_sidebar_button = document.getElementById("qr_sidebar");
var dona_sidebar_button = document.getElementById("dona_sidebar");
var lingua_sidebar_button = document.getElementById("lingua_sidebar");
var segnala_sidebar_button = document.getElementById("segnala_sidebar");

titoloButton.addEventListener("click", function() {
    {
        fullHome();
        caricaPaginaHome();
    }
});

//Listener per le pagine menu laterale
cercaButton.addEventListener("click", function() {
    fullSearch();
    caricaPaginaCerca();
});

cercaButtonTop.addEventListener("click", function() {
    if(window.innerHeight < window.innerWidth)
    {
        fullSearchTop();
        caricaPaginaCerca();
    }
});

info_sidebar_button.addEventListener("click", function() {
    bothEmpty();
    if(window.innerHeight < window.innerWidth)
        bothEmpty2();
    navbar_closeSidenav();
    caricaPaginaInfo();
});
homeButton.addEventListener("click", function() {
    fullHome();
    caricaPaginaHome();
});
esplora_sidebar_button.addEventListener("click", function() {
    navbar_closeSidenav();
    fullSearch();
    caricaPaginaCerca();
});
qr_sidebar_button.addEventListener("click", function() {
    navbar_closeSidenav();
    setTimeout(clickQR, 500); //Avvia l'animazione del QR dopo che si è chiusa la sidenav
});
dona_sidebar_button.addEventListener("click", function() {
    navbar_closeSidenav();
    urlDonazione = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U5V2VVZ47JPTS&source=url";
    window.location.href = urlDonazione;
});
lingua_sidebar_button.addEventListener("click", function() {
    alert("Mi dispiace, per ora l'app è disponibile solo in italiano. \nWe're sorry, the app is only available in Italian for now.")
});
segnala_sidebar_button.addEventListener("click", function() {
    navbar_closeSidenav();
    apriFinestraSegnalazioneBug();
});

/*
    Funzioni che fanno scomparire/apparire la barra di navigazione inferiore.
    Serve quando si apre la barra di ricerca, per non far finire la barra sopra
    la tastiera dello smartphone
*/
function scompareNavBarBottom() {
    document.getElementById("bottom-nav").style.display = "none";
    document.getElementById("bottom-nav_button-qr").style.display = "none";
}
function appareNavBarBottom() {
    document.getElementById("bottom-nav").style.display = "block";
    document.getElementById("bottom-nav_button-qr").style.display = "block";
    if(Device_Type() == 'Desktop' /*window.innerHeight < window.innerWidth*/) {
        document.getElementById("bottom-nav_button-qr").style.display = "none";
        document.getElementById("bottom-nav").style.display = "none";
    }
}

//Richiesta e inserimento della pagina di ricerca nella home
function caricaPaginaCerca() {
    if(Device_Type() == 'Desktop' /*window.innerHeight < window.innerWidth*/)
        fullSearchTop();
    document.getElementById('qrc').src = "./res/qr-code.svg";
    fetch("ricerca.html")
    .then(
        function(response) {
            if(response.status != 200) {
                alert("Ops, qualcosa è andato storto! Forse sei offline!");
                return;
            }

            response.text()
            .then(html => {bodyPagina.innerHTML = html;});
        }
    )
    .catch(err => {console.log("Qualcosa è andato storto!" + err);});

}

//Richiesta e inserimento della pagina di info nella home
function caricaPaginaInfo() {
    document.getElementById('qrc').src = "./res/qr-code.svg";
    fetch("info.html")
    .then(
        function(response) {
            if(response.status != 200) {
                alert("Ops, qualcosa è andato storto! Forse sei offline!");
                return;
            }

            response.text()
            .then(html => {bodyPagina.innerHTML = html;});
        }
    )
    .catch(err => {console.log("Qualcosa è andato storto!" + err);});
}

//Richiesta e inserimento della pagina di info nella home
function caricaPaginaQR() {
    console.log("Pagina QR");
    fetch("qrscanner.html")
    .then(
        function(response) {
            if(response.status != 200) {
                alert("Ops, qualcosa è andato storto! Forse sei offline!");
                return;
            }
 
            response.text()
            .then(html => {
                bodyPagina.innerHTML = html;
                avviaWebcam();
            });
        }
    )
    .catch(err => {console.log("Qualcosa è andato storto!" + err);});
}

//Controlli per la posizione della finestra di segnalazione dei bug
function apriFinestraSegnalazioneBug() {
    document.getElementById("finestraSegnalazioneBug").style.top = "0";
}
function chiudiFinestraSegnalazioneBug() {
    document.getElementById("finestraSegnalazioneBug").style.top = "-200vh";
}

//Fa apparire la home
function caricaPaginaHome() {
    document.getElementById('qrc').src = "./res/qr-code.svg";
    bodyPagina.innerHTML = "<div id = 'div_sfondo_home'><p id = 'renderizzatoDiNuovo'>La storia del <br /><strong>passato</strong><br />attraverso le tecnologie del<br /><strong>futuro</strong></p></div>";
    bothEmpty2();
}

function controllaTrasparenzaTopNavbar() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar_topNav").style.backgroundColor = "rgba(241, 196, 14, 0.7)";
  } else {
    document.getElementById("navbar_topNav").style.backgroundColor = "rgba(241, 196, 14, 1)";
  }
}

function condividi() {
  if (navigator.share != undefined) {
    navigator.share({
      title: 'MIIDM App',
      text: 'Vieni a scoprire il MIIDM!',
      url: 'https://databasereperti.altervista.org/',
    })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
  }
  console.log("Sono entrato nella funzione");
}

function Device_Type() {
    var Return_Device; 
    if(/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone|android|iemobile|w3c|acs\-|alav|alca|amoi|audi|avan|benq|bird|blac|blaz|brew|cell|cldc|cmd\-|dang|doco|eric|hipt|inno|ipaq|java|jigs|kddi|keji|leno|lg\-c|lg\-d|lg\-g|lge\-|maui|maxo|midp|mits|mmef|mobi|mot\-|moto|mwbp|nec\-|newt|noki|palm|pana|pant|phil|play|port|prox|qwap|sage|sams|sany|sch\-|sec\-|send|seri|sgh\-|shar|sie\-|siem|smal|smar|sony|sph\-|symb|t\-mo|teli|tim\-|tosh|tsm\-|upg1|upsi|vk\-v|voda|wap\-|wapa|wapi|wapp|wapr|webc|winw|winw|xda|xda\-) /i.test(navigator.userAgent)) {
        if(/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i.test(navigator.userAgent)) {
            Return_Device = 'Tablet';
        }
        else {
            Return_Device = 'Mobile';
        }
    }
    else if(/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i.test(navigator.userAgent)) {
        Return_Device = 'Tablet';
    }
    else {
        Return_Device = 'Desktop';
    }

    return Return_Device;
}