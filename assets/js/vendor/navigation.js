var navigation = {
	
	params: {
		animationDone: function(){},
	},

	init: function(options){
		this.prop = $.extend(this.params, options); // fusion du params ligne 2, et de l'objet transmis options
	},

	leaveAbout: function(destination){
		console.log('leaveAbout');
		var leaveAbout = new TimelineLite(),
	    			e1 = $('#about .about-wrap h1'),
					e2 = $('#about .about-wrap p.en'),
					e3 = $('#about .about-wrap p.fr');

		leaveAbout.to('#dotstyle li:nth-child(1)', 0.25, {className:"-=current"})
				  .to('#about', 0, {className:'-=view'})
  				  .staggerTo([e1,e2,e3], 0.5, {transform:'translateY(-800px)',opacity:0,ease:Power3.easeIn}, 0.2)
   	   	    	  	  .to('#dotstyle li:nth-child(1)', 0.25, {className:"-=current"}, '-=0.2')
				  .to('#sidebar', 0.5, {left:"-100%",ease:Power3.easeInOut}, "-=0.2")
				  .to('#about i', 0.5, {opacity: 0,transform:"translateY(20px)",ease:Power3.easeOut})
		   	        .to('#about', 0, {display:'none'})
  				  .to([e1,e2,e3], 0, {transform:'translateY(0px)',opacity:1});
    	leaveAbout.play();
		
		setTimeout(function() {
			navigation.prop.animationDone.call(this, destination);
		}, 1300); 
	},
	leaveWork: function(destination){
		console.log('leaveWork');
		var leaveWork = new TimelineLite();

		leaveWork.to('#dotstyle li:nth-child(2)', 0.25, {className:"-=current"})
				    .to('#work', 0, {className:'-=view'})
			          .staggerTo('#work ul li', 0.3, {opacity:0,transform:"translateY(50px)",ease:Power2.easeIn}, 0.1)
		                .to('#sidebar', 0.25, {left:"-100%",ease:Power3.easeInOut})
		         	    .to('#work', 0.5, {opacity:0, ease:Power3.easeIn})
	         		    .to('#sidebar', 0, {className:"-=solid",width:80})
	         		    .to('#work', 0, {display:'none'});
		leaveWork.play();

		setTimeout(function() {
			navigation.prop.animationDone.call(this, destination);
		}, 1300); 
	},
	leaveContact: function(destination){
		console.log('leaveContact');
		var leaveContact = new TimelineLite(),
	    			e1 = $('#contact h2'),
					e2 = $('#contact p'),
					e3 = $('#contact a#read-more');

		leaveContact.to('#dotstyle li:nth-child(3)', 0.25, {className:"-=current"})
					  .to('#contact', 0, {className:'-=view'})
				        .staggerTo([e1,e2], 0.5, {transform:'translateY(-800px)',opacity:0,ease:Power3.easeIn}, 0.2)
 				        .to('#contact #read-more', 0.25, {top:'110%',ease:Power2.easeOut}, "-=0.25")
 				        .to('#contact .right-here', 0.25, {opacity:0,ease:Power2.easeOut}, "-=0.25")
				        .to('#sidebar', 0.5, {left:"-100%",ease:Power3.easeInOut}, "-=0.2")
				        .to(e3, 0.5, {opacity: 0,transform:"translateY(20px)",ease:Power3.easeOut})
		   	              .to('#contact', 0, {display:'none'})
    	leaveContact.play();
		
		setTimeout(function() {
			navigation.prop.animationDone.call(this, destination);
		}, 1300); 
	},

	showAbout: function(){
		console.log("showAbout");
		var showAbout = new TimelineLite();

		showAbout.add( TweenLite.set('#sidebar', {opacity:1}) );
		showAbout.add( TweenLite.set('#about, #about h1, #about p', {display:"block", opacity:1, transform:"translateY(0px)"}) );
		showAbout.to('#work, #contact', 0, {display:"none"})
				 .to('#about', 0, {className:"+=view",display:'block'})
			     .staggerFrom('#about h1, #about p', 0.5, {opacity: 0,transform:"translateY(10px)",ease:Power1.easeInOut}, 0.1)
		         .to('#about i', 0.5, {opacity: 1,ease:Power0.easeOut})
		         .to('#about i', 0.5, {transform:"translateY(0px)",ease:Power0.easeOut})
				 .to('#sidebar', 0.5, {left:"0",ease:Power3.easeInOut}, "-=0.2")
		         .staggerFrom('#dotstyle li', 0.75, {scaleY:0.3,scaleX:0.3,opacity:0,ease:Power3.easeInOut}, 0.2, "-=0.5"); 
		showAbout.play();
	},
	showWork: function(){
		console.log("showWork");
		var showWork = new TimelineLite();

		showWork.add( TweenLite.set('#work', {display:'block',opacity:0}) );
		showWork.add( TweenLite.set(['#work ul li'], {opacity:0,transform:"translateX(50px)"}) );
		showWork.to('#about, #contact', 0, {display:"none"})
				.to('#work', 0, {className:"+=view",display:'block'})
		   	    .to('#sidebar', 0, {className:"+=solid"})
		   	    .to('#work', 0.5, {opacity:1,ease:Power3.easeIn})
		   	    .to('#sidebar', 0.35, {left:0,ease:Power3.easeOut}, "+=0.25")
		   	    .staggerTo('#work ul li', 0.5, {opacity:1,ease:Power2.easeOut,transform:"translateX(0px)"}, 0.15, "+=0.25")
		showWork.play();
	},
	showContact: function(){
		console.log("showContact");
		var showContact = new TimelineLite;

		showContact.add( TweenLite.set('#contact h2, #contact p', {transform:"translateY(-100%)", opacity:0}) );
		showContact.add( TweenLite.set('#sidebar, #contact .right-here', {opacity:0}) );
		showContact.add( TweenLite.set('#contact', {display:'block'}) );
		showContact.add( TweenLite.set('#contact #read-more', {top:'120%'}) );
		showContact.to('#work, #about', 0, {display:"none"})
					  .to('#contact', 0, {className:"+=view",display:'block'})
					  .to('#contact', 0.25, {display:'block',opacity:1,ease:Power3.easeInOut,className:"-=hidden"})
					  .to('#contact #read-more', 0.25, {opacity: 1,top:'100%',ease:Power2.easeOut})
					  .staggerTo('#contact h2, #contact p', 0.5, {opacity:1,transform:"translateY(0)",ease:Power2.easeOut}, 0.1)
					  .to('#sidebar', 0.25, {left:0,opacity:1,ease:Power2.easeOut})
					  .staggerFrom('#dotstyle li', 0.75, {scaleY:0.3,scaleX:0.3,opacity:0,ease:Power3.easeInOut}, 0.4, "-=0.5")
					  .to('#contact .right-here', 0.5, {opacity:1,ease:Power2.easeOut}); 
		showContact.play();
	}

}