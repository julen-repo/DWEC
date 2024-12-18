<?php

$provincias = [];
$provincias["01"]["01"] = "Valladolid";
$provincias["01"]["02"] = "Leon";
$provincias["01"]["03"] = "Soria";
$provincias["02"]["01"] = "AAAA";
$provincias["02"]["02"] = "AAAA";
$provincias["02"]["03"] = "AAAA";
$provincias["03"]["01"] = "BBBB";
$provincias["03"]["02"] = "BBBB";
$provincias["03"]["02"] = "BBBB";

$elementos = [];
foreach ($provincias as $key => $subarray) {
    foreach ($subarray as $subkey => $value) {
        if ($key == $_POST['comunidad']) {
            $elementos[] = [
                "id" => $subkey,
                "valor" => $value,
            ];
        }
    }
}


$json = json_encode($elementos, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

echo $json;