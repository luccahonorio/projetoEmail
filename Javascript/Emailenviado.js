$(document).ready(function () {
    $("#logout").click(function () {
        window.location.replace("login.html");
    });
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/Emailenviado.php",
        data: {
        },
        success: function (retorno) {
            for ($i = 1; $i <= retorno[0].qnt; $i++) {
                criar(retorno[$i].email, retorno[$i].assunto, retorno[$i].conteudo, retorno[$i].dataenvio, retorno[$i].cc);
            }
        }
    });

    function criar(email, assunto, conteudo, dataenvio) {
        $("#emailsenviados").append("<tr><td><div class = \"LinhaEmail\" cellspacing =\"100\"><table><tr><td><img class = \"perfil\" src=\"http://localhost/Projeto_Email/Imagens/ImgPerfil.png\" alt=\"\"></td><td class = \"E1\">" + email + "</td><td class = \"E2\"><b>Assunto: </b>" + assunto + "</td><td class = \"E3\"><b>Data: </b>" + dataenvio + " -- " + conteudo + "</td></td></tr></table></div></td></tr>");
    }

    function novamensagem() {
        var myWindow = window.open("../Paginas/criaremail.html", "Enviar Email", "width=500,height=400");

    }
    $("#novamensagem").click(function () {
        novamensagem();
    });
    $("#caixadeentrada").click(function () {
        window.location.replace("Email.html");
    });
});