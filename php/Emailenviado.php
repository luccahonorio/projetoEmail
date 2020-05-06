<?php
$caminho = "../Emailenviados/";
$diretorio = dir($caminho);

$qnt_emails = count(glob($caminho . "*"));
$resposta;
$resposta[0]["qnt"] = $qnt_emails;
$contador = 1;


while ($arquivo = $diretorio->read()) {
    if ($arquivo != ".." && $arquivo != ".") {
        //echo $arquivo."<br>";
        $xml_string = file_get_contents($caminho . $arquivo);
        $xml_objeto = simplexml_load_string($xml_string);
        $email = $xml_objeto->dadosemail->emailfisico;
        $assunto = $xml_objeto->dadosemail->assunto;
        $dataenvio = $xml_objeto->dadosemail->dataenvio;
        $conteudo = $xml_objeto->dadosemail->conteudo;
        $cc = $xml_objeto->dadosemail->Cc;

        $resposta[$contador]["email"] = strval($email);
        $resposta[$contador]["assunto"] = strval($assunto);
        $resposta[$contador]["conteudo"]  = strval($conteudo);
        $resposta[$contador]["dataenvio"]  = strval($dataenvio);

        $contador++;
    }
}
$diretorio->close();

echo json_encode($resposta);
