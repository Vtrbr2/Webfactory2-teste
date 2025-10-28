<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $assunto = addslashes($_POST['assunto']);

    $para = "Iawebfactory.site@gmail.com";
    $assunto = "Entrei em contato por  - Ia web factory";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."assunto: ".$assunto;

    $cabeca = "From: Iawebfactory.site@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?>
