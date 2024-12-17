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
        let select1 = document.getElementById("provincias");
        let select2 = document.getElementById("localidades");

        document.addEventListener("DOMContentLoaded", function() {
            //for de la api
            let local = document.createElement("option");
            local.value = element.toLowerCase();
            local.innerHTML = element;
            select2.append(local);

        });

        function rellenar() {
            let valor = select1.value; //para accceso a la base de datos
            while (select2.options.length > 0) {
                select2.remove(0);
            }
            array.forEach(element => {
                let local = document.createElement("option");
                local.value = element.toLowerCase();
                local.innerHTML = element;
                select2.append(local);
            });
        }
        document.getElementById("provincias").addEventListener("change", function(e) {

            let promise = new Promise(function(resolve, reject) {
                resolve(rellenar());
                reject(new Error("saafdsafsdfsd"));
            });
        });
        async function a() {
            let fds
        }
    </script>
</body>

</html>