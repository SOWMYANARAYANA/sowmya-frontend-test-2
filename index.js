$ (document).ready(function(){
	$("#a").hide();
	$("#about").click(function(){
		$("#a").show();
		$("#H").hide();
	});
	$("#home").click(function(){
		$("#H").show();
		$("#a").hide();
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
 // scroll body to 0px on click
 $('#back-to-top').click(function () {
 	$('#back-to-top').tooltip('hide');
 	$('body,html').animate({
 		scrollTop: 0
 	}, 800);
 	return false;
 });
 
 $('#back-to-top').tooltip('show');
 


$("#c").click(function(){
	$("#a").show();
	$("#H").hide();
});
$("#p").click(function(){
	$("#a").show();
	$("#H").hide();
});
$("#q").click(function(){
	$("#a").show();
	$("#H").hide();
});
$("#r").click(function(){
	$("#a").show();
	$("#H").hide();
});
});
