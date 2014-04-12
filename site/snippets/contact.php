<?php
$validators = array(
	'name' => array(
		'required' => true
	),
	'email' => array(
		'required' => true
	),
	'message' => array(
		'required' => true
	),
);

$errors = array();
$result = false;

if(!empty($_POST)) {
	foreach($validators as $field => $validator) {
		if($validator['required'] && (!isset($_POST[$field]) || empty($_POST[$field]))) {
			$errors[$field] = 'Your ' . $field . ' is required..!';
		}
	}
	
	if(empty($errors)) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$to = 'lfayolle1@gmail.com';
		$subject = 'Hi there!';
		$content= '
		<html>
	      	<head>
	      		<title>' . $subject . '</title>
	      	</head>
	      	<body>
	      		<strong>From: </strong>' . $name . ' <' . $email .'>
	      		<br /><br /><strong>Message: </strong>' . $message . '
	      	</body>
	     </html>
	    ';
	    
		
		$mailheader = 'MIME-Version: 1.0' . "\r\n";
	    $mailheader .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	    $mailheader .= 'From:' . $email . "\r\n";
	

		mail($to, $subject, $content, $mailheader) or die('Error!');
		$result = true;
		echo $result;
	}
}

?>


<section class="wrapper-contact">
	<?php if(isset($result) && $result): ?>
		<div class="success">
			<h3 style="text-align:center;margin:70px auto;display:block;" >Thank you for contacting me, I will get back to you very soon!</h3>
		</div>
	<?php endif; ?>
	
	<?php if(!empty($errors)): ?>
		<ul class="error">
			<li><h3>Oops!</h3></li>
			<?php foreach($errors as $field => $error): ?>
			<li><?php echo $error ?></li>
			<?php endforeach; ?>
			<li><a href="#" class="modify">Click here to modify your message</a></li>
		</ul>
	<?php endif; ?>
		
	<?php if(!$result): ?>
        <div class="form-wrap">
            <form action="" method="post">
                <fieldset>
                    <input class="contactform-input full" type="text" id="name" name="name" value="<?php if (isset($_POST['name'])) echo $_POST['name'] ?>" placeholder="name"/>
                    <input class="contactform-input half" type="text" id="email" name="email" value="<?php if (isset($_POST['email'])) echo $_POST['email'] ?>" placeholder="e-mail"/>
                    <input class="contactform-input half" type="text" id="phone" name="telephone" value="" placeholder="phone number"/>
                    <textarea class="contactform-input" name="message" id="message" placeholder="Hi Lucas,"><?php if (isset($_POST['message'])) echo $_POST['message'] ?></textarea>
                    <button class="contactform-button" type="submit" name="submit" value="Send" id="send" />SEND</button>
                </fieldset>
				<p>If you prefer, you can <a href="mailto:lucas.fayolle@orange.fr?subject=We have an internship for you!" style="color:#fff;">email me</a>.</p>
            </form>
        </div>
	<?php endif;?>

<!-- 		<form method="post" action="">
			<p>Here's a form to get in touch with me! I am looking for projects as well as an internship (july/august 2013) in Web Development.</p>
			<fieldset>
				<label for="name">Your name:</label>
				<input type="text" name="name" id="name" value="<?php if (isset($_POST['name'])) echo $_POST['name'] ?>" />
				<label for="email">Your e-mail:</label>
				<input type="email" name="email" id="email" value="<?php if (isset($_POST['email'])) echo $_POST['email'] ?>" />							
				<label for="message">Your message:</label>
				<textarea name="message" id="message" cols="2" rows="6"><?php if (isset($_POST['message'])) echo $_POST['message'] ?></textarea>
				<button type="submit" name="submit" class="submit">Send!</button>
			</fieldset>
			<p>If you prefer, you can <a href="mailto:laure@boutmy.com?subject=We have an internship for you!">email me</a>.</p>
		</form> -->
	
		
	<?php //$contact = $pages->find('contact'); ?>
	<?php //echo $contact->url() ?>
</section><!-- section.wrapper-contact -->