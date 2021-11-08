<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="Upload.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <h1 class ="title">NEYFER'S SERVER CONTROL</h1>
    
    <div class="main">
    <div class = "container" id="cuadro1">
    <div class ="title1">Add Episodes</div><br><style>.title1{text-align:center;}</style>
    Series:  <div id = browsers><select class ="list" id="lista">
    </select>
    </div><br>

Season:  <div id = select><select id="num_seasons2"class ="list">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
</select>
</div><br></br>
    <form action="addChapters.php" method="POST" enctype="multipart/form-data">
        Nombre :<input type="text" value = "Chapter"name="nombre" id="name" class="txt"><br><br>
        Enlace :<input type="text" name="enlace" id="link" class="txt"><br><br><style>#link{position:relative; left: 3.5%;}</style>
        <label for="files">Subs:</label>
        <input type="file" name="file23" id="file"><br><br>
        <input type="submit" value="Upload" id="sub" name="submit" class="sub" >
        <div id="msg" ></div>
    </form>

    </div>

    <div class="container" id="cuadro2">
    <div class ="title1">Upload Series</div><br><style>.title1{text-align:center;}</style>
    <form action="Upload.php" method="POST" enctype="multipart/form-data">
        Nombre :<input type="text" name="SN" id="SN" class="txt"><br><br>
        <label for="files">IMAGEN:</label>
        <input type="file" value ="subs" name="img" id="file"><br><br>
        <input type="submit" value="Upload" name="Upload" id="btn2" class="sub">
        <div id="msg" ></div>
    </form>
    </div>
    
    <div class="container" id="cuadro3">
    <div class ="title1">Upload Movies</div><br><style>.title1{text-align:center;}</style>
    <form action="Upload.php" method="POST" enctype="multipart/form-data">
        Nombre :<input type="text" name="MN" class="txt"><br><br>
        Link :<input type="text" name="Mlink" class="txt"><br><br>
        <label for="files">IMAGEN:</label>
        <input type="file" value ="subs" name="Mimg"><br><br>
        <label for="files">subtitulos:</label>
        <input type="file" value ="Msubs" name="Msubs" ><br><br>
        <input type="submit" value="Upload" name="MUpload" class="sub">
        <div id="msg" ></div>
    </form>
    </div>

    <div class="container" id="cuadro4">
    <div class ="title1">Add Seasons</div><br><style>.title1{text-align:center;}</style>
    <form action="addChapters.php" method="POST">
    Series: <div id = browsers><select class ="list" id="lista2">
    </select><br><br>
    Number :<input type="number" name="season-number"class="txt" id="season_number"><br><br>
    <input type="submit" value="Upload" name="get_season" id="add_season" class="sub">
    <div id="msg" ></div>
    </form>
    </div>

    </div>
    <b class="credit">By Neyfer Coto</b>
    
    <script src="addSeries.js"></script>

    <?php
   

    include_once "sql.php";
    include "validation.php";
        
        //SUBIR UNA NUEVA SERIE
            if(isset($_POST['Upload'])){
                $img = $_FILES['img'];
                print_r($img);
                $img_name = $img['name'];
                $img_tmp_name = $img['tmp_name'];
                $source = "series_db/". $img_name;
                $n = $_POST['SN'];

                if($n == ''){
                    echo "<script>
                    alert('Favor llenar todos los espacios solicitados');
                    </script>"; 
                }

                $sql = "CREATE TABLE $n (
                    id INT(100) AUTO_INCREMENT,
                    Nombre VARCHAR(60) NOT NULL UNIQUE,
                    link VARCHAR(180) NOT NULL UNIQUE,
                    subtitulos VARCHAR(80),
                    PRIMARY KEY(id)
                )";
                $res = mysqli_query($conn, $sql);
                echo "<script>console.log('creado creo')</script>";
                    //AGREGAR LOS DATOS A `SERIES`
                $sql2 = "INSERT INTO `series`(`Nombre`, `Image`) VALUES('$n', '$source')";
                $res2 = mysqli_query($conn, $sql2); 
                move_uploaded_file($img_tmp_name, $source);
            }

            

            
    if(isset($_POST['MUpload'])){
$nombre = $_POST['MN'];
$link = $_POST['Mlink'];


$imagen = $_FILES['Mimg'];
$img_name = $imagen['name'];
$img_tmp_name = $imagen['tmp_name'];
$img_source = "series_db/". $img_name;
$isrc = $img_source;

$sub = $_FILES['Msubs'];
$sub_name = $sub['name'];
$sub_tmp_name = $sub['tmp_name'];
$sub_source = "subs_db/" . $sub_name;
echo "<script>alert($sub_source)</script>";
$src2 = $sub_source;

$sql = "INSERT INTO `movies`(`Nombre`, `link`, `Imagen`, `subtitulos`)VALUES('$nombre', '$link', '$isrc', '$src2')";
mysqli_query($conn, $sql);

move_uploaded_file($img_tmp_name, $isrc);
move_uploaded_file($sub_tmp_name, $src2);

}

           
    ?>  

</body>
</html>