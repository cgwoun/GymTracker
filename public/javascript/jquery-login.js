$(document).ready(function(){
    // $(".infoSectionClass").click(function() {
    // 	$(".infoSectionClass").hide();
    // });
	$(".signup").hide();
	$("#notice").hide();
    $("#signup").click(function(){
    	$(".signup").show();
    	$(".login").hide();
    	$("#notice").hide();
    	$(".createAccount").show();

 	});
 	$("#login").click(function(){
    	$(".login").show();
    	$(".signup").hide();
 	});
 	$("#submitSignup").click(function(){
 		$("#notice").show();
 		$(".createAccount").hide();
 	});
 	$("#cancelLogIn").click(function(){
 		window.history.back();
 	});
});
