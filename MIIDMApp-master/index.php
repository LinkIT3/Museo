<!DOCTYPE html>
<html lang="it" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0">
        <meta name="theme-color" content="#f1c40e">

        <!--Meta tag per iOS-->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-title" content="MIIDM App">
        <link rel="apple-touch-icon" href="res/192x192.png">
        <!--TODO Aggiungere splash screen per iOS-->

        <link rel = "stylesheet" href="./style/allstyles.css" />
        <link rel = "manifest" href = "manifest.json" />
        <script src = "script/elencoReperti.js"></script>
        <script type="text/javascript" src="./script/jsQr.js"></script>
        <script type="text/javascript"src = "./script/webcam.js"></script>
<<<<<<< HEAD
=======
        <script type="text/javascript"src = "./script/swiped_events.js"></script>
>>>>>>> b39e8ae553dd6cee049e59eeb326c38178187be2

        <title>MIIDM App</title>
    </head>
    <body>
        <?php include("navbar.html"); ?>
        <div id = "page_render">
            <!--Qui vengono caricate le pagine interne alla shell-->

            <!--HOME-->
            <div id = "div_sfondo_home">
                <p id = "iniziale">
                    <span id = 'title_la'>La</span> <span id = 'title_storia'>storia</span> <span id = 'title_del1'>del</span> <br />
                    <span id = "title_passato">passato</span>
                    <span id = 'title_attraverso'>attraverso</span> <span id = 'title_le'>le</span> <span id = 'title_tecnologie'>tecnologie</span> <span id = 'title_del2'>del</span><br />
                    <span id = 'title_futuro'>futuro</span>
                </p>
            </div>
        </div>
        <?php include("bottom-navbar.html"); ?>

        <!--Pagine della sidebar laterale-->
        <?php include("segnalaUnBug.html"); ?>

        <!--Pagina principale del reperto-->
        <?php include("reperto.html"); ?>

        <script src = "script/page_navigation.js"></script>

        <!--Div per il controllo dell'orientamento del dispositivo-->
        <p id = "messaggioGiraTelefono">
            Non puoi usare quest'app da desktop, ma solo su smartphone.
            Se lo stai usando, ruota il telefono in verticale.
        </p>
    </body>
</html>
