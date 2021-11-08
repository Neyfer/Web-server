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
    <a href="index.php" class=snav>
    <h1  style="background-color:#340d8f">Series</h1>
    </a>
    <a href="index-movies.php" class="mnav">
    <h1 >Movies</h1>
    </a>
    </div>

    
    <h1 class="Titulo">Series </h1> <br>
    <div class="main">

        <div class="container">
            <a href="Chapter.html">
                <div class="serie">
                    <img src="imgs/DrakeAndJosh.jpg" alt="" class="img">
                    <b>Drake And Josh</b>
                </div>
            </a>
             <a href="Victorous.html">
                <div class="serie">
                    <img src="imgs/Victorious.jpg" alt="" class="img">
                    <b>Victorious</b>
                </div>
            </a>
        </div>
        <b class="credit">By Neyfer Coto</b>


<?php
    include "sql.php";
    $sql = "SELECT * FROM `series`";
    $res = mysqli_query($conn, $sql);
    $resCheck = mysqli_num_rows($res);

    echo "<script>
    var html_code;
    </script>";
    
    
    if($resCheck > 0){
        while($rows = mysqli_fetch_assoc($res)){
            $name = $rows["Nombre"];
            $img = $rows["Image"];
            $_SESSION['name'] = $name;
            echo 
          "<script>
          html_code = `
          <a href='sreproduccion.php?series=${name}'>
        <div class='serie' id='$name'>
        <img src=$img alt='' class='img'>
        <b  >$name</b>
        </div>
        </a>`;
        document.querySelector('.container').innerHTML += html_code;
         </script>";
        }
    }
    
?>
</body> 

</html>