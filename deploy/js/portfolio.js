$('document').ready(function()
  {
  //Declare global variables
 var  homeCircle=$("#homeCircle"),
      aboutCircle=$("#aboutCircle"),
      contactCircle=$("#contactCircle"),
      algorithmLabel=$("#algorithmLabel"),
	  portLabel=$("#portfolioLabel"),
	  portBlurb=$("#portfolioBlurb")
	  miscCircle=$("#miscCircle"),
	  dealsCircle=$("#portfolioCircle1"),
	  iBoardCircle=$("#portfolioCircle2"),
	  payrollCircle=$("#portfolioCircle3"),
	  scannerCircle=$("#portfolioCircle4"),
	  databaseCircle=$("#portfolioCircle5"),
	  algorithmCircle=$("#portfolioCircle6"),
      backgroundWrap=$("#background-wrap"),
      footer		=$("footer"),
      body			=$("body"),
	  aboutmeLabel  =$("#aboutme"),
	  pictureHolder =$("#pictureHolder"),
	  blurb		    =$("#aboutmeBlurb"),
      theWindow     =$(window),
	  $bg			=$("#bg"),
	  aspectRatio   =$bg.width() / $bg.height(),
	  myWindowWidth = $(window).width(),
	  myWindowHeight= $(window).height();
	

 theWindow.bind("mousewheel", function() {
		 return false;
	 });
	 
 //the function will redirect the user to a different page
  function redirectMe(redirectPage)
  {
	window.location.href=redirectPage;	
  }
  
  //Get a reference to the previously defined redirectMe() function
  var refRedirectMe = redirectMe;
  
function homeCircleOnClick()
{
	homeCircle.click(function()
	{
		portLabel.add(pictureHolder)
		.add(portBlurb)
		.add(homeCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(contactCircle)
		.add(dealsCircle)
		.add(iBoardCircle)
		.add(payrollCircle)
		.add(scannerCircle)
		.add(databaseCircle)
		.add(algorithmCircle)
		.fadeOut(250,function()
		{
		current = 2;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../index.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of aboutCircle.click()	
}//End of function

function aboutCircleOnClick()
{
	aboutCircle.click(function()
	{
		portLabel.add(pictureHolder)
		.add(portBlurb)
		.add(homeCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(contactCircle)
		.add(dealsCircle)
		.add(iBoardCircle)
		.add(payrollCircle)
		.add(scannerCircle)
		.add(databaseCircle)
		.add(algorithmCircle)
		.fadeOut(250,function()
		{
		current = 3;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../aboutme/index.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of aboutCircle.click()	
}//End of function

function contactCircleOnClick()
{
	contactCircle.click(function()
	{
		portLabel.add(pictureHolder)
		.add(blurb)
		.add(homeCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(contactCircle)
		.add(dealsCircle)
		.add(iBoardCircle)
		.add(payrollCircle)
		.add(scannerCircle)
		.add(databaseCircle)
		.add(algorithmCircle)
		.fadeOut(250,function()
		{
		current = 0;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../contactme/index.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of aboutCircle.click()	
}//End of function

function miscCircleOnClick()
{
		miscCircle.click(function()
		{
		portLabel.add(pictureHolder)
		.add(portBlurb)
		.add(homeCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(contactCircle)
		.add(dealsCircle)
		.add(iBoardCircle)
		.add(payrollCircle)
		.add(scannerCircle)
		.add(databaseCircle)
		.add(algorithmCircle)
		.fadeOut(250,function()
		{
		current = 1;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../miscellaneous/index.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of aboutCircle.click()	
}//End of funct

function dealsCircleOnClick()
{
		dealsCircle.click(function()
		{
		portLabel.add(dealsCircle)
		.add(portBlurb)
		.add(homeCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(contactCircle)
		.add(dealsCircle)
		.add(iBoardCircle)
		.add(payrollCircle)
		.add(scannerCircle)
		.add(databaseCircle)
		.add(algorithmCircle)
		.fadeOut(250,function()
		{
		current = 4;// this will redirect to the mortgagedeals page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../portfolio/portfolioPages/mortgageindex.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of aboutCircle.click()	
}//End of funct

function iBoardCircleOnClick()
{
		iBoardCircle.click(function()
		{
		portLabel.add(iBoardCircle)
		.add(portBlurb)
		.add(homeCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(contactCircle)
		.add(dealsCircle)
		.add(iBoardCircle)
		.add(payrollCircle)
		.add(scannerCircle)
		.add(databaseCircle)
		.add(algorithmCircle)
		.fadeOut(250,function()
		{
		current = 5;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../portfolio/portfolioPages/iboardindex.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of aboutCircle.click()	
}//End of funct

function payrollCircleOnClick()
{
	payrollCircle.click(function()
	{
		portLabel.add(pictureHolder)
		.add(portBlurb)
		.add(homeCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(contactCircle)
		.add(dealsCircle)
		.add(iBoardCircle)
		.add(payrollCircle)
		.add(scannerCircle)
		.add(databaseCircle)
		.add(algorithmCircle)
		.fadeOut(250,function()
		{
		 current = 6;// this will redirect to the about me page
		 nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../portfolio/portfolioPages/payrollindex.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of aboutCircle.click()	
}//End of function

function databaseCircleOnClick()
{
		databaseCircle.click(function()
		{
		portLabel.add(dealsCircle)
		.add(portBlurb)
		.add(homeCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(contactCircle)
		.add(dealsCircle)
		.add(iBoardCircle)
		.add(payrollCircle)
		.add(scannerCircle)
		.add(databaseCircle)
		.add(algorithmCircle)		
		.fadeOut(250,function()
		{
		  current = 8;// this will redirect to the about me page
		  nextPage(animcursor,current);
		  setTimeout(function()
		{
			 var redirectPage = "../portfolio/portfolioPages/databaseindex.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of databaseCircle.click()	
}//End of funct

function scannerCircleOnClick()
{
		scannerCircle.click(function()
		{
		portLabel.add(dealsCircle)
		.add(portBlurb)
		.add(homeCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(contactCircle)
		.add(dealsCircle)
		.add(iBoardCircle)
		.add(payrollCircle)
		.add(scannerCircle)
		.add(databaseCircle)
		.add(algorithmCircle)
		.fadeOut(250,function()
		{
		current = 7;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../portfolio/portfolioPages/scannerindex.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of databaseCircle.click()	
}//End of funct

function algorithmCircleOnClick()
{
		algorithmCircle.click(function()
		{
		portLabel.add(dealsCircle)
		.add(portBlurb)
		.add(homeCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(contactCircle)
		.add(dealsCircle)
		.add(iBoardCircle)
		.add(payrollCircle)
		.add(scannerCircle)
		.add(databaseCircle)
		.add(algorithmCircle)		
		.fadeOut(250,function()
		{
		  current = 9;// this will redirect to the about me page
		  nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../portfolio/portfolioPages/algorithmindex.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of databaseCircle.click()	
}//End of funct

//waits for a content circle to be clicked
contentSquareClickHandler();
//function handles all clicks to the related circles
function contentSquareClickHandler()
{
	homeCircle.click(homeCircleOnClick());
	aboutCircle.click(aboutCircleOnClick());
	contactCircle.click(contactCircleOnClick());
	miscCircle.click(miscCircleOnClick());
	dealsCircle.click(dealsCircleOnClick());
	iBoardCircle.click(iBoardCircleOnClick());
	payrollCircle.click(payrollCircleOnClick());
	databaseCircle.click(databaseCircleOnClick());
	scannerCircle.click(scannerCircleOnClick());
	algorithmCircle.click(algorithmCircleOnClick());

}
});//Closing brace