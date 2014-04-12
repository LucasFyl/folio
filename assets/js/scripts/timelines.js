
	var goAbout = new TimelineLite(),	
	    goWork = new TimelineLite(),	
	    goContact = new TimelineLite(),
	    leaveAbout = new TimelineLite(),	
	    leaveWork = new TimelineLite(),	
	    leaveContact = new TimelineLite(),
	    e1 = $('#about .about-wrap h1'),
		e2 = $('#about .about-wrap p.en'),
		e3 = $('#about .about-wrap p.fr');	

	goAbout.add( TweenLite.set('#sidebar', {opacity:1}) );
	goAbout.to('#about', 0, {className:"+=view"})
		   .staggerFrom('#about h1, #about p', 0.5, {opacity: 0,transform:"translateY(10px)",ease:Power1.easeInOut}, 0.1)
	       .to('#about i', 0.5, {opacity: 1,ease:Power0.easeOut})
	       .to('#about i', 0.5, {transform:"translateY(0px)",ease:Power0.easeOut})
	       .staggerFrom('#dotstyle li', 0.75, {scaleY:0.3,scaleX:0.3,opacity:0,ease:Power3.easeInOut}, 0.2, "-=0.5"); 
	goAbout.pause();

	goWork.add( TweenLite.set('#work', {display:'block',opacity:0}) );
	goWork.add( TweenLite.set(['#work ul li'], {opacity:0,transform:"translateX(50px)"}) );
	goWork.add( TweenLite.set('#work #gallery', {transform:"translateX(0px)"}) );
	goWork.to('#work', 0, {className:"+=view"})
	   	  .to('#sidebar', 0, {className:"+=solid"})
	   	  .to('#work', 0.5, {opacity:1,ease:Power3.easeIn})
	   	  .to('#dotstyle li:nth-child(1)', 0, {className:"-=current"})
	   	  .to('#dotstyle li:nth-child(2)', 0, {className:"+=current"})
	   	  .staggerTo('#work ul li', 0.5, {opacity:1,ease:Power2.easeOut,transform:"translateX(0px)"}, 0.15, "+=0.25")
	   	  .to('#work #gallery', 0.35, {transform:"translateX(+80px)",ease:Power3.easeOut}, "-=1")
	   	  .to('#sidebar', 0.35, {left:0,ease:Power3.easeOut}, "-=1.27");
	goWork.pause();

	goContact.add( TweenLite.set('#contact h1, #contact p', {transform:"translateY(50px)", opacity:0}) );
	goContact.add( TweenLite.set('#contact #read-more', {transform:"translateY(100px)"}) );
	goContact.to('#contact', 0, {className:"+=view"})
			 .to('#contact', 0.25, {display:'block',opacity:1,ease:Power3.easeInOut,className:"-=hidden"})
			 .to('#sidebar', 0, {left:0,ease:Power3.easeOut})
			 .staggerTo('#contact h1, #contact p', 0.5, {opacity:1,transform:"translateY(0px)",ease:Power2.easeOut}, 0.1)
			 .to('#contact #read-more', 0.25, {opacity: 1,transform:"translateY(0px)",ease:Power2.easeOut})
			 .to('#dotstyle li:nth-child(2)', 0, {className:"-=current"})
			 .to('#dotstyle li:nth-child(3)', 0, {className:"+=current"})
			 .staggerFrom('#dotstyle li', 0.75, {scaleY:0.3,scaleX:0.3,opacity:0,ease:Power3.easeInOut}, 0.4, "-=0.5"); 
	goContact.pause();

	leaveAbout.to('#about', 0, {className:'-=view'})
			  .staggerTo([e1,e2,e3], 0.5, {transform:'translateY(-800px)',opacity:0,ease:Power3.easeIn}, 0.2)
			  .to('#sidebar', 0.5, {left:"-100%",ease:Power3.easeInOut}, "-=0.2")
			  .to('#about i', 0.5, {opacity: 0,transform:"translateY(20px)",ease:Power3.easeOut})
	   	      .to('#about', 0, {display:'none',className:"-=view"})
    leaveAbout.pause();

	leaveWork.to('#work', 0, {className:'-=view'})
			 .staggerTo('#work ul li', 0.3, {opacity:0,transform:"translateY(50px)",ease:Power2.easeIn}, 0.1)
		     .to('#sidebar.solid', 0.5, {left:"-100%",ease:Power3.easeInOut})
		     .to('#sidebar', 0, {className:"-=solid"})
		     .to('#work', 0.5, {opacity:0, ease:Power3.easeIn})
		     .to('#work', 0, {display:'none'})
	leaveWork.pause();

	leaveContact.to('#contact', 0, {className:'-=view'})
				.to('#sidebar', 0.25, {left:'-100%',ease:Power3.easeInOut})
	leaveContact.pause();
