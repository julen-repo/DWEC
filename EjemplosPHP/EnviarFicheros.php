<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subida de Ficheros</title>
</head>

<body>
    <form id="uploadForm" method="POST" enctype="multipart/form-data">
        <input type="file" id="mifichero" name="mifichero" required>
        <input type="submit" value="Enviar">
    </form>
    <div id="ajax"></div>

    <script>
        document.getElementById("uploadForm").addEventListener("submit", function(e) {
            e.preventDefault();

            const formData = new FormData();
            const archivo = document.getElementById("mifichero").files[0];
            formData.append("mifichero", archivo);

            const xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost:8080/RecibirFichero.php", true);

            xhr.onload = function() {
                try {
                    if (xhr.status === 200) {
                        const response = JSON.parse(xhr.responseText);

                        if (response.status === "success") {
                            document.getElementById("ajax").innerHTML = "<p>Archivo subido con éxito</p>";

                            const imagen = document.createElement("img");
                            imagen.src = response.url;
                            document.body.append(imagen);
                        } else {
                            document.getElementById("ajax").innerHTML = `<p>Error: ${response.message}</p>`;
                        }
                    } else {
                        alert("Error AJAX: " + xhr.status + " " + xhr.statusText);
                    }
                } catch (err) {
                    alert("Error al procesar la respuesta del servidor: " + err.message);
                    console.error("Respuesta no válida:", xhr.responseText);
                }
            };

            xhr.send(formData);
        });
    </script>
</body>

</html>