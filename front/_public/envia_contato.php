<?
$title = "Matriz | Contato site";
$email_matriz  = "contato@thiagolima.com";

$nome = $_POST["inputNome"];
$email = $_POST["inputEmail"];
$telefone = $_POST["inputTelefone"];
$mensagem = $_POST["inputMensagem"];

$Remetente = $email; // aqui, colocamos que o email digitado seja quem enviou o formulário, 
                     // pode ser substituido por "Contato do Site", assim, sairá sempre que 
                     // quem enviou o email, seja Contato do Site

$msg = "Mensagem enviada em " . date("d/m/Y") . ", os dados seguem abaixo: " . chr(13) . chr(10) . chr(10);
$msg .= "Nome : " . $nome . chr(13) . chr(10);
$msg .= "E-mail : " . $email . chr(13) . chr(10);
$msg .= "Telefone : " . $telefone . chr(13) . chr(10);
$msg .= "Mensagem : " . $mensagem . chr(13) . chr(10);


$enviou = mail($email_matriz, $title, $msg,"From: $Remetente\n");


if($enviou)
    {
        echo "<script> window.location = 'index.php?msg=1#mais-informacoes'; </script>";
    }
    else
    {
        echo "<script> window.location = 'index.php?msg=2#mais-informacoes'; </script>";
    }
?>