<?php
$para = $_POST["paraquem"];
$assunto = $_POST["assuntoemail"];
$data = $_POST["dataemail"];
$conteudo = $_POST["conteudoemail"];
$cc = $_POST["Cc"];

$xml = new DOMDocument("1.0");
$email = $xml->createElement("email");
$dadosemail = $xml->createElement("dadosemail");
$emailfisico = $xml->createElement("emailfisico", $para);
$assuntoxml = $xml->createElement("assunto", $assunto);
$conteudoemail = $xml->createElement("conteudo", $conteudo);
$dataemail = $xml->createElement("dataenvio", $data);
$ccxml = $xml->createElement("Cc", $cc);

$dadosemail->appendChild($emailfisico);
$dadosemail->appendChild($assuntoxml);
$dadosemail->appendChild($dataemail);
$dadosemail->appendChild($ccxml);
$dadosemail->appendChild($conteudoemail);
$email->appendChild($dadosemail);
$xml->appendChild($email);
$xml->save("../Emailenviados/" . $assunto . ".xml");
