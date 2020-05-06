$(document).ready(function () {
    $("#bLogar").click(function () {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/login.php",
            data: {

                loginxml: $("#iLogin").val(),
                senhaxml: $("#iSenha").val()
            },
            success: function (retorno) {
                window.location.replace("../Paginas/Email.html");
            },
            error:function(){
                var aux = parseInt($("#iLogin").val(""));
                var aux2 = parseInt($("#iSenha").val(""));
               $("#alerta").html("Login ou senha incorretos!");


            }

        });

    })
    /*$.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/login.php",
        data: {

            loginxml: $("#iLogin").val(),
            senhaxml: $("#iSenha").val()
        },
        success: function (retorno) {
            $("#usuario").html(retorno.usuario);
        }

    });*/
});