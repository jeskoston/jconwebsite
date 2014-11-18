$('document').ready(function()
  {
  //Declare global variables
 var  homeCircle=$("#homeCircle"),
      portCircle=$("#portCircle"),
      contactCircle=$("#contactCircle"),
      miscCircle=$("#miscCircle"),
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
		aboutmeLabel.add(pictureHolder)
		.add(blurb)
		.add(portCircle)
		.add(contactCircle)
		.add(miscCircle)
		.add(homeCircle)
		.fadeOut(250,function()
		{
		current = 3;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../index.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of aboutCircle.click()	
}//End of function

function portCircleOnClick()
{
	portCircle.click(function()
	{
		aboutmeLabel.add(pictureHolder)
		.add(blurb)
		.add(homeCircle)
		.add(contactCircle)
		.add(miscCircle)
		.add(portCircle)
		.fadeOut(250,function()
		{
		current = 0;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../portfolio/index.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of aboutCircle.click()	
}//End of function


function contactCircleOnClick()
{
	contactCircle.click(function()
	{
		aboutmeLabel.add(pictureHolder)
		.add(blurb)
		.add(homeCircle)
		.add(portCircle)
		.add(miscCircle)
		.add(contactCircle)
		.fadeOut(250,function()
		{
		current = 1;// this will redirect to the about me page
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
		aboutmeLabel.add(pictureHolder)
		.add(blurb)
		.add(homeCircle)
		.add(portCircle)
		.add(contactCircle)
		.add(miscCircle)
		.fadeOut(250,function()
		{
		current = 2;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../miscellaneous/index.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of aboutCircle.click()	
}//End of funct

//waits for a content circle to be clicked
contentSquareClickHandler();
//function handles all clicks to the related circles
function contentSquareClickHandler()
{
	homeCircle.click(homeCircleOnClick());
	portCircle.click(portCircleOnClick());
	contactCircle.click(contactCircleOnClick());
	miscCircle.click(miscCircleOnClick());
}
});//Closing brace