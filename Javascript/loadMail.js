$(document).ready(function () {
  $("#logout").click(function () {
    window.location.replace("login.html");
  });
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "../php/lerarquivos.php",
    data: {
    },
    success: function (retorno) {
      for ($i = 1; $i <= retorno[0].qnt; $i++) { // para cada linha da matriz de retorno, adiciona  uma nova linha com os dados desse email
        criar(retorno[$i].email, retorno[$i].assunto, retorno[$i].conteudo, retorno[$i].dataenvio);
      }
    }

  });

  function criar(email, assunto, conteudo, dataenvio) { // para criacao de novas linhas 
    $("#emails").append("<tr><td><div class = \"LinhaEmail\" cellspacing =\"100\"><table><tr><td><img class = \"perfil\" src=\"http://localhost/Projeto_Email/Imagens/ImgPerfil.png\" alt=\"\"></td><td class = \"E1\">" + email + "</td><td class = \"E2\"><b>Assunto: </b>" + assunto + "</td><td class = \"E3\"><b>Data: </b>" + dataenvio + " -- " + conteudo + "</td></tr></table></div></td></tr>");
  }


  function novamensagem() { // para o popup 
    var myWindow = window.open("../Paginas/criaremail.html", "Enviar Email", "width=500,height=400");

  }
  $("#novamensagem").click(function () {
    novamensagem();
  });
  $("#itensenviados").click(function () {
    window.location.replace("emailenviado.html");
  });

});