$(document).ready(function() {

	// nothing to see here, pretty simple //

	// keeping just in case //

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

	$(".bigimage > .plus").css("color","black");


	$(".box",this).click(function() {

		// height of specific info //

		var h = $(".info",this).height()+75;
		var self = $(this);

		$(this).css("height", h);
		$(".box").not(this).css("height","31px");
		$('.images').hide();
        $('.images[rel=div' + self.attr('target') +']').fadeIn(200);
        $(".imagesection").scrollTop(0);

	});

	$(".bigimage").click(function(){

		$(".text").css({"width":"15%"});
		$(".bigimage").css({"width":"85%"});
		$(".info,a").css({"font-size":"18"});
		$(".left").css("width","25%");
		$(".right").css("width","75%");
		$(".bigimage > .plus").css("color","white");

		setTimeout(function(){
			$(".text > .plus").css("color","black");
		},700);


	});

	$(".text").click(function(){
		$(".text").css({"width":"85%"});
		$(".bigimage").css({"width":"15%"});
		$(".info,a").css("font-size","33");
		$(".left").css("width","85%");
		$(".right").css("width","15%");
		$(".text > .plus").css("color","white");

		setTimeout(function(){
			$(".bigimage > .plus").css("color","black");
		},700);

	});


});