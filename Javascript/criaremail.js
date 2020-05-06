$(document).ready(function () {
    $("#benviar").click(function () {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/criaremail.php",
            data: {
                paraquem: $("#destinatario").val(),
                assuntoemail: $("#assunto").val(),
                dataemail: $("#data").val(),
                conteudoemail: $("#conteudo").val(),
                Cc: $("#cc").val()
            },
            success: function (retorno) {
            }
        });
        window.close();
    })

});