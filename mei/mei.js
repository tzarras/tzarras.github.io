$(document).ready(function() {


		$(".box").click(function() {

			var boxHeight= $(this).height()+2;
					
				// height of this div info //
					
			var self = $(this);
			var h = $(".titles",this).height()+40;

			$(".box").not(this).css({"height": "71px"}).removeClass("open");
			$('.images,.iframe-c').hide();
			$(".imagesection").scrollTop(0);

    		var index = $(this).index(".box");

					// if box is already open, don't scroll //

			if ($(".box").hasClass("open")){
						// don't. move. //
					$(".box").css({"height": "71px"}).removeClass("open");
					$('.images,.iframe-c').hide();
			} else {
					setTimeout(function(){
    				$(".archive").animate({scrollTop: Math.floor(index*boxHeight)-71},500);},300);
    				setTimeout(function(){
					$(self).not(".box:first-child").css("height",h).addClass("open");
					$('.images[rel=div' + self.attr('target') +'],.iframe-c[rel=div' + self.attr('target') +']').fadeIn(1000);
					},1000);
			}
		
		});



		$(".foot").click(function(){

			setTimeout(function(){
    				$(".archive").animate({scrollTop: 8*73},500);}
    		,300);

					$(".box").css("height","71px");
					$('.images,.iframe-c').hide();
		});



		$(".box:first-child").click(function(){
			
			if ($(window).width() < 736){

			// do nothing //

			} else {

				tog();

			}
		});

		$(".bigimage").click(function(){

			//var hh = $(".box.open").height()+40;

				$(".info").css({"font-size":"36"});
				$(".left").css("width","80%");
				$(".right").css("width","20%");
				$(".iframe-c").css("margin-top","28%");

				//if ($(".box").hasClass("open")) {
					//$(this).css("height",hh)
				//}

		});

		$(".text").click(function(){

			//var hh = $(".box.open").height()+40;

				$(".tip").hide();
				$(".info").css({"font-size":"18"});
				$(".left").css("width","25%");
				$(".right").css("width","75%");
				$(".iframe-c").css("margin-top","5%");

				//if ($(".box").hasClass("open")) {
					//$(this).css("height",hh)
				//}
		});


});

		var once = false;

		function tog() {

		    if(once=== false) {
		    	once = true;
		        var winH = $(window).height()
					$(".box:first-child").css({"height":winH,"z-index":"999"});
					$(".bigimage,.text").hide(100);
					$(".mei").show();
				setTimeout(function(){
					$(".mei").css({"width":"25%","right":"20%","margin-top":"100px"});
				},200);

		    } else {

		    	once = false;
					$(".box:first-child").css({"height":"71","z-index":"999"});
					$(".mei").css({"width":".5%","right":"10%","margin-top":"0"});
				setTimeout(function(){
					$(".mei").hide();
				},800);
				setTimeout(function(){
					$(".bigimage,.text").show();
				},900);

		    }
		    
		}