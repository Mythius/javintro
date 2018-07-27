// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(document).ready(function(){
		
	$(".contentsPanel").each(function() {                
		$(this).prepend('<div class="hidePanel">[hide]</div><div class="showPanel">[show]</div>');
	});

    $("#mobileMenuTrigger").click(function(){
		$('.navigation').toggle(200);
    });
	
	
    $(".hidePanel").click(function(){
		$( this ).siblings('ul').hide( 150, function() { 
			$(this).parent().addClass('minimizedPanel');
		});
    });
    $(".showPanel").click(function(){
		$( this ).siblings('ul').show( 150, function() { 
			$(this).parent().removeClass('minimizedPanel');
		});
    });
	
     setTimeout(function ()	{
		 $('#preventMouseHoverOnPageLoad').hide();

     }, 2000);
	 
	setTimeout(function ()	{
		if ($(".roofpig")[0]){										// ha letezik .roofpig div akkor betolti a library-t
		
	//Wordpress ujrair sok specialis karaktert, ezert ezt kell betenni a functions.php fileba:
	//remove_filter( 'the_title', 'wptexturize' );
	//remove_filter( 'the_content', 'wptexturize' );
	//remove_filter( 'the_excerpt', 'wptexturize' );
	//remove_filter( 'comment_text', 'wptexturize' );
	
			var head = document.getElementsByTagName('head')[0];
			var js = document.createElement("script");
			js.type = "text/javascript";
			js.src = "https://rawgit.com/Mythius/javintro/master/rubiks2.js";
			head.appendChild(js);
		}
    }, 100);
	 
	 

});


jQuery(document).ready(function(){	
	setTimeout(function () {
		jQuery("#cookieConsent").fadeIn(200);
     }, 15000);
	jQuery("#closeCookieConsent").click(function() {
		jQuery("#cookieConsent").fadeOut(200);
	});	
});	


var alg;
var tomb;
var stri;
var classz;
var i=0;
$( document ).ready(function() {
    $('.socialShareLinks a').each(function() {
      var value = $(this).attr('href');
      $(this).attr('href', value.replace('currentpagelink',$(location).attr('href')));
    });
	
	renderAlgArrows();

});

function renderAlgArrows() {
	//<span class="rots"></span>
	$("span.rots").each(function() {
		alg = $(this).text() + "";
		tomb = alg.split(" ");
		stri = "";
		for (var i = 0; i < tomb.length; i++) {
			/*
			classz = tomb[i].replace("'", "i");
			classz = tomb[i].replace("’", "i");
			*/
			classz = tomb[i].charAt(0);
			if (tomb[i].charAt(1) == 2) {	classz = classz + "2";	}
			if ((tomb[i].charAt(1) != 2) && (tomb[i].length == 2)) {	classz = classz + 'i';	}
			
			classz = classz.toLowerCase();
			stri = stri + "<span class=" + classz + ">" + tomb[i] + "</span>";
		}
		$(this).html(stri);
	});
}

$(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: ($($(this).attr("href")).offset().top - 40) }, 500);		// smooth scroll to anchor
    });	
	
	$(".sendThisToSidebar").each(function() {                // send to sidebar
		$(this).appendTo('#topOfSidebar');
	});
	
	$(".sendThisToNavBar").each(function() {                // send to navbar
		$(this).appendTo('#topOfNavBar');
	});
	
	$(".wrapBackToTop").insertBefore('.fb-comments');
	
	
    setTimeout(function () {
		$(".sendThisToNavBar a").each(function() {
			if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
				$(this).parent().addClass('current_page_item');
			}
		});
     }, 1000);


});

function sticktothetop() {
    var window_top = $(window).scrollTop();
	if ($('#stick-here').length > 0) {
		var top = $('#stick-here').offset().top;
		if (window_top > top) {
			$('#stickThis').addClass('stick');
			$('#stick-here').height($('#stickThis').outerHeight());
		} else {
			$('#stickThis').removeClass('stick');
			$('#stick-here').height(0);
		}
	}
}
$(function() {
    $(window).scroll(sticktothetop);
    sticktothetop();
});


function sticktothetops() {
    var window_top = $(window).scrollTop();
	if ($('#stick-here2').length > 0) {
		var top = $('#stick-here2').offset().top;
		if (window_top > top) {
			$('#stickThis2').addClass('stick');
			$('#stick-here2').height($('#stickThis2').outerHeight());
		} else {
			$('#stickThis2').removeClass('stick');
			$('#stick-here2').height(0);
		}
	}
}
$(function() {
    $(window).scroll(sticktothetops);
    sticktothetops();
});


/*Featured random articles - BEGIN*/

var fimage = ['solver','simulator','patterns','scrambler','edgeonly','cheese','robots','1x1x1','ivy','youcandothecube','mirror','facebook','webshops','simulator','advanced','tattoos','memes','2x2solver','oskar','fmc','solution','simulator','godsnumber','statues','cubetimer','solver','domino','twistypuzzles','celebrities','fishercube','rubikubism','advanced','4x4x4','solver','ghost','tonyfisher','popculture','facebook','patterns','wca','simulator','matsvalkrecord','square1simulator','gearcube','solution','advanced','webshops','memes','largestcube20','geekprank','architecutre','speedcubers','gifts','streetart','2x2x2','timeline','solver','cubetimer','inventor','advanced','history','voidcube','shapemods','5x5x5','art','simulator','solution','movies','originalrubiks','brands','takeapart','megaminx','skewb','videoclips','pyraminxsimulator','tricks','memes','cubetimer','solver','electronic','smartegg','patterns','notation','neocubes','unsolvable','solution','advanced','rubikscslocksimulator','funnyimages','jigsawpuzzles','facebook','mosaics','stickermods','square1','lubrication','solver','stickers','twistypatterns','tonyslargest','pyraminx','quiz','memes','geekprank','scrambler','youtube','simulator','advanced','cubetimer','solution','rubiksclock','snake','terminology','solver','puzzlemodding','15puzzle','hungarianrings','speedcubing','curriculum','siamese','kilominx','floppy','ufo','memes','nontwisty','solution','stackmat','solver','mathematics','commercials','cubetimer','bld','advanced','prototype','bandagedcube','facebook','geekprank','megaminxsimulator','patternspuzzles','simulator','solver','tshirts'];
var flink = ['/online-rubiks-cube-solver-program/','/online-puzzle-simulators/','/the-rubiks-cube/rubiks-cube-patterns-algorithms/','/puzzle-scramble-generator/','/twisty-puzzles/edges-void-cube/','/twisty-puzzles/rubiks-cheese/','/the-rubiks-cube/lego-rubiks-cube-robots-rubot2/','/twisty-puzzles/1x1x1-rubiks-cube/','/twisty-puzzles/ivy-cube/','/the-rubiks-cube/you-can-do-the-cube/','/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/mirror-blocks-cube/','https://www.facebook.com/online.rubiks.cube.solver','/shop/','/online-puzzle-simulators/','/the-rubiks-cube/advanced-cfop-fridrich/','/the-rubiks-cube/popular-culture/art/','/the-rubiks-cube/rubiks-cube-memes/','/online-puzzle-simulators/2x2x2-pocket-cube-simulator.php','/twisty-puzzles/designers/oskar-van-deventer/','/the-rubiks-cube/fmc-fewest-move-count-challenge-method-tips/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/online-puzzle-simulators/','/the-rubiks-cube/gods-number/','/the-rubiks-cube/popular-culture/statues/','/online-rubiks-stopwatch-timer/','/online-rubiks-cube-solver-program/','/twisty-puzzles/2x3x3-domino-cube/','/twisty-puzzles/','/the-rubiks-cube/celebrities-actors-politicians-artists/','/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/fisher-cube/','/the-rubiks-cube/popular-culture/rubikubism-pixel-art-mosaic/','/the-rubiks-cube/advanced-cfop-fridrich/','/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/','/online-rubiks-cube-solver-program/','/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/ghost-cube/','/twisty-puzzles/designers/tony-fisher/','/the-rubiks-cube/popular-culture/','https://www.facebook.com/online.rubiks.cube.solver','/the-rubiks-cube/notation/','/the-rubiks-cube/world-cube-association-wca/','/online-puzzle-simulators/','/feliks-zemdegs-rubiks-world-record-2016-4-73/','/online-puzzle-simulators/square-1-simulator.php','/twisty-puzzles/gear-cube-extreme-ultimate-how-to-solve-gearcube-solution/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/the-rubiks-cube/advanced-cfop-fridrich/','/the-rubiks-cube/puzzle-stores-webshops-around-the-world-where-to-buy-rubiks-cubes/','/the-rubiks-cube/rubiks-cube-memes/','/the-worlds-largest-cubic-nxnxn-rubiks-cube-puzzle-22x22x22/','http://geekprank.com/','/the-rubiks-cube/popular-culture/buildings-architecture/','/the-rubiks-cube/best-most-influential-speedsolvers-of-all-time-hall-of-fame/','/the-rubiks-cube/rubiks-themed-gifts-souvenirs/','/the-rubiks-cube/popular-culture/art/','/twisty-puzzles/2x2x2-rubiks-cube-pocket/','/the-rubiks-cube/history-rubiks-cube/important-dates-timeline/','/online-rubiks-cube-solver-program/','/online-rubiks-stopwatch-timer/','/the-rubiks-cube/the-inventor-rubik-erno-1974-budapest-hungary/','/the-rubiks-cube/advanced-cfop-fridrich/','/the-rubiks-cube/history-rubiks-cube/','/twisty-puzzles/void-cube/','/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/','/twisty-puzzles/5x5x5-rubiks-cube-professors-cube/','/the-rubiks-cube/popular-culture/art/','/online-puzzle-simulators/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/the-rubiks-cube/popular-culture/in-movies/','/why-rubiks-brand-cube-disliked-hated/','/the-rubiks-cube/the-best-speedcube-competition-cubes-moyu-dayan-shengshou-yuxin/','/the-rubiks-cube/how-take-apart-disassemble-the-rubiks-cube-and-put-back-together/','/twisty-puzzles/megaminx-gigaminx-teraminx-petaminx/','/twisty-puzzles/skewb-pyraminx-mod-skewb-diamond/','/the-rubiks-cube/popular-culture/rubiks-cube-music-videos/','/online-puzzle-simulators/pyraminx-simulator.php','/the-rubiks-cube/tricks/','/the-rubiks-cube/rubiks-cube-memes/','/online-rubiks-stopwatch-timer/','/online-rubiks-cube-solver-program/','/twisty-puzzles/electronic-rubiks-cube-puzzles-touch-futuro-slide/','/twisty-puzzles/smart-egg/','/the-rubiks-cube/notation/','/the-rubiks-cube/notation/','/twisty-puzzles/neo-cubes-magnetic-balls-puzzle/','/the-rubiks-cube/unsolvable-rubiks-cube-invalid-scramble/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/the-rubiks-cube/advanced-cfop-fridrich/','/online-puzzle-simulators/rubiks-clock-simulator.php','/the-rubiks-cube/rubiks-cube-memes/','/twisty-puzzles/jigsaw-puzzles/','https://www.facebook.com/online.rubiks.cube.solver','/the-rubiks-cube/popular-culture/rubikubism-pixel-art-mosaic/','/twisty-puzzles/rubiks-cube-sticker-mods-and-picture-cubes-how-to-solve-orient-center-pieces-sudoku-shepherd-maze-pochmann/','/twisty-puzzles/square-1-back-to-square-one/','/the-rubiks-cube/lubricate-rubiks-cube-with-silicone-or-vaseline-petroleum-jelly/','/online-rubiks-cube-solver-program/','/the-rubiks-cube/rubiks-cube-stickers-cubesmith/','/the-rubiks-cube/rubiks-cube-patterns-algorithms/twisty-puzzle-patterns/','/tony-fisher-presents-the-worlds-largest-rubiks-cube/','/twisty-puzzles/pyraminx-triangle-rubiks-cube/','/the-rubiks-cube/rubiks-cube-quiz/','/the-rubiks-cube/rubiks-cube-memes/','http://geekprank.com/','/puzzle-scramble-generator/','/the-rubiks-cube/the-best-cubing-youtube-channels-speedcubing-vloggers-youtubers-video-bloggers/','/online-puzzle-simulators/','/the-rubiks-cube/advanced-cfop-fridrich/','/online-rubiks-stopwatch-timer/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/twisty-puzzles/rubiks-clock-mechanical-puzzle-solution-machanism/','/twisty-puzzles/rubiks-snake-twist/','/the-rubiks-cube/cubing-terminology-abbreviations-commonly-used-expressions/','/online-rubiks-cube-solver-program/','/twisty-puzzles/twisty-puzzle-modding/','/online-puzzle-simulators/sliding-15-puzzle/','/online-puzzle-simulators/hungarian-rings/','/the-rubiks-cube/speedcubing-speedsolving/','/the-rubiks-cube/curriculum/','/twisty-puzzles/siamese-twisty-puzzles/','/twisty-puzzles/kilominx/','/twisty-puzzles/super-floppy-cube/','/twisty-puzzles/rubiks-ufo-solution/','/the-rubiks-cube/rubiks-cube-memes/','/twisty-puzzles/non-twisty-puzzles-snake-cube-hanayama-babylon-tower-brain-racker/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/the-rubiks-cube/speedcube-stackmat-timer-stopwatch/','/online-rubiks-cube-solver-program/','/the-rubiks-cube/mathematics-of-the-rubiks-cube-permutation-group/','/the-rubiks-cube/popular-culture/commercials/','/online-rubiks-stopwatch-timer/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-blindfolded-tutorial/','/the-rubiks-cube/advanced-cfop-fridrich/','/the-rubiks-cube/first-rubiks-cube-prototype-invention/','/twisty-puzzles/bandaged-cube-puzzles/','https://www.facebook.com/online.rubiks.cube.solver','http://geekprank.com/','/online-puzzle-simulators/megaminx-simulator.php','/the-rubiks-cube/rubiks-cube-patterns-algorithms/twisty-puzzle-patterns/','/online-puzzle-simulators/','/online-rubiks-cube-solver-program/','/the-rubiks-cube/popular-culture/art/'];
var ftitle = ['Online Cube Solver','Online 3D Cube','Color Patterns','Puzzle Scrambler','Edges Only Cube','Rubik\'s Cheese','Rubik Robots','1x1x1 Cube','Ivy Cube','You Can Do The Cube','Mirror Cube','Like Ruwix','Buy Puzzles','Rubik Simulator','Advanced Method','Rubik Tattoos','Funny Images','2x2 Simulator','Oskar van Deventer','Fewest Moves Challenge','Beginner\'s Solution','Cube Simulator','God\'s Number','Statues','Cube Timer','Online Cube Solver','Domino Cube','Twisty Puzzles','Cubing Celebrities','Fisher Cube','Puzzle Mosaics','Advanced Method','4x4x4','Online Cube Solver','Ghost Cube','Tony Fisher','Pop Culture','Like Ruwix','Color Patterns','WCA','Rubik Simulator','World Record','Square-1 Simulator','Gear Cube','Beginner\'s Solution','Advanced Method','Cubing Webshops','Funny Images','22 x 22 x 22 Cube','Geek Prank','Architecutre','The Best SpeedCubers','Rubik\'s Gifts','Street Art','2x2x2','History Timeline','Online Solver','Cube Timer','About The Inventor','Advanced Method','Cubing History','Void Cube','Shape Mods','5x5x5','Cube Art','3D Rubik Simulator','Beginner\'s Solution','Movies','Not the Best Brand?','Best Brands','Take It Apart','Megaminx','The Skewb','Music Videos','Pyraminx Simulator','Tricks','Funny Images','Cube Timer','Online Solver','Electronic Cubes','Smart Eggs','Color Patterns','Notation','Neo Cubes','Unsolvable Cube','Beginner\'s Solution','Advanced Method','Clock Simulator','Funny Images','Jigsaw Puzzles','Like Ruwix','Mosaic Gallery','Sticker Mods','Square-1','Lubricate','Cube Solver','Puzzle Stickers','Puzzle Patterns','Largest Cube','Pyraminx','Rubik Quiz','Funny Images','Geek Prank','Puzzle Scrambler','YouTube Channels','3D Rubik Simulator','Advanced Method','Cube Timer','Beginner\'s Solution','Rubik\'s Clock','Rubik\'s Snake','Terminology','Rubik\'s Cube Solver','Puzzle Modding','15 Puzzle','Hungarian Rings','Speedcubing','Curriculum','Siamese Puzzles','Kilominx','Floppy Cube','Rubi\'s UFO','Funny Images','Non-Twisty Puzzles','Beginner\'s Solution','Stackmat Timers','Rubik\'s Cube Solver','Mathematics','Commercials','Cube Timer','Blindfolded Tutorial','Advanced Method','First Prototype','Bandaged Cubes','Like Ruwix','Geek Prank','Megaminx Simulator','Twisty Patterns','3D Rubik Simulator','Cube Solver','T-Shirts'];

jQuery(document).ready(function () {
	/*jQuery( ".entry-content" ).append( '<h3>Featured Aritcles</h3><div id="featuredArticlesWrap"></div>' );
    generateFeaturedArticles('#featuredArticlesWrap');*/
    generateFeaturedArticles('#sidebarFeaturedArticles');
    generateFeaturedArticles('#sidebarFeaturedArticles2');	
	if ((ftitle.length != flink.length) || (fimage.length != flink.length)) {
		console.log('Thumbnail arrow lengths dont match',ftitle.length,flink.length,fimage.length);
	};
	
/*AdBlock Begin*/
	setTimeout(function () {
		var myElem = document.getElementById('welcomeToRuwixMiddle');
		if (myElem === null) {
			console.log('NoAdFilterVerification');
		} else {
			if (document.getElementById('welcomeToRuwixMiddle').offsetHeight) {	// no adblock
				$('#welcomeToRuwix').fadeOut(500);
			} else {
				$('#welcomeToRuwixMiddle').fadeOut(0);
				document.getElementById("welcomeToRuwixMiddle").innerHTML = '<iframe style="border: none;width: 300px;height: 270px;overflow: hidden;" src="https://ruwix.com/noindex/whitelist/" width="300" height="270" scrolling="no"></iframe>';
				$('#welcomeToRuwixMiddle').fadeIn(800);
			}
		}
	}, 8000);
/*AdBlock END*/
	
});

function htmlForOneItem(meik) {
	var content = '<a class="featuredArticle" target="_blank" title="' + ftitle[meik] + '" href="' + flink[meik] + '"><img src="https://ruwix.com/pics/featured160/' + fimage[meik] + '.jpg" alt="' + ftitle[meik] + '" /><span><span>' + ftitle[meik] + '</span></span></a>';
	
	return content;
}

function generateFeaturedArticles(container) {
    var rand = Math.floor((Math.random() * (fimage.length - 4)));
	
	var content = '<div id="featuredArticles">' + htmlForOneItem(rand) + htmlForOneItem(rand+1) + htmlForOneItem(rand+2) + htmlForOneItem(rand+3) + '</div>';
	
	jQuery(container).html(content);
	
}
function generateFeaturedArticles5(container) {
    var rand = Math.floor((Math.random() * (fimage.length - 5)));
	
	var content = '<div id="featuredArticles">' + htmlForOneItem(rand) + htmlForOneItem(rand+1) + htmlForOneItem(rand+2) + htmlForOneItem(rand+3) + htmlForOneItem(rand+4) + '</div>';
	
	jQuery(container).html(content);
	
}
/*Featured random articles - END*/




/* Exit monitor - BEGIN */
var mouseX = 0;
var mouseY = 0;
var popupCounter = 0;
var eltelt5mp = 0;

document.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

jQuery(document).mouseleave(function () {
    if (mouseY < 100) {
        if ((popupCounter < 1) && (eltelt5mp == 1)){
            jQuery('#popupBox').show();
            jQuery('#popupShadow').show();
			generateFeaturedArticles5('#popupBoxFeatured');
			
			popupCounter ++;
        }
    }
});

jQuery(document).ready(function () {

	setTimeout(function(){	eltelt5mp = 1;	}, 4000);	

    jQuery("#popupBoxClose, #popupShadow").click(function(event) {
        jQuery("#popupBox").hide();
        jQuery("#popupShadow").hide();
    });
});

/* Exit monitor - END */




/*MegaMenu Begin*/

$(document).ready(function() {

  "use strict";

  $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
  //Checks if li has sub (ul) and adds class for toggle icon - just an UI

  $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
  //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

  $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");

  //Adds menu-mobile class (for mobile toggle menu) before the normal menu
  //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
  //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
  //Done this way so it can be used with wordpress without any trouble

  $(".menu > ul > li").hover(function(e) {
    if ($(window).width() > 943) {
      $(this).children("ul").stop(true, false).fadeToggle(150);
      e.preventDefault();
    }
  });
  //If width is more than 943px dropdowns are displayed on hover

  $(".menu > ul > li").click(function() {
    if ($(window).width() <= 943) {
      $(this).children("ul").fadeToggle(150);
    }
  });
  //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

  $(".menu-mobile").click(function(e) {
    $(".menu > ul").toggleClass('show-on-mobile');
    e.preventDefault();
  });
  //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)

});

/*MegaMenu END*/


/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top, .backToTopPage").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/


/*Pattern Gallery BEGIN*/
var galleryIndex = 0;
var galleryItems = 0;
var patternName = new Array();
var patternFile = new Array();
var patternAlg = new Array();
var patternDesc = new Array();
function openPattern(meik) {
	if (meik > galleryItems) {	meik = 0;	}
	if (meik < 0) {	meik = galleryItems;	}
	$('#openedPatternContent').html('<h2><span>' + (Number(meik) + 1) + '.</span> ' + patternName[meik] + '</h2><div class="patterninfo">' + patternDesc[meik] + '</div><div><strong>' + patternAlg[meik] + '</strong></div><div><img class="thisPatternImg" src="https://ruwix.com/pics/rubiks-cube/patterns/' + patternFile[meik] + '.svg" alt="' + patternName[meik] + '" /><iframe src="https://ruwix.com/widget/3d/?alg=' + patternAlg[meik] + '&setupmoves=' + patternAlg[meik] + '&hover=7&speed=800&flags=showalg&colors=U:y%20F:b%20R:r%20B:g%20L:o%20D:w" scrolling="no"></iframe></div><div class="patternRotsWrap"><span class="rots">' + patternAlg[meik] + '</span></div><div class="inverseAlg">Inverse: <strong>' + calculateInverseAlg(patternAlg[meik]) + '</strong></div>');
	galleryIndex = meik;
	renderAlgArrows();
	$('#wrapOpenedPattern, #patternGalleryShadow').fadeIn(300);
}
function calculateInverseAlg(alg) {
	var inv = alg.split(" ");
	var inverse = "";
	for (var i = inv.length-1; i >= 0; i--) {
		if (inv[i] == "F")	{	inverse += "F' ";	}
		if (inv[i] == "R")	{	inverse += "R' ";	}
		if (inv[i] == "U")	{	inverse += "U' ";	}
		if (inv[i] == "B")	{	inverse += "B' ";	}
		if (inv[i] == "L")	{	inverse += "L' ";	}
		if (inv[i] == "D")	{	inverse += "D' ";	}
		if (inv[i] == "f")	{	inverse += "f' ";	}
		if (inv[i] == "r")	{	inverse += "r' ";	}
		if (inv[i] == "u")	{	inverse += "u' ";	}
		if (inv[i] == "b")	{	inverse += "b' ";	}
		if (inv[i] == "l")	{	inverse += "l' ";	}
		if (inv[i] == "d")	{	inverse += "d' ";	}
		if (inv[i] == "M")	{	inverse += "M' ";	}
		if (inv[i] == "E")	{	inverse += "E' ";	}
		if (inv[i] == "S")	{	inverse += "S' ";	}
		if (inv[i] == "x")	{	inverse += "x' ";	}
		if (inv[i] == "y")	{	inverse += "y' ";	}
		if (inv[i] == "z")	{	inverse += "z' ";	}
		
		if (inv[i] == "F'")	{	inverse += "F ";	}
		if (inv[i] == "R'")	{	inverse += "R ";	}
		if (inv[i] == "U'")	{	inverse += "U ";	}
		if (inv[i] == "B'")	{	inverse += "B ";	}
		if (inv[i] == "L'")	{	inverse += "L ";	}
		if (inv[i] == "D'")	{	inverse += "D ";	}
		if (inv[i] == "f'")	{	inverse += "f ";	}
		if (inv[i] == "r'")	{	inverse += "r ";	}
		if (inv[i] == "u'")	{	inverse += "u ";	}
		if (inv[i] == "b'")	{	inverse += "b ";	}
		if (inv[i] == "l'")	{	inverse += "l ";	}
		if (inv[i] == "d'")	{	inverse += "d ";	}
		if (inv[i] == "M'")	{	inverse += "M ";	}
		if (inv[i] == "E'")	{	inverse += "E ";	}
		if (inv[i] == "S'")	{	inverse += "S ";	}
		if (inv[i] == "x'")	{	inverse += "x ";	}
		if (inv[i] == "y'")	{	inverse += "y ";	}
		if (inv[i] == "z'")	{	inverse += "z ";	}
		
		if (inv[i] == "F2")	{	inverse += "F2 ";	}
		if (inv[i] == "R2")	{	inverse += "R2 ";	}
		if (inv[i] == "U2")	{	inverse += "U2 ";	}
		if (inv[i] == "B2")	{	inverse += "B2 ";	}
		if (inv[i] == "L2")	{	inverse += "L2 ";	}
		if (inv[i] == "D2")	{	inverse += "D2 ";	}
		if (inv[i] == "M2")	{	inverse += "M2 ";	}
		if (inv[i] == "E2")	{	inverse += "E2 ";	}
		if (inv[i] == "S2")	{	inverse += "S2 ";	}
		if (inv[i] == "x2")	{	inverse += "x2 ";	}
		if (inv[i] == "y2")	{	inverse += "y2 ";	}
		if (inv[i] == "z2")	{	inverse += "z2 ";	}
	}	
	return inverse;
}

$(document).ready(function(){
	$("#patternGallery > div").each(function() {
		patternName[galleryIndex] = $(this).text();
		patternFile[galleryIndex] = $(this).attr("data-img");
		patternAlg[galleryIndex] = $(this).attr("data-alg");
		patternDesc[galleryIndex] = $(this).attr("data-desc");
		$(this).attr("data-index",galleryIndex);
		$(this).html('<h3>' + patternName[galleryIndex] + '</h3><img src="https://ruwix.com/pics/rubiks-cube/patterns/' + patternFile[galleryIndex] + '.svg" alt="' + patternName[galleryIndex] + '" />');
		
		galleryItems = galleryIndex;
		galleryIndex++;
	});

    $("#patternGallery > div").click(function(){
        openPattern($(this).attr('data-index'));
    });	
    $("#patternSliderLeft").click(function(){
        openPattern(Number(galleryIndex) - 1);
    });	
    $("#patternSliderRight").click(function(){
        openPattern(Number(galleryIndex) + 1);
    });	
    $("#closeOpenedPattern, #patternGalleryShadow").click(function(){
        $("#patternGalleryShadow, #wrapOpenedPattern").fadeOut(300);
    });
});
/*Pattern Gallery END*/








