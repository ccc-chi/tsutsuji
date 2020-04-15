$(function() {
  /* navigation */

  $(".menu").on("click", function(){
    $("#navigation").toggleClass("is_show");
    $(this).toggleClass("close");
    //背景を固定
    $("html").toggleClass("fixed");
  });


  /* slide show */
   var count = $("#slide li").length;
   var current = 1;
   var next = 2;
   var interval = 3000;
   var duration = 500;
   var timer;

   timer = setInterval(slideTimer, interval);

   function slideTimer(){
 	$("#slide li:nth-child("+current+")").fadeOut(duration);
 	$("#slide li:nth-child("+next+")").fadeIn(duration);
 	current = next;
 	next++;
 	if( next>count ){
 	  next = 1;
 	}
 	$("#dots a").removeClass("is_current");
 	$("#dots li:nth-child("+current+") a").addClass("is_current");
   }

   $("#dots a").click(function(){
 	next = $(this).html();
 	clearInterval(timer);
 	timer = setInterval(slideTimer, interval);
 	slideTimer();

 	return false;
   });

});
