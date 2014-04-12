<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Lucas Fayolle</title>
        <meta name="description" content="Lucas Fayolle, junior front-end developer/ux designer">  
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <?php echo css('assets/styles/avenirFF.css') ?>
        <?php echo css('assets/styles/mfglabs_iconset.css') ?>
        <?php echo css('assets/styles/main.css') ?>
        <link rel="canonical" href="http://lucasfayolle.com/" />

    </head>
    
    <body> 
     
        <div id="sidebar">
            <a href="#" class="menu"><i class="icon-reorder"></i></a>

            <div class="filter-wrap">
                <select name="type" id="type">
                    <option value="front-end developement"></option>
                    <option value="UI/UX design"></option>
                    <option value="JS, jQuery"></option>
                    <option value="Graphic design/illustration"></option>
                </select>

                <select name="category" id="category">
                    <option value="professional project"></option>
                    <option value="school project"></option>
                    <option value="personnal project"></option>
                </select>
            </div>

            <div id="dotstyle">
                <ul>
                    <li class="current"><a href="#" data="about">about</a></li>
                    <li><a href="#" data="work">work</a></li>
                    <li><a href="#" data="contact">contact</a></li>
                </ul>
            </div>
        </div>
        
        <div id="animation-wrap" class="view">
            <div id="loadBar"></div>

        	<div class="bar bar1" id="bar1"></div>
        	<div class="bar bar2" id="bar2"></div>
            <div id="hello"></div>
        </div>

        <div id="home-wrap">
        	<div class="bar bar1" ></div>
        	<div class="bar bar2"></div>
            <h1>hello</h1>
            <h2>My name is Lucas Fayolle and this is my personal portfolio.</h2>
            <a href="#" class="arrow"><i class="icon-chevron_down"></i></a>
            
        </div>

        <div id="about">
            <div class="about-wrap">
                <h1>junior front-end developer/ux designer</h1>
                <p class="en">Originally from Paris, where I have lived for 20 years, I am currently in my third year at HETIC, a renowned French web-school where I study all the areas necessary to make a difference on the Internet: web development, graphic design and marketing. These classes give me the tools to do business in tomorow's world. I also have a great thirst for knowledge and a lively curiosity! I am currently looking for an internship for this summer: feel free to take a look at my latest projects and to get in touch for anything.</p>
                <!-- <p class="fr">Originaire de Paris, où je réside depuis 20 ans, je suis actuellement étudiant en troisième année à HÉTIC, la grande école de l’internet. J’y étudie les multiples technologies liées au web, ainsi que le design graphique ou encore le marketing. Autant de domaines qui me forment à avoir les outils nécéssaires pour entreprendre dans le monde de demain. J’ai une grande soif d’apprendre et une curiosité toujours en éveil ! Je suis actuellement à la recherche d'un stage pour cet été: n’hésitez pas à jeter un oeil à mes dernières réalisations et à utiliser le formulaire pour me contacter.</p> -->
            </div>
            
            <a href="#" class="arrow"><i class="icon-chevron_down"></i></a>
            
        </div>

        <div id="work">
            <ul id="gallery">

                <?php foreach($pages->find('projects')->children()->visible() as $wo): ?>
                    <?php $image = $wo->images()->find('01-preview.jpg');
                          $imagenb = $wo->images()->find('02-previewnb.jpg'); ?>
                    <li >
                        <a href="<?php echo $wo->url() ?>">
                            <div id="infos">
                                <h4 class="title"><?php echo html($wo->title()); ?></h4>
                                <span class="sep"></span>
                                <p class="cat"><?php echo html($wo->tag1()); ?></p>
                                <p class="cat"><?php echo html($wo->tag2()); ?></p>
                            </div>
                        </a>
                        
                        <img class="bg col" src="<?php echo $image->url() ?>" alt="<?php echo html($wo->title()); ?>" />
                        <img class="bg nb" src="<?php echo $imagenb->url() ?>" alt="<?php echo html($wo->title()); ?>" />
                    </li>
                <?php endforeach; ?>
                    
            </ul>
        </div>

        <div id="contact" class="hidden">
            
            <div class="contact-wrap">
                <h2>get in touch</h2>
                <p class="class">Please do not hesitate to contact me for anything. </br>I am currently available for free-lance work and looking for an internship abroad from July to October.</p>
            </div>
            
            <div id="read-more">
                <a href="#" class="read-more"><i class="icon-chevron_up"></i> </a>

                <?php snippet('contactform'); ?>

            </div>
            
        </div>

        <?php echo js('assets/js/vendor/modernizr-2.6.2.min.js') ?>
        <?php echo js('assets/js/vendor/jquery-1.9.1.min.js') ?>
        <?php echo js('assets/js/vendor/raphael-min.js') ?>
        <?php echo js('assets/js/scripts/jquery.lazylinepainter-1.4.1.min.js') ?>
        <?php echo js('assets/js/scripts/greensock/TweenLite.min.js') ?>
        <?php echo js('assets/js/scripts/greensock/TimelineLite.min.js') ?>
        <?php echo js('assets/js/scripts/greensock/EasePack.min.js') ?>
        <?php echo js('assets/js/scripts/greensock/CSSPlugin.min.js') ?>
        <?php echo js('assets/js/scripts/jquery.mousewheel.js') ?>
        <?php echo js('assets/js/vendor/navigation.js') ?>
        <?php echo js('assets/js/main.js') ?>

        <script>
            //set opaciy to hide on home + intro
            TweenLite.set('#sidebar', {opacity:0});
        </script>

        <script type="text/javascript">
          var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-40894794-1']);
          _gaq.push(['_trackPageview']);

          (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
        </script>
                

    </body>
</html>
