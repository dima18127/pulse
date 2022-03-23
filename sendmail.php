<?php 
//Импортировать классы PHPMailer в глобальное пространство имен 
//Они должны быть в начале вашего скрипта, а не внутри функции 
use  PHPMailer \ PHPMailer \ PHPMailer ;
use  PHPMailer \ PHPMailer \ Exception ;
использовать  PHPMailer \ PHPMailer \ SMTP ;

//Загрузить автозагрузчик Composer 
// require  'vendor/autoload.php' ;
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php' ;

//Создать экземпляр; передача `true` включает исключения 
$ mail = new  PHPMailer ( true );

try {
     //Настройки сервера 
    $ mail -> SMTPDebug = SMTP :: DEBUG_SERVER ;                      //Включить подробный отладочный вывод 
    $ mail -> isSMTP ();                                            //Отправить по SMTP 
    $ mail -> Host        = 'smtp.example.com' ;                     //Установим SMTP-сервер для отправки через 
    $ mail -> SMTPAuth    = true ;                                   //Включить аутентификацию SMTP 
    $почта -> Имя пользователя    = 'user@example.com' ;                     // Имя пользователя SMTP 
    $ mail -> Password    = 'secret' ;                               //Пароль SMTP 
    $ mail -> SMTPSecure = PHPMailer :: ENCRYPTION_SMTPS ;            // Включить неявное шифрование TLS 
    $ mail -> Port        = 465 ;                                    // TCP-порт для подключения; используйте 587, если вы установили `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Получатели 
    $ mail -> setFrom ( 'from@example.com' , 'Mailer' );
    $ mail -> addAddress ( 'joe@example.net' , 'Joe User' );     //Добавить получателя 
    $ mail -> addAddress ( 'ellen@example.com' );               // Имя не обязательно 
    $ mail -> addReplyTo ( 'info@example.com' , 'Информация' );
    $ почта -> addCC ( ');
    $ mail -> addBCC ( 'bcc@example.com' );

    //Вложения 
    $ mail -> addAttachment ( '/var/tmp/file.tar.gz' );         //Добавить вложения 
    $ mail -> addAttachment ( '/tmp/image.jpg' , 'new.jpg' );    // Необязательное имя

    //Содержимое 
    $ mail -> isHTML ( true );                                  // Установите формат электронной почты в HTML 
    $ mail -> Subject = 'Вот тема' ;
    $ mail -> Body     = 'Это тело HTML-сообщения <b>выделено жирным шрифтом!</b>' ;
    $ mail -> AltBody = 'Это тело в виде обычного текста для почтовых клиентов, не поддерживающих HTML' ;

    $ почта -> отправить ();
    echo  'Сообщение отправлено' ;
} catch ( Exception  $ e ) {
     echo  "Сообщение не может быть отправлено. Ошибка почтовой программы: {$mail->ErrorInfo}" ;
}