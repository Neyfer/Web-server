<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>upload</title>
    <link rel="stylesheet" href="UV2S.css">
</head>
<body>
    <form action="uploadV2.php" method="post" enctype="multipart/form-data" id="form">
    <label for="number">number of chapters</label>
        <input type="number" name="number" id="number">
        <input type="button" value="Add" id="sub"name="sub"><br><br>
</form>
<script src="add_several_chapters.js"></script>

<?php
include_once "sql.php";
session_start();

    if(isset($_POST["Upload"])){
        $number = $_SESSION["numv2"];
        $link= json_decode($_SESSION['link_to_upload']);
        $links = Array($link);
        $id_starter = $_POST['n_start'];
        $serie = $_POST['serie'];

        for($i=0; $i<$number; $i++){
            $enlace = $links[0][$i];
            $c_n = $i+1;
            $name = "Chapter".$id_starter;
            $sub = $_FILES['file'.$c_n];
            $s_name = $sub['name'];
            $s_tmp_name = $sub['tmp_name'];
            $s_src = "subs_db/".$s_name;
           $sql = "INSERT INTO `$serie`(`id`,`Nombre`, `link`,`subtitulos`)VALUES('$id_starter','$name', '$enlace','$s_src')";
           $id_starter++;
           mysqli_query($conn, $sql);
           move_uploaded_file($s_tmp_name, $s_src);
           header("location:uploadV2.php?succes");
        }
    }
?>
</body>
</html>