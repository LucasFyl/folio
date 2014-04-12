<?php

$form = new contactform(array(
  'to'       => 'Me <lucas.fayolle@orange.fr>',
  'from'     => 'Contact Form <contact@lucasfayolle.com>',
  'subject'  => 'New contact form request',
  'goto'     => $page->url() . 'thanks'
));

?>

  <?php if(param('status') == 'thank-you'): ?>
  <div class="thanks">
    <h1>Thank you very much for your request</h1>
    <p class="contactform-text">I will get in touch as soon as possible</p>
  </div>
  <?php else: ?>

<section class="form-wrap" id="contactform">
  <form action="" method="post">
    <fieldset>
    
      <?php if($form->isError('send')): ?>
      <div class="contactform-alert">The email could not be sent. Please try again later.</div>
      <?php elseif($form->isError()): ?>
      <div class="contactform-alert">The form could not be submitted. Please fill in all fields correctly.</div>
      <?php endif ?>
  
        <label class="contactform-label" for="contactform-name">Name <?php if($form->isRequired('name')) echo '' ?> 
          <?php if($form->isError('name')): ?>
              <small>Please enter a name</small>
          <?php endif ?>
        </label>
        <input class="contactform-input full" type="text" id="contactform-name" name="name" value="<?php echo $form->htmlValue('name') ?>" placeholder="name"/>
  
        <label class="contactform-label" for="contactform-email">Email address <?php if($form->isRequired('email')) echo '' ?> <?php if($form->isError('email')): ?><small>Please enter a valid email address</small><?php endif ?></label>
        <input class="contactform-input half" type="text" placeholder="email" id="contactform-email" name="email" value="<?php echo $form->htmlValue('email') ?>" />
        <input class="contactform-input half" type="text" placeholder="phone number" id="contactform-email" name="telephone" value="" />
  
        <label class="contactform-label" for="contactform-text">Message <?php if($form->isRequired('text')) echo '' ?> <?php if($form->isError('text')): ?><small>Please enter your text</small><?php endif ?></label>
        <textarea class="contactform-input" name="text" id="contactform-text" ><?php echo $form->htmlValue('text') ?></textarea>
        
        <input class="contactform-button" type="submit" name="submit" value="Send" id="send"/>
        <p>If you prefer, you can <a href="mailto:lucas.fayolle@orange.fr?subject=We have an internship for you!" style="color:#fff;">email me</a>.</p>
    
    </fieldset>
  </form>
  
  <?php endif ?>

</section>