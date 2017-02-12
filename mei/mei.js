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

$(".box",this).click(function() {

// height of this div info //
		var h = $(".titles",this).height()+30;
		var self = $(this);
		var a= $(".archive").height();

		$(this).css("height",h).addClass("active");
		$(".box").not(this).css({"height": "88px"}).removeClass("active");
		$('.images,.iframe-c').hide();
        $('.images[rel=div' + self.attr('target') +'],.iframe-c[rel=div' + self.attr('target') +']').fadeIn(200);
        $(".imagesection").scrollTop(0);
		
		setTimeout(function() {
			$('.archive').animate({ scrollTop: $('.active').offset().top}, 300);
		}, 60);

		

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

$(".box",this).mouseover(function(){
	$(".title,.year",this).css({"-webkit-text-stroke-width":"1px","-webkit-text-stroke-color":"#542a00","color":"white"});
}).mouseout(function(){
	$(".title,.year",this).css({"-webkit-text-stroke-width":"0","-webkit-text-stroke-color":"none","color":"black"});
});



});