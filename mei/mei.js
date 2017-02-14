$(document).ready(function() {

// nothing to see here, pretty simple //

// keeping this just in case //

//var isResizing = false,
    //lastDownX = 0;

//$(function () {
    //var container = $('.container'),
        //left = $('.left'),
        //right = $('.right'),
        //handle = $('.drag');

    //handle.on('mousedown', function (e) {
        //isResizing = true;
        //lastDownX = e.clientX;
    //});

    //$(document).on('mousemove', function (e) {
        // don't do anything if we aren't resizing.
        //if (!isResizing) 
            //return;
        
        //var offsetRight = container.width() - (e.clientX - container.offset().left);

        //left.css('right', offsetRight);
        //right.css('width', offsetRight);
    //}).on('mouseup', function (e) {
        // stop 
        //isResizing = false;
    //});
//});

    // changes
    //var currentlySelectedBox;
    //var setHeight = function () {
        //if (currentlySelectedBox) {
            //var h = currentlySelectedBox.height()+30;
            //currentlySelectedBox.css("height", h);
        //}
    //}

$(".box").click(function() {
		var boxHeight= $(this).height()+1;
// height of this div info //
		var h = $(".titles",this).height()+30;
		var self = $(this);
		
		$(this).delay(800).css("height",h);
		$(".box").not(this).css({"height": "88px"});
		
		$('.images,.iframe-c').hide();
        $('.images[rel=div' + self.attr('target') +'],.iframe-c[rel=div' + self.attr('target') +']').fadeIn(200);
        $(".imagesection").scrollTop(0);
		
		var index = $(this).index(".box");

		setTimeout(function(){
		$(".archive").animate({scrollTop: Math.floor(index*boxHeight)},500);
	},250);
		

});

$(".bigimage").click(function(){
         //changes

$(".text").css({ "background-color":"#01ff70","width":"50px"});
$(".bigimage").css({ "background-color":"black","width":"20px"});
$(".title,.year").css("font-size","34");
$(".info,a").css({"font-size":"34"});
$(".left").css("width","80%");
$(".right").css("width","20%");
$(".iframe-c").css("margin-top","30%");


});

$(".text").click(function(){
	
$(".tip").hide();
$(".text").css({ "background-color":"black","width":"20px"});
$(".bigimage").css({"background-color":"#01ff70","width":"50px"});
$(".info,a").css({"font-size":"18"});
$(".title,.year").css("font-size","34");
$(".left").css("width","25%");
$(".right").css("width","75%");
$(".iframe-c").css("margin-top","10%");


});

//$(".box",this).mouseover(function(){
	//$(".title,.year",this).css({"-webkit-text-stroke-width":"1px","-webkit-text-stroke-color":"#542a00","color":"white"});
//}).mouseout(function(){
	//var filter = 'blur(0px)';
	//$(".title,.year",this).css({"-webkit-text-stroke-width":"0","-webkit-text-stroke-color":"none","color":"black"});
//});




});