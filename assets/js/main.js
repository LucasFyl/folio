$(document).ready(function(){

	// regle la taille peu importe fenetre
	contentSize();
	$(window).on('resize', contentSize);

	// Trigger home animation + landing page
	sayHello();
	// set sidebar inputs hidden at first
	TweenLite.set('#sidebar .filter-wrap select', {width:'0px'});

	// la petite fleche gigotte
	$('#home-wrap i, #about i').on({
	    mouseenter: function(){gigotte($(this));},
	    mouseleave: function(){stop();}
	});
	
	// Lance l'anim de fin de homepage
	$('#home-wrap i').on('click', endHome);

	// dot navigation with animations
	$('#dotstyle li a').on('click', wichNav);
	// icon chevron nav with anim
	$('#about').on('click', "a.arrow", arrowNav);

	// Inverse le scroll dans la section work
	$("#work").mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 50);
		event.preventDefault();
    });
	// hover effect pour les li de la workpage
	$('#work li a').on({
	    mouseenter: function(){
	    	var thisLi = $(this).parent('li'),
	    		bg = $(thisLi).find('img.bg.col');
	    	TweenLite.to(bg, 0.6, {opacity:1,ease:Power1.easeInOut});
	    },
	    mouseleave: function(){
	    	var thisLi = $(this).parent('li'),
	    		bg = $(thisLi).find('img.bg.col');
	    	TweenLite.to(bg, 0.6, {opacity:0,ease:Power1.easeInOut,delay:0.25});}
	});
	// function pour open la sidebar 
	$('#sidebar a.menu').on('click', openSidebar);
	
	// Gère les zindex pour les images de chaque project
    classImg();
    $('#work-single img').on('click', switchImg);

	// Trigger plus d'info sur single work
	$('#work-single').on('click', "a.read-more", readMore);
	$('#work-single').on('click', "a.active", readLess);

	// Affiche le form sur la page contact
	$('#contact').on('click', "a.read-more", showForm);
	$('#contact').on('click', "a.active", hideForm);

});


navigation.init({
	animationDone: function(destination){
		if(destination == 'about'){
			navigation.showAbout()
		} else if (destination == 'work') {
			navigation.showWork()
		} else if (destination == 'contact') {
			navigation.showContact()
		}
	}
});


function wichNav() {
	$(this).parent('li').addClass('current');
	var view = $('body').find('.view'),
		leaving = view.attr('id'),
		destination = $(this).attr('data'); 

	if (leaving == destination) {	
		TweenLite.to('#dotstyle', 0.25, {opacity:0,ease:Power2.easeOut});
		TweenLite.to('#dotstyle', 0.25, {opacity:1,ease:Power2.easeOut,delay:1});
	} else if (leaving == 'about') {
		navigation.leaveAbout(destination)
	} else if (leaving == 'work') {
		navigation.leaveWork(destination)
	} else if (leaving == 'contact') {
		navigation.leaveContact(destination)
	}
};

function arrowNav() {
	navigation.leaveAbout('work');
	TweenLite.to('#dotstyle li:nth-child(2)', 0, {className:"+=current"});
}

var pathBar = {
    "bar1": {
        "strokepath": [
            {
                "path": "M 0 0.5 L 50 0.5",
                "duration": 250
            }
        ],
        "dimensions": {
            "width": 50,
            "height": 1
        }
    }
}; 
var pathBar2 = {
    "bar2": {
        "strokepath": [
            {
                "path": "M 0 0.5 L 50 0.5",
                "duration": 250
            }
        ],
        "dimensions": {
            "width": 50,
            "height": 1
        }
    }
}; 

var pathHello = {
    "hello": {
		"strokepath": [
            {
                "path": "M22.465,42.129V27.328H8.664v14.801H0.113V6.727h8.551v13.401h13.801V6.727h8.55v35.402H22.465z",
                "duration": 300
            },
            {
                "path": "M38.85,42.295V6.893h23.802v7.25H47.1v6.65h14.701v6.852H47.1v7.35h16.451v7.301H38.85L38.85,42.295z",
                "duration": 300
            },
            {
                "path": "M71.128,42.129V6.727h8.601V34.68h13.7v7.449H71.128z",
                "duration": 300
            },
            {
                "path": "M100.665,42.129V6.727h8.601V34.68h13.7v7.449H100.665z",
                "duration": 300
            },
            {
                "path": "M146.475,43.08c-11.051,0-19.251-7.602-19.251-18.802c0-11.351,8.2-18.501,19.251-18.501   c11.103,0,19.304,7.15,19.304,18.501C165.778,35.479,157.576,43.08,146.475,43.08z M146.475,13.478   c-6,0-10.101,4.601-10.101,10.801c0,6.401,4.15,11.001,10.101,11.001c5.951,0,10.151-4.6,10.151-11.001   C156.627,18.078,152.476,13.478,146.475,13.478z",
                "duration": 300
            }
        ],
        "dimensions": {
            "width": 169,
            "height": 49
        }
    }
}; 


function contentSize() {
	var $window = $(window);
	$('#home-wrap').width($window.width() - 20).height($window.height() - 20);
	$('#animation-wrap').width($window.width()).height($window.height());
	$('#about').width($window.width()).height($window.height());
	$('#work').width($window.width()).height($window.height());
	$('#work-single').width($window.width() - 20).height($window.height() - 20);
	$('#contact').width($window.width()).height($window.height());
}

function sayHello() {
	$('#hello').lazylinepainter({
	    "svgData": pathHello,
	    "strokeWidth": 1,
	    "strokeColor": "#fff",
	    "onComplete": drawBars
	}).lazylinepainter('paint'); 
}
function drawBars() {
	drawBar1();
	drawBar2();
}
function drawBar1() {
	$('#bar1').lazylinepainter({
	    "svgData": pathBar,
	    "strokeWidth": 3,
	    "strokeColor": "#fff"
	}).lazylinepainter('paint');
}
function drawBar2(){
	$('#bar2').lazylinepainter({
	    "svgData": pathBar2,
	    "strokeWidth": 3,
	    "strokeColor": "#fff",
	    "onComplete": endIntro
	}).lazylinepainter('paint'); 
}
function endIntro() {
	var endIntro = new TimelineLite();
		endIntro.to('#animation-wrap', 1, {opacity:0, display:'none', ease:Power2.easeIn})
				.from('#home-wrap h2', 0.5, {opacity:0, transform:"translateY(10px)", ease:Power2.easeOut})
				.from('#home-wrap i', 0.5, {opacity:0, transform:"translateY(10px)", ease:Power2.easeOut}, '+=0.2')
				.to('#animation-wrap', 0, {className:"-=view"})
				.to('#home-wrap', 0, {className:"+=view"});
	
}

function endHome(e) {
	e.preventDefault;
	var endHomeAnim = new TimelineLite(),
		element = $('#about h1, #about p'),
		navItem = $('#dotstyle li');
	// Annule les effets des precedentes anims
	TweenLite.set('#sidebar', {opacity:1});

	endHomeAnim.to('#home-wrap .bar1', 0.25, {transform:"translateX(-1000px)",ease:Power4.easeIn})
		       .to('#home-wrap .bar2', 0.25, {transform:"translateX(1000px)",ease:Power4.easeIn}, '-=0.25')
		       .to('#home-wrap h1', 0.25, {transform:"translateY(-800%)",opacity:0,ease:Power4.easeIn})
		       .to('#home-wrap h2', 0.25, {transform:"translateY(-400%)",opacity:0,ease:Power4.easeIn})
		       .to('#home-wrap i', 0.25, {transform:"translateY(400)",opacity:0,ease:Power4.easeIn}, '-=0.25')
		       .to('#home-wrap', 0.5, {scaleX:1.2,scaleY:1.2,display:'none',ease:Power1.easeInOut}, '+=0.25')
		       .staggerFrom('#about h1, #about p', 0.5, {opacity: 0,transform:"translateY(10px)",ease:Power1.easeInOut}, 0.1)
		       .to('#home-wrap', 0, {className:"-=view"})
			   .to('#about', 0, {className:"+=view"})
		       .to('#about i', 0.5, {opacity: 1,ease:Power0.easeOut})
		       .to('#about i', 0.5, {transform:"translateY(0px)",ease:Power0.easeOut})
		       .staggerFrom(navItem, 0.75, {scaleY:0.3,scaleX:0.3,opacity:0,ease:Power3.easeInOut}, 0.2, "-=0.5"); 
}

function openSidebar(e) {
	e.preventDefault;
	if($('#sidebar').width() == 80) {
		TweenLite.to('#sidebar', 0.25, {width:'300px',ease:Power4.easeInOut});
		TweenLite.to('#sidebar .menu i', 0, {className:"-icon-reorder",className:"icon-cross_mark"});
		TweenLite.to('#work ul', 0.25, {left:"+=220",ease:Power4.easeInOut});
		TweenLite.to('#sidebar .filter-wrap select', 0.25, {opacity:1, display:'block',width:'240px',ease:Power4.easeInOut});
	} else {
		TweenLite.to('#sidebar', 0.25, {width:'80px',ease:Power4.easeInOut});
		TweenLite.to('#sidebar .menu i', 0, {className:"-icon-cross_mark",className:"icon-reorder"});
		TweenLite.to('#work ul', 0.25, {left:"-=220",ease:Power4.easeInOut});
		TweenLite.to('#sidebar .filter-wrap select', 0.25, {opacity:0, display:'none',width:'0px',ease:Power4.easeInOut});
	}
}

function gigotte(_this) {
	var element = _this;
	var gigotte = new TimelineLite();
		gigotte.to(element, 0.2, {transform:"translateY(-3px)",ease:Power1.easeOut})
			   .to(element, 0.2, {transform:"translateY(0px)",ease:Power1.easeOut})
			   .to(element, 0.2, {transform:"translateY(3px)",ease:Power1.easeOut})
			   .to(element, 0.2, {transform:"translateY(0px)",ease:Power1.easeOut});
	gigotte.restart();
}

function showForm(e) {
	e.preventDefault();
	TweenLite.to('#read-more a.read-more',0, {className:'+=active'});
	TweenLite.to('#read-more', 0.25, {top:"39%",ease:Power3.easeOut});
	TweenLite.to('#read-more a.read-more i', 0, {className:'-icon-chevron_up',className:'icon-chevron_down'});

	// TweenLite.set('.form-wrap input', {width:'1px'});
	// TweenLite.to('.form-wrap input.half', 0.25, {width:'48%',delay:0.3});
	// TweenLite.to('.form-wrap input.full', 0.25, {width:'100%',delay:0.3});
}

function hideForm(e) {
	e.preventDefault();
	TweenLite.to('#read-more a.read-more',0, {className:'-=active'});
	TweenLite.to('#read-more', 0.25, {top:"100%",ease:Power3.easeOut});
	TweenLite.to('#read-more a.read-more i', 0, {className:'-icon-chevron_down',className:'icon-chevron_up'});
}

function readMore(e) {
	e.preventDefault();
	TweenLite.to('#work-single .img-wrap', 0.25, {opacity:0,ease:Power3.easeOut});
	TweenLite.to('#read-more a.read-more',0, {className:'+=active'});
	TweenLite.to('#read-more', 0.25, {top:"48%",ease:Power3.easeOut});
	TweenLite.to('#read-more a.read-more i', 0, {className:'-icon-chevron_up',className:'icon-chevron_down'});
}
function readLess(e) {
	e.preventDefault();
	TweenLite.to('#work-single .img-wrap', 0.25, {opacity:1,ease:Power3.easeOut});
	TweenLite.to('#read-more a.read-more',0, {className:'-=active'});
	TweenLite.to('#read-more', 0.25, {top:"100%",ease:Power3.easeOut});
	TweenLite.to('#read-more a.read-more i', 0, {className:'-icon-chevron_down',className:'icon-chevron_up'});
}

function switchImg() {
    var images = $('#work-single .img-wrap img');
    if (compteur < images.length) {
        images.removeClass('top');
        images.eq(compteur).addClass('top');
        compteur++;
    } else {
        images.removeClass('top');
        images.eq(0).addClass('top');
        compteur = 1;
    }
}
function classImg() {
	var images = $('#work-single .img-wrap img');
	images.eq(0).addClass('top');
}

function filters() {
	var cat = $('body').find('p.cat'),
		catName = cat.text();
	console.log(catName);
	// if( catName == 'UX / Interaction Design,APIs / jQuery.' ) {
	// 	$(this).parent('li').remove();
	// 	console.log('1');
	// }
}

	


