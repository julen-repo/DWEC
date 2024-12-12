<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    require_once("RecibirFichero.php");
    ?>
    <form action="" method="POST" enctype="multipart/form-data">
        <input type="file" id="mifichero" name="mifichero">
        <div id="ajax"></div>
    </form>

    <script>
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function(e) {
            if (xhr.status == 200) {
                document.getElementById("ajax").innerHTML = xhr.responseText;
                let imagen = document.createElement("img");
                imagen.setAttribute("src", <?php pillar_fichero()?>);
                document.getElementsByTagName("body").append(imagen);
            } else {
                alert("Error ajax: " + xhr.status + xhr.statusText);
            }
        });
        let archivo = document.getElementsByName("mifichero");
        archivo.addEventListener("click", function(e) {
            <?php
            subido();
            ?>
        });
    </script>
</body>

</html>