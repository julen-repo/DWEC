<?php

$provincias = [];
$provincias["01"] = "CyL";
$provincias["02"] = "Galicia";
$provincias["03"] = "Andalucia";

$elementos = [];
foreach ($provincias as $key => $value) {
    $elementos[] = [
        "id" => $key,
        "valor" => $value,
    ];
}


$json = json_encode($elementos, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

echo $json;