
$(window).on("load",function() {
	$(window).scroll(function() {
	var windowBottom = $(this).scrollTop() + $(this).innerHeight();
	$(".fade").each(function() {
		var objectBottom = $(this).offset().top + $(this).outerHeight();
			  
		if (objectBottom < windowBottom) {
			if ($(this).css("opacity")==0) {$(this).fadeTo(300,1);}
		} else {
			if ($(this).css("opacity")==1) {$(this).fadeTo(300,0);}
			}
		});
		  }).scroll();
		});
				
				//right now the class on what you want to fade is .fade, change to your liking.
