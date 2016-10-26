// JavaScript Document

$(document).ready(function() {
	$(".qj-top .nav li").click(function () {
		if($(this).hasClass("active")){
			$(this).removeClass("active");	
		}else{
			$(this).addClass("active");
		}	
	   $(this).siblings().removeClass("active");
	});
});