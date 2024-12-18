<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form>
        <select id="provincias" name="provincias">
            <option value="galicia">Galicia</option>
            <option value="valladolid">Valladolid</option>
            <option value="jaen">Jaen</option>
        </select>
        <select id="localidades">

        </select>
    </form>
    <script>
        let array = ["hola", "adios", "fdasf", "fdfa"];
        document.getElementById("provincias").addEventListener("change", function(e) {
            const formData = new FormData();
            const archivo = document.getElementById("provincias").value;
            formData.append("provincia", archivo);

            const xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost:8080/Provincias.php", true);

            xhr.onload = function() {
                try {
                    let select= document.getElementById("localidades");
                    while (select.options.length > 0) {
                        select.remove(0);
                    }
                    if (xhr.status === 200) {
                        document.getElementById("localidades");
                        array.forEach(element => {
                            let local = document.createElement("option");
                            local.value = element.toLowerCase();
                            local.innerHTML = element;
                            select.append(local);
                        });
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