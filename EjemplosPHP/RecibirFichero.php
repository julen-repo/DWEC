<?php
function subido()
{
    $fichero_subido = '.\\' . basename($_FILES['mifichero']['name']);
    if (move_uploaded_file($_FILES['mifichero']['name'], $fichero_subido)) {
        echo basename($fichero_subido);
    } else {
        echo "error";
    }
}
function pillar_fichero()
{
    $fichero_subido = $_FILES['mifichero']['name'];
    echo $fichero_subido;
}
