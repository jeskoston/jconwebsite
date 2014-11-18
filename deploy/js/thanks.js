/*thanks js page is the jquery page to 
the page that appears when an email is successfully sent*/
$('document').ready(function()
  {
  //Declare all of my variables
  var     homeCircle=$("#homeCircle"),
	       thankYouH=$("#thankYouH") ,
	       thankYouF=$("#thankYouF") ,
		    sentMail=$("#sentMail")  ,
	         spinner=$(".spinner")   ;

//This will make a call to execute all of the animations
startAnimations();
  
   //Function will be in charge of the home-page animations when the centered logo is clicked
  function startAnimations()
    {
	    spinner.show().delay(3000).hide("fast",function()
		{
		  sentMail.animate(
		  {
		    left:"110%",
			 top:"-5%"
			
		  },1500, function()
	          {
			  thankYouH.fadeIn(1000);
		      thankYouF.fadeIn(1000).delay(2000, function()
		      {
		        homeCircle.fadeIn(500);// fadeIn the home link
		      });//end thankYouinner callback
		  
		  });//end sentMail callback	
		
		});//end spinner callBackfunction
	
	}//close  function

//If the home link is clicked then it will redirect the user to the home button
homeCircle.click(function()
{
  window.location.href = "../index.html"
});

});//Closing brace