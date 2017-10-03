<?php
error_reporting(E_ALL & ~E_NOTICE);
require_once("config.php");
if(isset($_POST["action"]) && $_POST["action"]=="contact_form")
{

	//contact form
	require_once("../phpMailer/class.phpmailer.php");
	$result = array();
	$result["isOk"] = true;

	//Test the $_POST for minimum requirements
	if($_POST["first_name"]!="" && $_POST["first_name"]!=_def_first_name
        && $_POST["last_name"]!="" && $_POST["last_name"]!=_def_first_name
        && $_POST["email"]!="" && $_POST["email"]!=_def_email
        && preg_match("#^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$#", $_POST["email"])
        && $_POST["title"]!="" )
	{
	    //Clean the $_POST
		$values = array(
			"first_name" => $_POST["first_name"],
			"last_name" => $_POST["last_name"],
			"subject" => $_POST["subject"],
            "title" => $_POST["title"],
			"email" => $_POST["email"],
			"phone" => ($_POST["phone"]!=_def_phone ? $_POST["phone"] : ""),
            "company" => $_POST["company"],
            "referrer" => $_POST["referrer"]
		);
		if((bool)ini_get("magic_quotes_gpc")) 
			$values = array_map("stripslashes", $values);
		$values = array_map("htmlspecialchars", $values);

		$mail=new PHPMailer();

		$mail->CharSet='UTF-8';
        $mail->setFrom('tpdadmin@ambercouch.co.uk', 'tempestdesign.co.uk');
		$mail->addReplyTo($values["email"], $values["name"]);
		$mail->AddAddress(_to_email, _to_name);

		$mail->AddBCC(_admin_email, 'ValueFold');

		$smtp=_smtp_host;
		if(!empty($smtp))
		{
		$mail->IsSMTP();
			$mail->SMTPAuth = true; 
			$mail->Host = _smtp_host;
			$mail->Username = _smtp_username;
			$mail->Password = _smtp_password;
			if((int)_smtp_port>0)
				$mail->Port = (int)_smtp_port;
			$mail->SMTPSecure = _smtp_secure;
		}

		$mail->Subject = (isset($values["subject"]) && $values["subject"]!="" && $values["subject"]!=_subject_email ? $values["subject"] : _subject_email);
		$mail->MsgHTML(include("template.php"));

		if($mail->Send())
			$result["submit_message"] = _msg_send_ok;
		else
		{
			$result["isOk"] = false;
			$result["submit_message"] = _msg_send_error;
		}
	}
	else
	{
		$result["isOk"] = false;
		if($_POST["name"]=="" || $_POST["name"]==_def_name)
			$result["error_name"] = _msg_invalid_data_name;
		if($_POST["email"]=="" || $_POST["email"]==_def_email || !preg_match("#^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$#", $_POST["email"]))
			$result["error_email"] = _msg_invalid_data_email;
		if($_POST["message"]=="" || $_POST["message"]==_def_message)
			$result["error_message"] = _msg_invalid_data_message;
		$result['post'] = $_POST;
	}
	echo @json_encode($result);
	exit();
}else{
    echo 'no post action';
}