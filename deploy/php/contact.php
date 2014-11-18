<?php
/*The following php script is in charge of the email form*/

/* Set e-mail recipient */
$myemail  = "jescongallo@gmail.com";

/* Check all form inputs using check_input function */
$yourname = check_input($_POST['name'], "Enter your name");//the sender's name
$comments  = check_input($_POST['message'], "Please enter a message");//sender's message
$comments  = wordwrap($comments,70);//message lines should not exceed 70 chracters (PHP rule), so wrap it.
$email    = check_input($_POST['email'],"Please enter your email");//sender's email


/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}
/* If URL is not valid set $website to empty */
if (!preg_match("/^(https?:\/\/+[\w\-]+\.[\w\-]+)/i", $website))
{
    $website = '';
}

/* Let's prepare the message for the e-mail */
$message = "Hello!

You Just got a new email:

Name: $yourname
E-mail: $email

Comments : $comments

End of message
";

//sendMail();

mail($myemail, $yourname, $message);
//Redirect visitor to the thank you page 
header('Location: ../contactme/thanks.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error();
    }
    return $data;
}

//If email input is invalid show error message
function show_error()
{
header('Location: ../contactme/invalidEmail.html');
exit();
}
?>