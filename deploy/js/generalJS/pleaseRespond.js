/*Author of (this) pleaseRespond.js is Jesus Contreras. All rights reserved, for use of pleaseRespond 
you will need expressed written consent from Jesus Contreras, which you may acquire by emailing him at
jcon.gallo@gmail.com. READ CAREFULLY. By [accepting this material] you agree to release me from all
obligations and waivers arising from any and all NON-NEGOTIATED agreements, licenses,
terms-of-service.*/
$('document').ready(function()
{
    var image 		= $("img"); //contains all of the elements with an img tag, it;s a collection 
	var input 		= $("input"); //contains all the input elements in a page
	var textarea	= $("textarea");//contains all of textareas in a page
	var TACopy = $.extend(true, {}, textarea);
	
	TAMehCopy = 
	{
	height: TACopy.height(),
	width: TACopy.width()
	};
	//var canvas = document.getElementById('c').getContext('2d');
	var imgHeight;
	var imgWidth; 
	var imgSize; 
	var iptSize;
	var counter = 0;
	var originalTextareaWidth  = 441;//this is in pixels
	var originalTextareaHeight = 219;//this is in pixels
	var originalInputWidth  = 153;   //this is in pixels
	var originalInputHeight = 22;    //this is in pixels 
	var inputWidth;
	var inputHeight;
    //window height
    
	
  //the function will redirect the user to a different page
  /*function redirectMe(redirectPage)
  {
	window.location.href=redirectPage;	
  }
  */

	
    //set to the actual size of the image
    var actualImgHeight; //= getImgHeight(image, imgHeight); 
    //set to the actual size of the image
    var actualImgWidth ;//= getImgWidth(image, imgHeight); 
	//create an array with all of the images in the collection image
	var imageObj = new Image();//create an image object
	imageObj = []; //make it an array object
	
	console.log("There are " + image.length + " images on this page" );

	console.log("images in imageObj " + imageObj.length);

    //These will be the percentage values of the images
    var xxlImg = 1.00;  //1800-1551
    var xlImg  = 0.90;  //1550-1401
    var lgImg  = 0.80;  //1400-1251
    var medImg = 0.70;  //1250-1001
    var smlImg = 0.60;  //1100-901
	
	var xxlIpt = 1.00;  //1800-1551
    var xlIpt  = 0.90;  //1550-1401
    var lgIpt  = 0.80;  //1400-1251
    var medIpt = 0.70;  //1250-1001
    var smlIpt = 0.60;  //1100-901
	
	//this will return the width of the current window it is running on
    var windowWidth = $(window).width(); 
	//Scale the images based on the width of the current screen
	resizeHandler(windowWidth); 
	
	//When the window is resized, scale the images accrodingly (onResizeHandler is fired when the scren is manipulated)
	  $(window).on("resize", onResizeHandler);

	//function handles all the image scales (size of images) depending on width of screen
    function resizeHandler(windowWidth)
    {
        
		if (windowWidth <= 2133 && windowWidth >= 1551)
        {
			imgSize = xxlImg;
			iptSize = xxlIpt;
			updateImage(imgSize); 
			updateInputSize(iptSize);
			updateTextarea(iptSize);
		
			
        }
        else if (windowWidth <= 1550 && windowWidth >= 1401)
        {
            
			imgSize = xlImg; 
			iptSize = xlIpt;
			updateImage(imgSize);
			updateInputSize(iptSize);
			updateTextarea(iptSize);
		
        }
        else if (windowWidth <= 1400 && windowWidth >= 1251)
        {
            
			imgSize = lgImg; 
			iptSize = lgIpt;
			updateImage(imgSize);
			updateInputSize(iptSize);
			updateTextarea(iptSize);
		}	
        else if (windowWidth <= 1250 && windowWidth >= 1150)
        {
			imgSize = medImg; 
			iptSize = medIpt;
			updateImage(imgSize);
			updateInputSize(iptSize);
			updateTextarea(iptSize);

        }
        else if (windowWidth <= 1151 && windowWidth >= 1101)
        {
			imgSize = smlImg; 
			iptSize = smlIpt;
			updateImage(imgSize); 
			updateInputSize(iptSize);
			updateTextarea(iptSize);
        }
		else if (windowWidth <= 1100 && windowWidth >= 200)
		{
			 var redirectPage = "/mobile/mobileIndex.html";// the 
			//the function will redirect the user to a different page
		   // redirectMe(redirectPage);
		   window.location.href=redirectPage;
		}
        else
        {
          //  canvas.restore();
			imgSize = xlImg; 
			iptSize = xlIpt;
			updateImage(imgSize);
			updateInputSize(iptSize); 
			updateTextarea(iptSize);
        }
		
    } //End function
	
		var count = 1;
		//function handles all the image scales (size of images) depending on width of screen, this handles image scales when window is resized.
	    function onResizeHandler()
    {
		var windowWidth = $(window).width();
		
		if (windowWidth <= 2133 && windowWidth >= 1551)
        {
            
			imgSize = xxlImg;
			iptSize = xxlIpt;
			updateImage(imgSize);
			updateInputSize(iptSize);
			updateTextarea(iptSize);

        }
        else if (windowWidth <= 1550 && windowWidth >= 1401)
        {
            
			imgSize = xlImg;
			iptSize = xlIpt;
			updateImage(imgSize); 
			 updateInputSize(iptSize);
			updateTextarea(iptSize)

        }
        else if (windowWidth <= 1400 && windowWidth >= 1251)
        {
			imgSize = lgImg; 
			iptSize = lgIpt;
			updateImage(imgSize);
			 updateInputSize(iptSize);
			updateTextarea(iptSize);

        }
        else if (windowWidth <= 1250 && windowWidth >= 1150)
        {
			imgSize = medImg; 
			iptSize = medIpt;
			updateImage(imgSize);
			updateInputSize(iptSize);
			updateTextarea(iptSize);

        }
        else if (windowWidth <= 1151 && windowWidth >= 1101)
        {
			imgSize = smlImg; 
			iptSize = smlIpt;
			updateImage(imgSize); 
			updateInputSize(iptSize);
			updateTextarea(iptSize);
        }
		else if (windowWidth <= 1100 && windowWidth >= 200)
		{
			 var redirectPage = "/mobile/mobileIndex.html";// the 
			//the function will redirect the user to a different page
		   // redirectMe(redirectPage);
		   window.location.href=redirectPage;
		}
	
        else
        {
            imgSize = xlImg; 
			iptSize = xlIpt;
			updateImage(imgSize);
			updateInputSize(iptSize);
			updateTextarea(iptSize);

        }
	
	
    } //End function

	    function getInputHeight(currentInput)
    {
		var tempInput = currentInput;
		var inputH = parseInt(tempInput.css("height"));
		return inputH;
    }

    function getInputWidth(currentInput)
    {
		var tempInput = currentInput;
		var inputW = parseInt(tempInput.css("width"));
		return inputW;
    }

    function getImgHeight(image, imgHeight)
    {
        //make a reference to the image
        var tempImage = image; 
        // Create new offscreen image to test
        var theImage = new Image(); 
        //Access the src of the image
        theImage.src = tempImage.attr("src"); 
        //get native image Height from theImage src
        var imgHt = parseInt(theImage.height); 
        //return the img height value
        return imgHt;
    }

    function getImgWidth(image, imgHeight)
    {
        //make a reference to the image
        var tempImage = image; 
        // Create new offscreen image to test
        var theImage = new Image(); 
        //Access the src of the image
        theImage.src = tempImage.attr("src"); 
        //get native image Width from theImage src
        var imgWd = parseInt(theImage.width); 
        //return the img width value
        return imgWd; 
    }
	
	
	var textareaProperties = 
	{ 
		height: textarea.height(),
		width:  textarea.width()
	};
		  	  
	function getInputHeight1()
    {
		var tempTA = textarea;
		var textareaHeight = tempTA.height();
		return textareaHeight;
	
    }

    function getInputWidth1()
    {
		var tempTA = textarea;
		var textareaWidth = tempTA.width();
		return textareaWidth;
    }
	
	function updateTextarea(iptSize)
	{
		var updatedTextareaHeight = originalTextareaHeight * iptSize+"px";
		var updatedTextareaWidth  = originalTextareaWidth * iptSize+"px";
		var taHeight =  originalTextareaHeight * iptSize;
		var taWidth  =  originalTextareaWidth * iptSize;
		var topPlacement = parseInt(textarea.css("top"));//return the value of "top" of the current css element strips the px value with pareseInt
				
		if (windowWidth <= 2133 && windowWidth >= 1551)
		{
		
		textarea.animate(
		{
			height: updatedTextareaHeight, 
			width: updatedTextareaWidth,
			top: topPlacement 
		}
	 						);//end animate
							
		}//end if
		else if (windowWidth <= 1550 && windowWidth >= 1401)
		{
		topPlacement = topPlacement * .97 + "px";
	
		textarea.animate(
		{
			height: updatedTextareaHeight, 
			width: updatedTextareaWidth,
			top: topPlacement 
		}
	 						);//end animate
		}//end if
		else if (windowWidth <= 1400 && windowWidth >= 1251)
		{
		topPlacement = topPlacement * .93 + "px";
		
		textarea.animate(
		{
			height: updatedTextareaHeight, 
			width: updatedTextareaWidth,
			top: topPlacement 
		}
	 						);//end animate
		}//end if
		else if (windowWidth <= 1250 && windowWidth >= 1101)
		{
		topPlacement = topPlacement * .89 + "px";
		textarea.animate(
		{
			height: updatedTextareaHeight, 
			width: updatedTextareaWidth,
			top: topPlacement 
		}
	 						);//end animate
		}//end if
		else if (windowWidth <= 1100 && windowWidth >= 901)
		{
		topPlacement = topPlacement * .80 + "px";
		textarea.animate(
		{
			height: updatedTextareaHeight, 
			width: updatedTextareaWidth,
			top: topPlacement 
		}
							);//end animate
		}//end if
		else
		{
		textarea.animate(
		{
			height: updatedTextareaHeight, 
			width: updatedTextareaWidth,
			top: "20.65%"
		}
							);//end animate
		}//end else*/
	
	}//end updateTextArea
	
	

	function updateInputSize(iptSize)
	{
	//create a reference variable for input
		for(var i = 0; i< input.length; i++)
		{
		var currentInput  = input.eq(i);
		var topPlacement = parseInt(currentInput.css("top"));//return the value of "top" of the current css element strips the px value with pareseInt
		var leftPlacement = parseInt(currentInput.css("left"));
		updateInputWidth  =  originalInputWidth  * iptSize+"px";
		updateInputHeight =  originalInputHeight * iptSize+"px";
		
		if (windowWidth <= 2133 && windowWidth >= 1551)
		{
		
		currentInput.animate(
		{
			height: updateInputHeight, 
			width: updateInputWidth,
			top: topPlacement 
		}
	 						);//end animate
							
		}//end if
		else if (windowWidth <= 1550 && windowWidth >= 1401)
		{
		if(i == 3) {
		topPlacement = topPlacement * .95 + "px"; 
		leftPlacement = leftPlacement * .978 + "px"; 
		}
		else 
		{
		topPlacement = topPlacement * .98 + "px";
		leftPlacement = leftPlacement * .99 + "px";
		}
		currentInput.animate(
		{
			height: updateInputHeight, 
			width: updateInputWidth,
			top: topPlacement, 
			left: leftPlacement
		}
	 						);//end animate
							
		}//end if
		else if (windowWidth <= 1400 && windowWidth >= 1251)
		{
		if(i == 3) {
		topPlacement = topPlacement * .88 + "px"; 
		leftPlacement = leftPlacement * .97 + "px"; 
		}
		else 
		{
		topPlacement = topPlacement * .94 + "px";
		leftPlacement = leftPlacement * .99 + "px";
		}
		currentInput.animate(
		{
			height: updateInputHeight, 
			width: updateInputWidth,
			top: topPlacement,
			left: leftPlacement
		}
	 						);//end animate
		}//end if
		else if (windowWidth <= 1250 && windowWidth >= 1101)//
		{
		if(i == 3) {
		topPlacement = topPlacement * .81 + "px"; 
		leftPlacement = leftPlacement * .975 + "px"; 
		}
		else 
		{
		topPlacement = topPlacement * .90 + "px";
		leftPlacement = leftPlacement * .99 + "px";
		}
		currentInput.animate(
		{
			height: updateInputHeight, 
			width: updateInputWidth,
			top: topPlacement,
			left: leftPlacement
		}
	 						);//end animate
						
		}//end if
		else if (windowWidth <= 1100 && windowWidth >= 901)
		{
		if(i == 3) topPlacement = topPlacement * .73 + "px";
		else topPlacement = topPlacement * .87 + "px";
		currentInput.animate(
		{
			height: updateInputHeight, 
			width: updateInputWidth,
			top: topPlacement 
		}
							);//end animate
							
		}//end if
		else
		{
		currentInput.animate(
		{
			height: updateInputHeight, 
			width: updateInputWidth,
			top: "20.65%"
		}
							);//end animate
		}//end else*/
		
		
		
		
		
		
		
		
	 }//end for loop
	}//end function
    function updateImage(imgSize)
    {
		for(var i = 0; i < image.length; i++)
		{
		var currentImage = image.eq(i);
		actualImgWidth  = getImgWidth(currentImage, imgHeight );
		actualImgHeight = getImgHeight(currentImage, imgWidth );
		updateWidth     =  actualImgWidth * imgSize ;
		updateheight    = actualImgHeight * imgSize ;

		currentImage.animate(
		  {
            height: updateheight, width: updateWidth
		  }
							); //end animate
							
		}//end for loop
}//end updateImage
});
