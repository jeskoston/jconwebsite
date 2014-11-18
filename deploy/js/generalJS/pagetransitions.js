//Global variables
	var $main = $( '#pt-main' ),// main refers to the main pages, that will be changed
		$pages = $main.children( 'div.pt-page' ),//this refers to each individual page
		$iterate = $( '#iterateEffects' ),// these are the buttons that specify what effect to choose
		animcursor = 22,
		pagesCount = $pages.length,
		//current ,//refers to the current page-1 so 0 equals first page, 1 equals another assigned page 
		isAnimating = false,
		endCurrPage = false,
		endNextPage = false,
		current= 0,
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		// support css animations
		support = Modernizr.cssanimations;
		
		//This function 
	function init() {
		//important
		$pages.each( function() {
			var $page = $( this );
			$page.data( 'originalClassList', $page.attr( 'class' ) );
		} );
	
		$pages.eq( current ).addClass( 'pt-page-current' );
	}

	//function next page-------------------------------------------------------------
	function nextPage( animation, current ) {
	
		if( isAnimating ) {
			return false;
		}
		isAnimating = true;
		var $currPage = $pages.eq( current );

		if( current < pagesCount - 1 ) {
			++current;
		}
		else {
			current = 0;
		}

		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
			outClass = '', 
			inClass = '';

		switch( animation ) {


			case 22:
				outClass = 'pt-page-scaleDownUp';
				inClass = 'pt-page-scaleUp pt-page-delay400';
				break;
		}

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $nextPage );
		}

	}//End function next page
	function onEndAnimation( $outpage, $inpage ) { 
		endCurrPage = false;
		endNextPage = false;
		resetPage( $outpage, $inpage );
		isAnimating = false;
	}

	function resetPage( $outpage, $inpage ) {
		$outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
		$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
	}
	
	//---------------------------------------End Code for page transitions-------------------------------------------------------
		
	//----------------------------------------------Start JQuery-------------------------------------------------------------
$('document').ready(function()	
{
   init();
   return { init : init };
	
	//});//Closing brace	
});