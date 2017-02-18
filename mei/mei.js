$(document).ready(function() {


			$(".box").click(function() {

					var boxHeight= $(this).height()+1;
					
					// height of this div info //
					
					var self = $(this);
					var h = $(".titles",this).height()+40;

					$(".box").not(this).css({"height": "70px"});
					$('.images,.iframe-c').hide();
			        $('.images[rel=div' + self.attr('target') +'],.iframe-c[rel=div' + self.attr('target') +']').fadeIn(200);
			        $(".imagesection").scrollTop(0);


    				var index = $(this).index(".box");

					setTimeout(function(){
    					$(".archive").animate({scrollTop: Math.floor(index*boxHeight)-71},450);
    				},100);
					

					setTimeout(function(){
						$(self).not(".box:first-child").css("height",h);
					},1000);


					scro();
				
			});

		$(".box:first-child").click(function(){
			tog();
		});

		$(".bigimage").click(function(){
		         //changes

				$(".text").css({ "border-color":"transparent #01ff70 transparent transparent"});
				$(".bigimage").css({ "border-color":"black transparent transparent transparent"});
				$(".title,.year").css("font-size","28");
				$(".info,a").css({"font-size":"36"});
				$(".left").css("width","80%");
				$(".right").css("width","20%");
				$(".iframe-c").css("margin-top","30%");


		});

		$(".text").click(function(){
			
				$(".tip").hide();
				$(".text").css({ "border-color":"transparent black transparent transparent"});
				$(".bigimage").css({"border-color":"#01ff70 transparent transparent transparent"});
				$(".info,a").css({"font-size":"18"});
				$(".title,.year").css("font-size","28");
				$(".left").css("width","25%");
				$(".right").css("width","75%");
				$(".iframe-c").css("margin-top","10%");

		});


});

var once = false;

function tog() {
    if(once=== false)
    {
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

var open = false;
var previousTarget=null;

function scro() {
    if(open=== false) {
    	open = true;

        
    } else {
 		
 	
		
    }
    
}