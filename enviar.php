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
            <a href="contenido.html" class="enlaceRegresar">Regresar</a>

        </div>
    </div>
</body>
</html>



<!--CODIGO MEJORADO VALIDACION EN PHP-->

<?php
$nombre     = htmlspecialchars(trim($_POST['nombre']));
$mail       = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$telefono   = htmlspecialchars(trim($_POST['celular']));
$comentario = htmlspecialchars(trim($_POST['comentario']));

// Validación básica de email
if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    die("Correo electrónico no válido.");
}

/*
$header  = "From: $mail\r\n";
$header .= "Reply-To: $mail\r\n";
*/

$header  = "From: no-reply@digitizingcode.com\r\n";
$header .= "Reply-To: $mail\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-Type: text/plain; charset=UTF-8\r\n";

$mensaje  = "Este mensaje fue enviado por: $nombre\r\n";
$mensaje .= "E-mail: $mail\r\n";
$mensaje .= "Teléfono: $telefono\r\n";
$mensaje .= "Mensaje:\r\n$comentario\r\n";
$mensaje .= "Enviado el " . date('d/m/Y H:i:s') . "\r\n";

$para = 'contacto@digitizingcode.com';
$asunto = 'Nuevo mensaje registrado';

if (mail($para, $asunto, $mensaje, $header)) {
    header("Location: contenido.html");
    exit(); // 🔸 buena práctica: asegura que no se ejecute nada después
} else {
    echo "Error al enviar el mensaje. Intenta nuevamente más tarde.";
}
?>


