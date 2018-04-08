$(function(){
	// 顶部状态栏
	$(".myJiuXianBox").hide();
	$(".th-l1").hover(function(){
		$(".th-l1").css({"background":"#fff"});
		$(".th-l1 .myJiuXian s.thIcon").css({"transform":"rotate(180deg)"});
		$(".myJiuXianBox").show();

		},function(){
		$(".th-l1 .myJiuXian s.thIcon").css({"transform":"rotate(0deg)"});
		$(".th-l1").css({"background":"transparent"});
		$(".myJiuXianBox").hide();
	});

	$(".topHeaderRight .th-l6").hover(function(){
		$(".topHeaderRight .th-l6 .th-l6-2D").show();
	},function(){
		$(".topHeaderRight .th-l6 .th-l6-2D").hide();
	});

	$(".topHeaderRight .th-l7").hover(function(){
		$(".th-l7").css({"background":"#fff","height":"27px"});
		$(".th-l7 .subNavIcon2").css({"transform":"rotate(180deg)"});
		$(".th-l7 .subNavBox").show();
	},function(){
		$(".th-l7").css({"background":"transparent"});
		$(".th-l7 .subNavIcon2").css({"transform":"rotate(0deg)"});
		$(".th-l7 .subNavBox").hide();
	});

	$(".topHeaderRight .th-l8").hover(function(){
		$(".th-l8").css({"background":"#fff","height":"27px","border-left":"1px solid #e5e5e5","border-right":"1px solid #e5e5e5"});
		$(".th-l8 .cusServiveIcon2").css({"transform":"rotate(180deg)"});
		$(".th-l8 .cusServiceBox").show();
	},function(){
		$(".th-l8").css({"background":"transparent","border-color":"transparent"});
		$(".th-l8 .cusServiceIcon2").css({"transform":"rotate(0deg)"});
		$(".th-l8 .cusServiceBox").hide();
	});

	// 顶部搜索框
	$(".searchHome .searchForm").click(function(){
		$(".searchHome .searchForm").val("");
	});

	// 顶部导航
	$(".navMid ul li").eq(0).css({"background":"#b40c10"});
	$(".navMid ul li:gt(0)").hover(function(){
		$(this).css({"background":"#b40c10"});
	},function(){
		$(this).css({"background":"transparent"});
	});

});