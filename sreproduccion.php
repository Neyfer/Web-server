<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="StylesVictorious.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REPRODUCCION</title>
</head>

<body>
    <div id="tcontainer">
        <br>
        <div id = "s-con">
    <h1 class="Seasons" id="serie-t"></h1>
        <h1 class="Seasons" id="title">Season</h1>
    </div><br><br>
    <video src="" controls class="vid" id="capitulo">
        <track kind="subtitles" srclang="en" src="" label="English" id="sub" default>
    </video>

    <div class = "o-con">
    <input type ="button" value="Episodes" class= "options" id="ep" >
    <input type ="button" value="Seasons" class= "options" id="se">
    </div>  
    <div class="buttons">
    </div>

    <div class="seasons" id="s-container2" hidden="true">
    </div>
    <script src="URL.js"></script>
    <script src="save-current-time.js"></script>
<?php
     session_start();
        $_SESSION['name'] = $_GET['series'];
        ?>
</body>

</html>