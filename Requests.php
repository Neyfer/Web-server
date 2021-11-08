<?php
include_once "sql.php";
session_start();

$movies;
if(isset($_REQUEST["get_movie"])){
    $movies = $_SESSION["movies"];
    $sql2 = "SELECT * FROM `movies` WHERE Nombre='$movies'";
    $res = mysqli_query($conn, $sql2);
    
    while($rows = mysqli_fetch_assoc($res)){
        $data[] = $rows;
        echo json_encode($data);
    }
}

if(isset($_REQUEST["upload_linkv2"])){
    $_SESSION['link_to_upload'] = $_REQUEST['upload_linkv2'];
}
if(isset($_REQUEST["uploadv2_num"])){
    $_SESSION['numv2'] = $_REQUEST['uploadv2_num'];
}


if(isset($_REQUEST["storage"])){
    echo json_encode($_SESSION['name']);
}

if(isset($_REQUEST["movie_time"])){
    echo json_encode($_SESSION['movies']);
}

if(isset($_REQUEST['sname'])){
    $_SESSION['neyfer'] = $_REQUEST['sname'];
    echo $_SESSION['neyfer'] ;
}

if(isset($_REQUEST['serie_root'])){
    $_SESSION['root_serie'] = $_REQUEST['serie_root'];
    echo $_SESSION['root_serie'] ;
}

if(isset($_REQUEST["season"])){
    $_SESSION["season"] = $_REQUEST["season"];
    echo  $_REQUEST["season"];;
}

if(isset($_REQUEST["get_season_number"])){
    $name = $_REQUEST["get_season_number"];
    $sql = "SELECT * FROM `series` WHERE Nombre ='$name'";
    $res9=mysqli_query($conn, $sql);
    while($rows9 = mysqli_fetch_assoc($res9)){
        $data[] = $rows9;  
        $d2 = json_encode($data);
        echo $d2;
    }
}


if(isset($_REQUEST['serie2'])){
    $serie = $_REQUEST['serie2'];
    $sql9 = "SELECT * FROM `series` WHERE Nombre ='Scorpion'";
    $res9 = mysqli_query($conn, $sql9);
    $resCheck9 = mysqli_num_rows($res9);

if($resCheck9 > 0){
    while($rows9 = mysqli_fetch_assoc($res9)){
        $data[] = $rows9['seasons'];  
    }
    }
    $d2 = json_encode($data);
    echo $d2;
}

//GET THE SERIES LIST FOR THE OPTION ON UPLOAD.PHP
if(isset($_REQUEST['get_List_235'])){
    $sql = "SELECT * FROM `series`";
    $res = mysqli_query($conn, $sql);
    $resCheck = mysqli_num_rows($res);

if($resCheck > 0){
    while($rows = mysqli_fetch_assoc($res)){
        $data[] = $rows['Nombre'];  
    }
    }
    $d2 = json_encode($data);
    echo $d2;
}

//GET THE REQUIRES LINKS



if(isset($_REQUEST['q'])){
    $cb = $_SESSION['name'];
    $q = $_REQUEST["q"];
    $sql = "SELECT * FROM $cb WHERE id=$q";
    $res = mysqli_query($conn, $sql);
    $resCheck = mysqli_num_rows($res);

if($resCheck > 0){
    while($rows = mysqli_fetch_assoc($res)){
        $data[] = $rows['link'];  
    }
    }
    $d = json_encode($data);
    echo $d;
}

//GET THE REQUIRE VIDEO ID

if(isset($_REQUEST['id'])){
    $cb = $_SESSION['name'];
    $id = $_REQUEST['id'];
    $sql = "SELECT * FROM $cb WHERE id=$id";
    $res = mysqli_query($conn, $sql);
    $resCheck = mysqli_num_rows($res);

    if($resCheck > 0){
        while ($rows = mysqli_fetch_assoc($res)){
            $subs[] = $rows['subtitulos'];
        }
    }

    $sub = json_encode($subs);
    echo $sub;
}

//GET THE NUMBER OF CHAPTERS

if(isset($_REQUEST['x'])){
    $cb = $_SESSION['name'];
    $sql = "SELECT * FROM $cb";
    $res = mysqli_query($conn, $sql);
    $resCheck = mysqli_num_rows($res);
    if($resCheck > 0){
        while($rows = mysqli_fetch_assoc($res)){
        $data =  $rows['id'];
        }
    }
    echo $data; 
    
}

//GET THE LIST OF SERIES

if(isset($_REQUEST['list'])){
    $cb = $_SESSION['name'];
    $sql = "SELECT * FROM $cb";
    $res = mysqli_query($conn, $sql);
    $resCheck = mysqli_num_rows($res);
    $data = Array();
    if($resCheck > 0){
        while($rows = mysqli_fetch_assoc($res)){
        $data[] =  ($rows['Nombre']);
        }
    }

    echo json_encode($data);
}
?>









    


    







