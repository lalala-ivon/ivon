
$(function(){
	var N=0;
	var Now=$(".md_indexShow li").length-1;
	
	
	$(".md_indexShow li").eq(0).css({opacity:1}).siblings().css({opacity:0});
	$(".md_picList li").click(function(){
		N= $(this).index();
		$(this).addClass("on").siblings().removeClass("on")
		$(".md_indexShow li").eq(N).stop().animate({opacity:1}).siblings().stop().animate({opacity:0});
	});

	$(".next").click(function (){

		if(N<Now){ 
			N=N+1;
		}else {
			N=0;
		}
		// console.log(N);
		$(".md_picList li").eq(N).addClass("on").siblings().removeClass("on")
		$(".md_indexShow li").eq(N).stop().animate({opacity:1}).siblings().stop().animate({opacity:0});
		clearInterval(TT);
		return false;
		
	});
	$(".prev").click(function(){

		if(N>0){
			N=N-1;
		}else {
			N=Now;
		}
		console.log(N);
		$(".md_picList li").eq(N).addClass("on").siblings().removeClass("on")
		$(".md_indexShow li").eq(N).stop().animate({opacity:1}).siblings().stop().animate({opacity:0});
		return false;
	});

	// 輪播
	function myTime (){
		if(N<Now){ 
			N=N+1;
		}else {
			N=0;
		}
		$(".md_picList li").eq(N).addClass("on").siblings().removeClass("on")
		$(".md_indexShow li").eq(N).stop().animate({opacity:1}).siblings().stop().animate({opacity:0});
	}

	var TT = setInterval(myTime,6000);

	$(".th_indexShow").hover(function(){
		clearInterval(TT);
	}, function(){
		if(TT!=0){
			// 以防萬一
			clearInterval(TT);
			TT = setInterval(myTime,6000);
		}
	})


})