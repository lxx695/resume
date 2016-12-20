$(".button-collapse").sideNav();
/**视差滚动**/
$(function(){
	var $sceneBack = $('.scene_back');
	myScroll();	//初始化
	$(window).on('scroll',function(){
		myScroll()
	});	//监听滚动事件,改变top值
	
	//原理: 当前top值 + 滚动距离*不同的系数    实现不同速度的运动
	function myScroll(){
		$sceneBack.css({
			top:$(window).scrollTop()*$sceneBack.attr('data-speed')
		})
	}
})

 function myScroll1(obj){
 	var  top1=$('.obj').scrollTop();
 	
 }
var nav= document.getElementsByTagName('nav')[0];
var scrollT;
window.onscroll=function(){
scrollT= document.documentElement.scrollTop|| document.body.scrollTop;
if(scrollT>50){
nav.style.cssText="position:fixed;top:0; z-index: 1999;background: rgba(0,0,0,.65) !important;";
$('nav .line1').addClass('active');
}else{
nav.style.cssText="position:relative;background: rgba(0,0,0,0);";
$('nav .line1').removeClass('active');
	}
}
var winH=$(window).height();
$('nav .side-nav').height(winH);
$(window).resize(function(){
	winH=$(window).height();
	$('nav .side-nav').height(winH);
})

$('.post').click(function(){
	$(this).css("background","#fec107")
})
function openMD(){
			$('#modal1').openModal();
		}
/*********************/
$(function(){
	$('.openLeft').addClass('active');
	$('.openRight').addClass('active');
})
function remove(){
	$('#depreload').remove();
}
setTimeout(remove,1000)
/******************/
$('.contact-me .qq-box').hover(function(){
	$('.contact-me .xinlang').hide();
	$('.contact-me .wx').hide();
	$('.contact-me .qq').show();
},function(){
	$('.contact-me .qq').hide();
})
$('.contact-me .wx-box').hover(function(){
	$('.contact-me .xinlang').hide();
	$('.contact-me .qq').hide();
	$('.contact-me .wx').show();
},function(){
	$('.contact-me .wx').hide();
})
$('.contact-me .xinlang-box').hover(function(){
	$('.contact-me .xinlang').show();
	$('.contact-me .qq').hide();
	$('.contact-me .wx').hide();
},function(){
	$('.contact-me .xinlang').hide();
})
				
$('.nav li').click(function(){
	var index=$(this).index();
	$('.nav li').removeClass('active')
	$('.nav li').eq(index).addClass('active')
	$(this).addClass('active')
})
