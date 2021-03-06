$(document).ready(function(){
  var headerNav = $("header");

  $(window).scroll(function(){
    if($(window,"body").scrollTop() > 50){
      headerNav.attr("id","header").css({"padding":"15px 0","position":"fixed","z-index":"10","top":"0","transition":"all .5s"});
      $("#header h1 a").css({"width":"85%","height":"auto","paddingTop":"2px"});
      $("#header h1 img").attr("src","img/logo/pixar_black_logo.png");
      $("header .menu").css({"position":"static"});
      $("header .menu span").css({"backgroundColor":"#444"});
      $("#mobileNavWrap .menu").css({"top":"22px"});
    }else{
      headerNav.attr("id","mainHeader").css({"padding":"18px 0 0"});
      $("#mainHeader h1 a").css({"width":"100%","height":"100%"});
      $("#mainHeader h1 img").attr("src","img/logo/logo.png");
      $("header .menu").css({"position":"absolute"});
      $("header .menu span").css({"backgroundColor":"#fff"});
      $("#mobileNavWrap .menu").css({"top":"33px"});
    }

    if($(window,"body").scrollTop()>1000){
      $("#container .scrollTopBtn").css({"display":"block"});
    }else{
      $("#container .scrollTopBtn").css({"display":"none"});
    }
  });

	$("#container .scrollTopBtn").bind("click focusin",function(){
		var body = $("html, body");
		body.stop().animate({scrollTop:0}, 500, 'swing', function() {});
	});

  $("#header #nav .menu, #mainHeader #nav .menu").bind("click focusin",function(){
		$("#wrapper").addClass("wrapMove");
		$("#mobileNavBg").css({"display":"block"});

		$("#mobileNavWrap #mobileNav,#mobileNavWrap .menu").css({"visibility":"visible","opacity":"1"});
		$(this).css({"visibility":"hidden","opacity":"0"});

		$(".menu").children(".firstLine").css({"transform":"rotateZ(45deg)","margin-bottom":"-8px","margin-top":"5px"});
		$(".menu").children(".secondLine").css({"display":"none"});
		$(".menu").children(".lastLine").css({"transform":"rotateZ(-45deg)","margin-bottom":"-8px","margin-top":"5px"});
	});

	$("#header #nav .menu, #mainHeader #nav .menu").focus(function(){
		$("#mobileNav .loginJoinWrap a:first").focus();

		$("#mobileNav ul li:last a").on('keydown', $(this), function(e) {
			if (e.which == 9) {
				$("#mobileNavWrap .menu").focus();
			}
		});
	});

  $("#mobileNav a").hover(function(){
		$("#mobileNav a").css({"textDecoration":"none"});

		if($(this).parent().attr("class") == "loginJoinWrap"){
			$(this).css({"textDecoration":"underline"});
		}
	});

	$("#mobileNavBg,#mobileNavWrap .menu").bind("click focusin",function(){
		$("#wrapper").removeClass("wrapMove");
		$("#mobileNavBg").css({"display":"none"});

		$("#mobileNavWrap #mobileNav,#mobileNavWrap .menu").css({"visibility":"hidden","opacity":"0"});
		$("#header #nav .menu, #mainHeader #nav .menu").css({"visibility":"visible","opacity":"1"});

		$(".menu .secondLine").css({"display":"block"});
		$(".menu .firstLine,.menu .lastLine").css({"transform":"rotateZ(0)","margin-bottom":"5px","margin-top":"0"});

		$("header h1 a").focus(function() {
			setTimeout(function(){
				var indexA = $(".movieInfo a");
				var otherPageA = $("#container").find("a").eq(1);
				var footerA = $("#footer a:first");
				indexA.focus();
				otherPageA.focus();
				if(otherPageA.length == 0){
						footerA.focus();
				}
			},100);
		});
	});
});
