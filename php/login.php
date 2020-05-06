<?php

$login = $_POST["loginxml"];
$senha = $_POST["senhaxml"];

$xml_string = file_get_contents("../LoginSenha.xml");
$xml_objeto = simplexml_load_string($xml_string);

$loginxml = $xml_objeto->dadoslogin->login->administrador[0]->login;
$senhaxml = $xml_objeto->dadoslogin->login->administrador[0]->senha;

$loginxml1 = $xml_objeto->dadoslogin->login->administrador[1]->login;
$senhaxml1 = $xml_objeto->dadoslogin->login->administrador[1]->senha;
if ($login == $loginxml && $senha == $senhaxml) {
    echo json_encode("permitido!");
}
if ($login == $loginxml1 && $senha == $senhaxml1) {
    echo json_encode("permitido!");
}
