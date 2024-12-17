<?php
header('Content-Type: application/json');

if ($_FILES['mifichero']['error'] === UPLOAD_ERR_OK) {
    $uploadDir = 'uploads/';
    $uploadFile = $uploadDir . basename($_FILES['mifichero']['name']);

    if (move_uploaded_file($_FILES['mifichero']['tmp_name'], $uploadFile)) {
        echo json_encode([
            'status' => 'success',
            'url' => $uploadFile,
        ]);
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'No se pudo mover el archivo.',
        ]);
    }
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Error en la subida del archivo.',
    ]);
}
