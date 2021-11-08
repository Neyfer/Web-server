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
        <h1 class="Seasons" id="title"></h1>
    </div>
    <video src="" controls class="vid" autoplay unmuted id="capitulo">
        <track kind="subtitles" srclang="en" src="" label="English" id="sub" default>
    </video>

    <script src="get_movie.js"></script>
    <script src="movies-save-time.js"></script>
<?php
     session_start();
        $_SESSION['movies'] = $_GET['movie'];
        ?>
</body>

</html>