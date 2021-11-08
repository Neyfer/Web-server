<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="Styles.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Peliculas Family CotoPineda</title>
</head>

<body class="Body">
    <div class="nav-container">
    <a href="index.php" class=snav >
    <h1>Series</h1>
    </a>
    <a href="index-movies.php"  class="mnav">
    <h1 style="background-color:#340d8f">Movies</h1>
    </a>
    </div>
    <div class="main">
        <h1 class="movies">Movies</h1> <br>

        <div class="movies_container">

            <a href="needForSpee.html">
                <div class="serie" id="peliculas">
                    <img src="imgs/neddforspeed.jpg" alt="" class="img">
                    <b>NeedForSpeed</b>
                </div>
            </a>
            <a href="Prometheous.html">
                <div class="serie" id="peliculas">
                    <img src="imgs/Prometheus.jpg" alt="" class="img">
                    <b>Prometheous</b>
                </div>
            </a>

            <a href="covenant.html">
                <div class="serie" id="peliculas">
                    <img src="imgs/covenant.jpg" alt="" class="img">
                    <b>Alien-Covenant</b>
                </div>
            </a>

            <a href="all_of_our_stars.html">
                <div class="serie" id="peliculas">
                    <img src="imgs/The_Fault_in_Our_Stars.png" alt="" class="img">
                    <b>The fault in our stars</b>
                </div>
            </a>
        </div>
        <br>
        <br>
        <br>

        <br><br>
        <br>
        <br>

        <b class="credit">By Neyfer Coto</b>


<?php
    include_once "sql.php";
    
    $sql2 = "SELECT * FROM `movies`";
    $res2 = mysqli_query($conn, $sql2);
    $resCheck2 = mysqli_num_rows($res2);
    
    echo "<script>
    var html_code2;
    </script>";
    
    if($resCheck2 > 0){
        while($rows2 = mysqli_fetch_assoc($res2)){
            $name2 = $rows2['Nombre'];
            $img2 = $rows2['Imagen'];

            session_start();
            $_SESSION['movie'] = $name2;
            
            echo"<script>
          html_code2 = `
          <a href='mreproduction.php?movie=${name2}'>
        <div class='serie' id='$name2'>
        <img src=$img2 alt='' class='img'>
        <b  >$name2</b>
        </div>
        </a>`;
        document.querySelector('.movies_container').innerHTML += html_code2;
         </script>";
        }
    }
    
?>
</body> 

</html>