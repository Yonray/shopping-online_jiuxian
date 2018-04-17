$(function(){
	// 顶部状态栏*************************************************************
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

	// 顶部搜索框*************************************************************
	$(".searchHome .searchForm").click(function(){
		$(".searchHome .searchForm").val("");
	});

	// 顶部导航*************************************************************
	$(".navMid ul li").eq(0).css({"background":"#b40c10"});
	$(".navMid ul li:gt(0)").hover(function(){
		$(this).css({"background":"#b40c10"});
	},function(){
		$(this).css({"background":"transparent"});
	});
// 左侧菜单栏*************************************************************
	$(".leftMenu .menuLi").hover(function(){
		n=$(this).index();
		y=-n*81-n;
		$(this).css({"background":"rgb(241,241,241)","border-left-color":"#ce171f"});
		$(this).find(".menuBox").css({"top":y+"px"}).show();
	},function(){
		$(this).css({"background":"#fff","border-left-color":"#fff"});
		$(this).find(".menuBox").hide();
	});
	//********* 幻灯片插件**************************
	$("#theTarget").skippr({
    transition: 'fade',
    speed: 2000,
    navType: 'bubble',
    arrows: false,
    autoPlay: true,
    autoPlayDuration: 3000,
    keyboardOnAlways: false,
    });
    // 疯狂抢购主tab组*****************************
    $(".cSaleLeft .cSLNav ul li").mouseover(function(){
    	$(".cSaleLeft .cSLNav ul li").removeClass("on");
    	$(this).addClass("on");
    	idx=$(this).index();
    	$(".lBodyTab").hide();
    	$(".lBodyTab").eq(idx).show();
    });
     $(".cSRTop .cSRTopNav ul li").mouseover(function(){
    	$(".cSRTop .cSRTopNav ul li").removeClass("on");
    	$(this).addClass("on");
    	idx=$(this).index();
    	$(".cSRTopTab").hide();
    	$(".cSRTopTab").eq(idx).show();
    });
     // ***********轮播，待完善*******
	$("#theTarget2").skippr2();

    $("#theTarget3").skippr3();

    // 限时抢购栏
    cSaleLeft = 0;
    $(".rTitleRight span").click(function(){
    	$(".rTitleRight span").removeClass("on");
    	$(this).addClass("on");
    	cSaleinx = $(this).index();
    	
    	cSaleLeft = -1200*cSaleinx;
    	$(".raceBodyCon").animate({"left":cSaleLeft+"px"},500);
    	// $(".raceBodyCon .raceList").eq(cSaleinx).show();
    });
     $(".raceBody  i.raceLeftArrow").click(function(){
    	if(cSaleLeft<0&&cSaleLeft>=-2400){
    		cSaleLeft = cSaleLeft+1200;
    		$(".raceBodyCon").animate({"left":cSaleLeft+"px"},500);
    		saleNav();
    	}
    });
    $(".raceBody  i.raceRightArrow").click(function(){
    	if(cSaleLeft>=-1200&&cSaleLeft<=0){
    		cSaleLeft = cSaleLeft-1200;
    		$(".raceBodyCon").animate({"left":cSaleLeft+"px"},500);
    		saleNav();
    	}
    });
    function saleNav(){
    	var navIndex = cSaleLeft/(-1200);
    	$(".rTitleRight span").removeClass("on");
    	$(".rTitleRight span").eq(navIndex).addClass("on");
    }
    
    // ***1楼层白酒馆*****
	slidr.create('slidr-img',{ "breadcrumbs":"true","controls":"none"}).auto();
	slidr.create('slidr-img2',{ "breadcrumbs":"true","controls":"none"}).auto();
	slidr.create('slidr-img3',{ "breadcrumbs":"true","controls":"none"}).auto();
	slidr.create('slidr-img4',{ "breadcrumbs":"true","controls":"none"}).auto();
	slidr.create('slidr-img5',{ "breadcrumbs":"true","controls":"none"}).auto();

	$(".f1b_rTit_r a").mouseover(function(){
		$(".f1b_rTit_r a").removeClass("on");
		var index = $(this).index();
		$(this).addClass("on");
		
		$(".f1b_rBox ul").removeClass("on");
		$(".f1b_rBox ul").eq(index).addClass("on");
	});
	// 2楼*修复底部js*****************************
	$(".f1b_rTit_r2 a").mouseover(function(){
		$(".f1b_rTit_r2 a").removeClass("on");
		var index = $(this).index();
		$(this).addClass("on");
		
		$(".f1b_rBox2 ul").removeClass("on");
		$(".f1b_rBox2 ul").eq(index).addClass("on");
	});

	// 官方推荐*******************************************
	$(".recomTitle ul li").mouseover(function(){
		$(".recomTitle ul li").removeClass("on");
		$(this).addClass("on");
		var index = $(this).index();
		tabLeft = 105*index;

		$(".recomSlider").animate({"left":tabLeft+"px"},200);
		$(".recomLogoCon").removeClass("logoOn");
		$(".recomLogoCon").eq(index).addClass("logoOn");
	});
	// footer
	$(".mailCon input").focus(function(){
		$(".mailCon span").hide();
	});

	// 右侧bar
	$(".rbarItem").hover(function(){
		$(this).css({"background":"#c00"});
		$(this).find("i").addClass("on");

	},function(){
		$(this).css({"background":"#fff"});
		$(this).find("i").removeClass("on");;
	});
	$(".rbarTopUser").hover(function(){
		$(".userBox").show();
	},function(){
		$(".userBox").hide();
	});
	$(".rbarTopStore").hover(function(){
		$(".userBox").css({"top":61+"px"}).show();
	},function(){
		$(".userBox").css({"top":-1+"px"}).hide();
	});

	// 右侧下部
	$(".botItem").hover(function(){
		$(this).css({"background":"#c00"});
		$(this).find("i").addClass("on");

	},function(){
		$(this).css({"background":"#fff"});
		$(this).find("i").removeClass("on");;
	});

	$(".returnTop").click(function(){
		 scrollTop_y = $(document).scrollTop();
		 scrollS = 50;
	
		interval = setInterval(function(){
			if(scrollTop_y>=0){
				scrollTop_y = scrollTop_y-scrollS;
				$(document).scrollTop(scrollTop_y);
			}
			else{
				$(document).scrollTop(0);
				clearInterval(interval);
			}
		},2);
	});
	// 左侧动态效果*******************
	$(".floorN").mouseenter(function(){
		
		
		floorName = $(this).attr("name");
		
		$(this).find(".a1").text(floorName).addClass("on").animate({"width":"70px"},200);	
		
	});

	$(".floorN .a1").mouseout(function(){
		flags=$(this).data("flag");
		fName = $(this).attr("name");
		if(flags=="a"){
			
			$(this).animate({"width":"30px"},200,function(){
				$(this).addClass("on").text(fName);
			});
		}
		else{
			$(this).animate({"width":"30px"},200,function(){
				$(this).removeClass("on").text(fName);
			});
		}
		
	});
	

	$(".floorReturn .a2").hover(function(){
		$(".floorReturn .a2 i").addClass("on");
	},function(){
		$(".floorReturn .a2 i").removeClass("on");
	});
	$(".floorReturn .a2").click(function(){
		 scrollTop_y = $(document).scrollTop();
		 scrollS = 50;
	
		interval2 = setInterval(function(){
			if(scrollTop_y>=0){
				scrollTop_y = scrollTop_y-scrollS;
				$(document).scrollTop(scrollTop_y);
			}
			else{
				$(document).scrollTop(0);
				clearInterval(interval2);
			}
		},2);
	});


// 左侧滚动监听********************************************

	$(document).scroll(function(){
		high = $(document).scrollTop();

		f1Top=$(".floor1").offset().top-80;
		f2Top=$(".floor2").offset().top-50;
		f3Top=$(".floor3").offset().top-50;
		f4Top=$(".floor4").offset().top-50;
		f5Top=$(".floor5").offset().top-50;
		f6Top=$(".recommend").offset().top-50;

		$(".floorN .a1").removeClass("on");
		$(".floorN .a1").data({"flag":" "})
		if(high>=f1Top&&high<f2Top){
			$(".leftBar .floorOne .a1").data({"flag":"a"}).addClass("on").text("1F");
		}
		else if(high>=f2Top&&high<f3Top){
			$(".leftBar .floorTwo .a1").data({"flag":"a"}).addClass("on").text("2F");
		}
		else if(high>=f3Top&&high<f4Top){
			$(".leftBar .floorThree .a1").data({"flag":"a"}).addClass("on").text("3F");
		}
		else if(high>=f4Top&&high<f5Top){
			$(".leftBar .floorFour .a1").data({"flag":"a"}).addClass("on").text("4F");
		}
		else if(high>=f5Top&&high<f6Top){
			$(".leftBar .floorFive .a1").data({"flag":"a"}).addClass("on").text("5F");
		}
		high = $(document).scrollTop();
		
		if(high>=f1Top){
			$(".leftBar").show(500);
			
		}
		else if(high<f1Top){
			$(".leftBar").hide(500);

		}

	});

	$(".floorOne").click(function(){
		$(document).scrollTop(f1Top);
	});
	$(".floorTwo").click(function(){
		$(document).scrollTop(f2Top);
	});
	$(".floorThree").click(function(){
		$(document).scrollTop(f3Top);
	});
	$(".floorFour").click(function(){
		$(document).scrollTop(f4Top);
	});
	$(".floorFive").click(function(){
		$(document).scrollTop(f5Top);
	});
	
});