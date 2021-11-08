<?php

 include "sql.php";
    include "validation.php";


    
 if(isset($_POST['submit'])){
    $file = $_FILES['file'];
    $file_name = $file['name'];
    $file_tmp_name = $file['tmp_name'];
    $src = "subs_db/". $file_name;
    $test32 = 2;
    
    session_start();
    $serie = $_SESSION['neyfer'];
     $link = $_POST["enlace"];
    $name = $_POST["nombre"];
     $sub = $src;
    $sql5 = "INSERT INTO `$serie`(`Nombre`, `link`, `subtitulos`)VALUES(?,?,?)";
    $stmt = $conn->prepare($sql5);
    $stmt -> bind_param("sss", $name,$link, $sub);
    $stmt -> execute();
   
        //VALIDACION DE LA INFORMACION INGRESADA
        if(empty($name) || empty($link)){
            echo "Favor ingrese los datos que se le piden";
        }
        
        $msg = "los datos han sido agregados exitosamente";
            echo "<script>
            name = document.getElementById('name');
            link = document.getElementById('link');
            sub = document.getElementById('sub');
            sub.addEventListener('click', (e)=>{
                if(name.value == '' || link.value ==''){
                    e.preventDefault();
                    document.getElementById('msg').innerHTML = 'ERROR';
                   alert('error');
                }else if(name.value != '' || link.value!= ''){e.defaultPrevented();
                    document.getElementById('msg').innerHTML = 'Los datos han sido insertados correctamente';
                }
            })
        
            </script>";
            move_uploaded_file($file_tmp_name, $src);
            
            header("Location: Upload.php?data=$serie");
        }
        
        if(isset($_POST["get_season"])){
            session_start();
            $name_final = $_SESSION["root_serie"];
            $name = $_SESSION["season"];
            $number = $_POST["season-number"];
            $sql = "CREATE TABLE $name(
             id INT(100) AUTO_INCREMENT,
            Nombre VARCHAR(60) NOT NULL UNIQUE,
            link VARCHAR(180) NOT NULL UNIQUE,
            subtitulos VARCHAR(80),
            PRIMARY KEY(id))";
            $sql2 = "UPDATE `series` SET seasons = $number WHERE Nombre = '$name_final'";
        mysqli_query($conn, $sql);
        mysqli_query($conn, $sql2);
        header("Location: Upload.php?serie=$final");
        }   