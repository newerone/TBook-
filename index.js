    $(function){
	$("#all li").mouseover(function(){
		$(this).css("backgroundColor":"#ffoff").siblings().css("background","white");
		$(this).css({"backgroundColor":"red","fontSize":"9px"}).siblings().hide();
	});
	
	$(window).scroll(function(){
		var _top=$(window).scrollTop();
	});
	
	$(".btn ul li").hover(function(){
		$(this).addClass("one").siblings().removeClass("one");
		index=$(this).index();
		i=index;
		$(".pic a").eq(index).stop().fadeIn(500).show().siblings().stop().fadeIn(500).hide();
	});
	
	var i=0;
	var t=setInterval(autoplay,1000);
	function autoplay(){
		i++;
		if(i>5)i=0;
		$(".btn ul li").eq(i).addClass("one").siblings().removeClass("one");
		$(".pic a").eq(i).stop().fadeIn(500).show().siblings().stop().fadeIn(500).hide();
	}
	
	$("#banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(autoplay,1000);
	});
}
