<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="description" content="Lucas Fayolle, junior front-end developer/ux designer, Paris Fr.">  
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <?php echo css('assets/styles/avenirFF.css') ?>
        <?php echo css('assets/styles/mfglabs_iconset.css') ?>
        <?php echo css('assets/styles/main.css') ?>
        <link rel="canonical" href="http://lucasfayolle.com/" />
    </head>
    
    <body> 
    
        <div id="loadBar" class="singleWork"></div> 

        <div id="work-single">
            <?php if($page->hasPrev() == true): ?>
                <a href="<?php echo $page->prev()->url() ?>" id="prev"><i class="icon-chevron_left"></i> </a>
            <?php endif; ?>
            <?php if($page->hasPrev() == false): ?>
                <a href="#" id="prev" style="opacity:0.3;"><i class="icon-chevron_left"></i> </a>
            <?php endif; ?>

            <?php if($page->hasNext() == true): ?>
                <a href="<?php echo $page->next()->url() ?>" id="next"><i class="icon-chevron_right"></i> </a>
            <?php endif; ?>
            <?php if($page->hasNext() == false): ?>
                <a href="#" id="next" style="opacity:0.3;"><i class="icon-chevron_right"></i> </a>
            <?php endif; ?>

            <div class="text-wrap">
                <h1><?php echo html($page->title()) ?> </h1>
                <div class="bar"></div>
                <?php echo kirbytext($page->role()) ?>
                <?php echo kirbytext($page->cat()) ?>
                <?php echo kirbytext($page->year()) ?>   
            </div>

            <a href="./" class="back"><i class="icon-cross_mark"></i></a>

            <div class="img-wrap">
                <?php foreach($page->images()->slice(2) as $image): ?>
                <img src="<?php echo $image->url() ?>" alt="<?php echo html($page->title()) ?>" />
                <?php endforeach ?>
            </div>

            <div id="read-more">
                <a href="#" class="read-more"><i class="icon-chevron_up"></i></a>
                <div class="coworkers">
                    <h3>Coworkers:</h3>
                    <ul>
                        <?php if ( $page->coworker1() == true ): ?>
                        <li><?php echo kirbytext($page->coworker1()) ?></li>
                        <?php endif; ?>
                        <?php if ( $page->coworker2() == true ): ?>
                        <li><?php echo kirbytext($page->coworker2()) ?></li>
                        <?php endif; ?>
                        <?php if ( $page->coworker3() == true ): ?>
                        <li><?php echo kirbytext($page->coworker3()) ?></li>
                        <?php endif; ?>
                        <?php if ( $page->coworker4() == true ): ?>
                        <li><?php echo kirbytext($page->coworker4()) ?></li>
                        <?php endif; ?>

                        <?php if ( $page->coworker5() == true ): ?>
                        <li><?php echo kirbytext($page->coworker5()) ?></li>
                        <?php endif; ?>
                    </ul>   
                <a href="<?php echo $page->link() ?>" class="link" target="_blank">visit website</a>
                </div>
                <h3>About the project:</h3>
                <?php echo kirbytext($page->about()) ?>
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
        <?php echo js('assets/js/scripts/dots.js') ?>
        <?php echo js('assets/js/vendor/navigation.js') ?>
        <?php echo js('assets/js/main.js') ?>

        <script>
            var compteur = 1;
            //var links = $('a#prev, a#next');
            // $('#work-single').on("click", links, function(){
            //     TweenLite.to('#work-single', 1, {opacity:0, ease:Power2.easeInOut});
            // })            
            $(document).ready(function(){
                TweenLite.to('#loadBar', 0.55, {width:'100%',ease:Power4.easeInOut,delay:0.25});
                TweenLite.from('#work-single', 0.8, {opacity:0, ease:Power2.easeInOut,delay:1});
                TweenLite.from('#work-single .img-wrap', 1, {opacity:0, top:50, ease:Power2.easeOut,delay:2});
                TweenLite.to('#work-single img', 0, {opacity:0.1,delay:2.1});
                TweenLite.to('#work-single img.top', 0, {opacity:1,delay:2.15});
            });
        </script>
        
       

    </body>
</html>
