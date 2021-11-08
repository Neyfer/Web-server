<?php

include_once "sql.php";

if(isset($_POST['Upload'])){
$nombre = $_POST['MN'];
$link = $_POST['Mlink'];

echo "<script>alert($nombre);</script>";

/*$imagen = $_FILES['img'];
$img_name = $img['name'];
$img_tmp_name = $img['tmp_name'];
$img_source = "series_db/". $img_name;
print_r($imagen);

$sub = $_FILES['subs'];
$sub_name = $sub['name'];
$sub_tmp_namme = $sub['tmp_name'];
$sub_source = "subs_db/" . $img_name;

print_r($sub);
*/

$sql = "INSERT INTO `movies`(`Nombre`, `link`, `Imagen`, `subtitulos`)VALUES($nombre, $link, 'bbdvdsvd', 'nyferecc')";
mysqli_query($conn, $sql);

//move_uploaded_file($img_tmp_name, $img_source);
//move_uploaded_file($sub_tmp_name, $sub_source);

header("Location: Upload.php?movie=succes");

}