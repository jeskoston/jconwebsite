
$('document').ready(function()	
{	//(Index)---------------------------------------Code for Index Page----------------------------------------------------(Index)
	//Declare all of my variables
	  var logo=$("#centeredImage"),
	  aboutCircle=$("#aboutCircle"),
	  portCircle=$("#portCircle"),
	  contactCircle=$("#contactCircle"),
	  miscCircle=$("#miscCircle"),
	  homeCircle=$("#homeCircle"),
	  backgroundWrap=$("#background-wrap"),
	  logoText      =$("h1"),
	  footer		=$("footer"),
	  body			=$("body"),
	  theWindow     =$(window),
	  $bg			=$("#bg"),
	  redirectPage  =$(""),
	  aspectRatio   =$bg.width() / $bg.height(),
	  windowWidth =$(window).width(),
	  myWindowHeight=$(window).height(),
	  myCanvas      =$("#c")
	  ;	
	  
	 
// The following function will resize the background image to the size of current screen.	  
 function resizeBg() 
{ 
if ( (theWindow.width() / theWindow.height()) < aspectRatio ) 
  {
	$bg
	  .removeClass()
	  .addClass('bgheight');
  } 
  else
  {
	$bg
	  .removeClass()
	  .addClass('bgwidth');
  }
					
}
 //The following function will disable mouse scrolling
 /*theWindow.bind("mousewheel", function() {
		 return false;
	 });*/
 
 theWindow.resize(resizeBg).trigger("resize");	
  
  //the function will redirect the user to a different page
  function redirectMe(redirectPage)
  {
	window.location.href=redirectPage;	
  }
  
  //Get a reference to the previously defined redirectMe() function
  var refRedirectMe = redirectMe;
  
  //The following function will trigger the logo movement and appareance of text and content
  logo.click(function()
	{//when logo is clicked
	if (windowWidth <= 500 && windowWidth >= 200){
	logoOnClickMobile();
	}
	else{
	logoOnClick();//calls the logoOnClick function
	}
	contentSquareClickHandler();
	});
  
   
   //Function will be in charge of the home-page animations when the centered logo is clicked
  function logoOnClick()
	{
	 logo.animate(
	  {//begin animation
	    opacity: 1.0,
		top: "5.0%"
	  },1400, function()
	  {
		myCanvas.fadeIn(1500);//fade in the text next to the logo
	
		var csArray = [aboutCircle,portCircle,contactCircle,miscCircle];
		var delay = 800;
		for (var i = 0; i < csArray.length; i++)
		{
				csArray[i].fadeIn(delay);
				delay = delay + 500;
		}
	  });//close inner function 
	}//close logoOnclick
	
	 //Function will be in charge of the home-page animations when the centered logo is clicked
  function logoOnClickMobile()
	{
	 logo.animate(
	  {//begin animation
	    opacity: 1.0,
		top: "17.0%"
	  },1400, function()
	  {
		myCanvas.fadeIn(1500);//fade in the text next to the logo
	
		var csArray = [aboutCircle,portCircle,contactCircle,miscCircle];
		var delay = 800;
		for (var i = 0; i < csArray.length; i++)
		{
				csArray[i].fadeIn(delay);
				delay = delay + 500;
		}
	  });//close inner function 
	}//close logoOnclick
	
	
	function beforePageRedirect(animcursor,current)
	{
		nextPage(animcursor, current);
		return;
	}
		
var functionRunning = false;
/*The following functions are in charge of the onClick on the navigation circles*/
function aboutCircleOnClick()
{
	aboutCircle.click(function()
	{
	  
	  logo.add(portCircle)
	  .add(aboutCircle)
	  .add(contactCircle)
	  .add(myCanvas)
	  .add(miscCircle)
	  .add(footer)
	  .fadeOut(250,function()
	  {
	  if( isAnimating )
		{
			return false;
		}
		animcursor = 22;
		current = 0;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../aboutme/index.html";
             refRedirectMe(redirectPage);
		}, 725); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of aboutCircle.click()	
}//End of function


//portCircle
function portCircleOnClick()
{
  portCircle.click(function()
	{
	  logo.add(aboutCircle)
	  .add(contactCircle)
	  .add(myCanvas)
	  .add(miscCircle)
	  .add(footer)
	  .add(portCircle)
	  .fadeOut(250,function()
	  {
	   if( isAnimating )
		{
			return false;
		}
	    current = 1;// this will redirect to the about me page
		animcursor = 22;
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../portfolio/index.html";
             refRedirectMe(redirectPage);
		}, 800); 
	  });//End fadeOutcallBack
	}); //end of portCircle.click()	
}//End of functionn

//contactCircle
function contactCircleOnClick()
{
  contactCircle.click(function()
	{
	  logo.add(aboutCircle)
	  .add(portCircle)
	  .add(myCanvas)
	  .add(miscCircle)
	  .add(footer)
	   .add(contactCircle)
	  .fadeOut(250,function()
	  {
	   if( isAnimating )
		{
			return false;
		}
		current = 2;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../contactme/index.html";
             refRedirectMe(redirectPage);
		}, 800); 
	  });//End fadeOutcallBack
	}); //end of contactCircle.click()	
}//End of functionn

 //miscCircle
  function miscCircleOnClick()
{
	miscCircle.click(function()
	{
	  logo.add(aboutCircle)
	  .add(portCircle)
	  .add(contactCircle)
	  .add(footer)
	  .add(miscCircle)
	  .fadeOut(250,function()
	  {
	   if( isAnimating )
		{
			return false;
		}
		current = 3;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../miscellaneous/index.html";
             refRedirectMe(redirectPage);
		}, 800); 
	  });//End fadeOutcallBack
	}); //end of miscCircle.click()	
}//End of function

//will handle all of the click to functional html elements
function contentSquareClickHandler()
{
	aboutCircle.click(aboutCircleOnClick());
	portCircle.click(portCircleOnClick());
	contactCircle.click(contactCircleOnClick());
	miscCircle.click(miscCircleOnClick());
}

});//Closing brace	