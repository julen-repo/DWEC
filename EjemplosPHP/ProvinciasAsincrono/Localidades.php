<?php

// Verifica si el valor de 'comunidad' existe en el array $_POST
if (isset($_POST['comunidad'])) {
    $comunidad = $_POST['comunidad']; // Obtener el valor de la comunidad

    // A continuación, deberías tener un array de provincias que corresponda a 'comunidad'
    $provincias = [
        "01" => ["01" => "Valladolid", "02" => "Leon", "03" => "Soria"],
        "02" => ["01" => "AAAA", "02" => "AAAA", "03" => "AAAA"],
        "03" => ["01" => "BBBB", "02" => "BBBB", "03" => "BBBB"]
    ];

    // Verifica si la comunidad solicitada existe en el array de provincias
    if (isset($provincias[$comunidad])) {
        $elementos = [];
        foreach ($provincias[$comunidad] as $subkey => $value) {
            $elementos[] = [
                "id" => $subkey,
                "valor" => $value,
            ];
        }
        // Devuelve la respuesta como JSON
        echo json_encode($elementos, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    } else {
        // Si la comunidad no existe
        echo json_encode(["error" => "Comunidad no válida"]);
    }
} else {
    // Si no se ha enviado la comunidad
    echo json_encode(["error" => "No se ha enviado la comunidad"]);
}
?>
