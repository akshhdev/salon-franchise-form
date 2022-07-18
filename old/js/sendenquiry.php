<?php
//ini_set('display_errors', 'On'); error_reporting(E_ALL);
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
$mailer = new PHPMailer\PHPMailer();
$mailer->isSMTP();
$mailer->SMTPDebug = 4;
$mailer->SMTPAuth = true;
$mailer->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mailer->IsHtml(true);
/*$mailer->Host = "smtp.gmail.com";
$mailer->SMTPSecure = "ssl";
$mailer->Port = 465;
$mailer->From = "salonappleinfo@gmail.com";
$mailer->Username = 'salonappleinfo@gmail.com';
$mailer->Password = '#SalonAppleVaibhav';*/
$mailer->Host = "sg2plcpnl0233.prod.sin2.secureserver.net";
$mailer->SMTPSecure = "ssl";
$mailer->Port = 465;
$mailer->From = "infos@cubdesign.co";
$mailer->FromName = "Apple Salon";
$mailer->Username = 'infos@cubdesign.co';
$mailer->Password = 'p+^yYJx1PZ]q';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<title>Salon Apple</title>
		<script>
		function redirectPage(){
			window.location='../thanks.html';
		}
		</script>
	</head>
	<body topmargin="5" bottommargin="5" onload="redirectPage()">
		<table width="900" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#FFFFFF">
			<tr>
				<td>
					<?php
					
                    $Name = $_REQUEST['name'];
                    $Mobile = $_REQUEST['mobile'];
                    $Email = $_REQUEST['email'];
                    $Address = $_REQUEST['address'];
                    $Date  = $_REQUEST['date'];
                    $Business  = $_REQUEST['business'];
                    $Nature  = $_REQUEST['nature'];
                    $Employee   = $_REQUEST['employee'];
                    $Work   = $_REQUEST['work'];
                    $Investment  = $_REQUEST['investment'];
                    $Financing  = $_REQUEST['financing'];
                    $Location  = $_REQUEST['location'];
                    $Commercial  = $_REQUEST['commercial'];
                    $About  = $_REQUEST['about'];
                    $Declare  = $_REQUEST['declare'];


						//$mailer->addAddress($Email, $Name);
						// $mailer->addAddress('info@salonapple.in', 'salonapple');
						// $mailer->addAddress('uday@mantramedia.in', 'mantramedia');
						// $mailer->addAddress('prachichopade1991@gmail.com', 'prachichopade');
						// $mailer->addAddress('cd@cubdesign.co', 'cubdesign');
						// $mailer->addAddress('cs@cubdesign.co', 'cubdesign');
						$mailer->addAddress('anil.paigude@gmail.com', 'anilpaigude');
						$mailer->Subject = 'Franchise Enquiry - ';
						$body="<font face='Arial' style='font-size: 10pt' color='#333333'>
							Name   														= " . $Name.  "			<br>
							Phone No.	 												= " . $Mobile. " 		<br>
							Email Id  													= " . $Email. "			<br>
							City	 													= " . $Address. " 			<br>
							Date Of Birth												= " . $Date. " 			<br>
							Do you own a business ? 									= " . $Business. " 			<br>
							If Yes, what is the nature of your business?	 			= " . $Nature. " 				<br>
							Are you employed ?	 										= " . $Employee. " 		<br>
							If Yes, what is the nature of your work?	 				= " . $Work. " 			<br>
							Investment Capacity	 										= " . $Investment. " 			<br>
							Do you have financing sources ?	 							= " . $Financing. " 			<br>
							The location where you wish to open Franchise 				= " . $Location. " 			<br>
							Do you own any commercial space ?  							= " . $Commercial. " 		<br>
							How did you hear about us ? 								= " . $About. " 		<br>
							Declaration 												= " . $Declare. " 		<br>



							</font>" ;
						//$mailer->MsgHTML($body);
						$mailer->Body = $body;
						//var_dump($mailer->send());die;
						if (!$mailer->send()) {
						  //echo "Mailer Error: " . $mailer->ErrorInfo; die;
						} else {
						   echo "Message sent!";
						}
					?>
				</td>
			</tr>
		</table>
	</body>
</html>