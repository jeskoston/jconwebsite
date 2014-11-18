$('document').ready(function()
  {
  //Declare global variables
 var  homeCircle=$("#homeCircle"),
      portCircle=$("#portCircle"),
	  miscCircle=$("#miscCircle"),
      aboutCircle=$("#aboutCircle"),
	  contactmeLabel=$("#contactmeLabel"),
	  contactmeBlurb=$("#contactmeBlurb"),
	  contactmeEnvelope =$("#contactmeEnvelope"),
	  name=$("#name"),
	  email=$("#email"),
	  message =$("#message"),
	  phone= $("#phone"),
	  textarea = $("textarea")
	  submitButton= $("#submit"),
	  backgroundWrap=$("#background-wrap"),
      footer		=$("footer"),
      body			=$("body"),
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
		contactmeLabel.add(contactmeBlurb)
		.add(contactmeEnvelope)
		.add(name)
		.add(email)
		.add(message)
		.add(phone)
		.add(textarea)
		.add(submitButton)
		.add(portCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(homeCircle)
		.fadeOut(250,function()
		{
		current = 1;// this will redirect to the about me page
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
		contactmeLabel.add(contactmeBlurb)
		.add(contactmeEnvelope)
		.add(name)
		.add(email)
		.add(message)
		.add(phone)
		.add(textarea)
		.add(submitButton)
		.add(portCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(homeCircle)
		.fadeOut(250,function()
		{
		current = 3;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../portfolio/index.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of aboutCircle.click()	
}//End of function


function aboutCircleOnClick()
{
	aboutCircle.click(function()
	{
		contactmeLabel.add(contactmeBlurb)
		.add(contactmeEnvelope)
		.add(name)
		.add(email)
		.add(message)
		.add(phone)
		.add(textarea)
		.add(submitButton)
		.add(portCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(homeCircle)
		.fadeOut(250,function()
		{
		current = 2;// this will redirect to the about me page
		nextPage(animcursor,current);
		setTimeout(function()
		{
			 var redirectPage = "../aboutme/index.html";
             refRedirectMe(redirectPage);
		}, 800); // how long do you want the delay to be? 
	  });//End fadeOutcallBack
	}); //end of aboutCircle.click()	
}//End of function

function miscCircleOnClick()
{
		miscCircle.click(function()
		{
		contactmeLabel.add(contactmeBlurb)
		.add(contactmeEnvelope)
		.add(name)
		.add(email)
		.add(message)
		.add(phone)
		.add(textarea)
		.add(submitButton)
		.add(portCircle)
		.add(aboutCircle)
		.add(miscCircle)
		.add(homeCircle)
		.fadeOut(250,function()
		{
		current = 0;// this will redirect to the about me page
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
	aboutCircle.click(aboutCircleOnClick());
	miscCircle.click(miscCircleOnClick());
}

//This is so that tab works within the textbox, otherwise it will bounce cursor around to a different html element
$("textarea").keydown(function(e) {
    if(e.keyCode === 9) { // tab was pressed
        // get caret position/selection
        var start = this.selectionStart;
            end = this.selectionEnd;

        var $this = $(this);

        // set textarea value to: text before caret + tab + text after caret
        $this.val($this.val().substring(0, start)
                    + "\t"
                    + $this.val().substring(end));

        // put caret at right position again
        this.selectionStart = this.selectionEnd = start + 3;

        // prevent the focus lose
        return false;
    }
});//End tab "works in text area" function


//This will make the background image in textbox dissapear once the text area is in focus!
$("textarea")
  .focus(function() { $(this).css("background", "none") })
  .blur(function() { if ($(this)[0].value == '') { $(this).css() } });


});//Closing brace