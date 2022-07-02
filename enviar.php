<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <title>Datos de formulario enviados</title>
    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .container{
        width: 100%;
        height: 100vh;
        background:#0c1b32;
        display: flex;
        justify-content: center;
        align-items: center;
        }
        .container .container_hijo{
        width: calc(50% - 10px);
        padding: 20px;
        border: 2px solid #56fbd3;
        border-radius: 10px;
        box-shadow: 0px 0px 5px white;
        }
        .container .container_hijo .text{
            text-align: center;
            color:#56fbd3;
            line-height: 30px;
        }
        .container .container_hijo .agradecimiento{
            margin-top: 20px;
            text-align: center;
            color: #77829e;
            line-height: 25px;
        }
        .container .container_hijo .imagen{
            margin:20px auto;
            width: 80px;
            padding: 3px 0px;
            
        }
        .container .container_hijo .imagen .iconBv{
                font-size:60px;
                color: white;
        }
        .enlaceRegresar{
            text-decoration: none;
            position: relative;
            left: calc(50% - 30px);
            top: -10px;
            color: #56fbd3;
        }
    
        @media only screen and (max-width:480px){
            .container .container_hijo{
                width:90%;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="container_hijo">
            <h1 class="text">¡Mensaje enviado<br>
                con éxito!</h1>
            <h2 class="agradecimiento">
                Muchas gracias por dejarme tu comentario.
            </h2>
            <div class="imagen">
                <i class="iconBv fas fa-american-sign-language-interpreting"></i>
            </div>
            <a href="index.html" class="enlaceRegresar">Regresar</a>
        </div>
    </div>
</body>
</html>



<?php
$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$telefono = $_POST['celular'];
$comentario = $_POST['comentario'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Telefono de contacto: " . $telefono . " \r\n";
$mensaje .= "Mensaje: " . $_POST['comentario'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

//$para = 'contacto@antomdeveloper.com';
$para = 'digitizingaps@gmail.com';
$asunto = 'Mensaje de mi sitio web';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:enviado.html");   
?>