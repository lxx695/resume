$('#myCarousel').carousel({
			  	interval: 5000
			})
$('#user').carousel({
			  	interval:1000000000
			})
$('#user1').carousel({
			  	interval:1000000000
			})
/*$(function(){
	var winTop=$(window).scrollTop();
	if(winTop>500){
		$('nav').addClass('navbar-fixed-top')
	}else{
		$('nav').removeClass('navbar-fixed-top')
	}
})
*/
document.querySelector('html').style.fontSize=document.documentElement.clientWidth/10+'px';
var nav= document.getElementsByTagName('nav')[0];
var topPic=document.getElementById('topPic');
var navRight=document.getElementById('navRight');
var scrollT;
var winW=$(window).innerWidth();
window.onscroll=function(){
scrollT= document.documentElement.scrollTop|| document.body.scrollTop;
if(scrollT>200){
nav.style.cssText="position:fixed;top:50px; z-index: 1000;background: rgba(255,255,255,.95);";
var conW=$('.container').width();
$("nav").width(conW);
topPic.style.cssText="position:fixed;top:0;z-index: 1000;"
$('.flxed-box').show();
$('.btn-top').show();
/*$('.hide-top').show();*/
}else{
nav.style.cssText="position:;";
topPic.style.cssText="position:;"
$('.flxed-box').hide();
$('.btn-top').hide();
	}
}
$('.wxBox').mouseover(function(){
	$('.wei-wrapper').show();
})
$('.wxBox').mouseleave(function(){
	$('.wei-wrapper').hide();
})
$('.scrollTop').click(function(){
	$(window).scrollTop(0)
})
$('.phone').mouseover(function(){
	$('.app-wraper').show();
})
$('.phone').mouseleave(function(){
	$('.app-wraper').hide();
})
$('.weixin').mouseover(function(){
	$('.weixin-wraper').show();
})
$('.weixin').mouseleave(function(){
	$('.weixin-wraper').hide();
})
/****************专题***************************/
$('.btn-x').click(function(){
	$('#topPic').hide();
})

var imgBoxW=$('.img-box1').width();
var imgBox2W=$('.img-box2').width();
$('.img-box1').height(imgBoxW);
$('.img-box2').height(imgBox2W);
$(window).resize(function(){
	imgBoxW=$('.img-box1').width();
    imgBox2W=$('.img-box2').width();
	$('.img-box1').height(imgBoxW);
	$('.img-box2').height(imgBox2W);
})
$(".btn-top").click(function(){
	$(window).scrollTop(0)
})
	/*轮播图插件**/
$(function () {
	var container = $('#container');
	var containerW=$('#container').width();
	var imgW=$('#list img').width();
	containerW=imgW*2;
	var imgW1=-1*imgW;
	var list = $('#list');
	var listW = $('#list').width();
	var imgNum=$('#list img').size();
	listW=imgW*imgNum+'px';
	$('#container').width(containerW);
	$('#list').width(listW);
	$('#list').css({
		"left":imgW1*2,
		"margin-left":imgW/2
	})
	/*****响应式高度******/
	var containerH=$('#container').height();
	var listH = $('#list').height();
	var imgH=$('#list img').height();
	containerH=containerW/3.5;
	$('#container').height(containerH);
	$('#list').height(containerH);
	$('#list img').height(containerH);
	/***************/
	
	
	$(window).resize(function(){
		$('#list img').width();
		$('#list').width(imgW*imgNum);
		$('#container').width(imgW*2);
		
		$('#container').height(containerH);
		$('#list img').height(containerH);
})
	
	
	var buttons = $('#buttons span');
	var prev = $('#prev');
	var next = $('#next');
	var index = 1;
	var len = 6;
	var interval = 3000;
	var timer;
		
	function animate (offset) {
		var left = parseInt(list.css('left')) + offset;
		if (offset>0) {
			offset = '+=' + offset;
		}
		else {
			offset = '-=' + Math.abs(offset);
		}
		list.animate({'left': offset}, 300, function () {
			if(left > -200){
				list.css('left', imgW1 * len);
			}
			if(left < (imgW1 * len)) {
				list.css('left', imgW1);
			}
		});
	}

	function showButton() {
		buttons.eq(index-1).addClass('on').siblings().removeClass('on');
	}

	function play() {
		timer = setTimeout(function () {
			next.trigger('click');
			play();
		}, interval);
	}
	function stop() {
		clearTimeout(timer);
	}

	next.bind('click', function () {
		if (list.is(':animated')) {
			return;
		}
		if (index == 6) {
			index = 1;
		}
		else {
			index += 1;
		}
		animate(imgW1);
		showButton();
	});

	prev.bind('click', function () {
		if (list.is(':animated')) {
			return;
		}
		if (index == 1) {
			index = 6;
		}
		else {
			index -= 1;
		}
		animate(imgW);
		showButton();
	});

	buttons.each(function () {
		 $(this).bind('click', function () {
			 if (list.is(':animated') || $(this).attr('class')=='on') {
				 return;
			 }
			 var myIndex = parseInt($(this).attr('index'));
			 var offset = imgW1 * (myIndex - index);

			 animate(offset);
			 index = myIndex;
			 showButton();
		 })
	});

	container.hover(stop, play);

	play();

});
	/****轮播图end*********/
	
	/*******轮播图2************/
	$(function () {
	var container1 = $('#container1');
	var containerW1=$('#container1').width();
	var imgW2=$('#list1 img').width();
	containerW1=imgW2*2;
	var imgW3=-1*imgW2;
	var list1 = $('#list1');
	var listW1 = $('#list1').width();
	var imgNum1=$('#list1 img').size();
	listW1=imgW2*imgNum1+'px';
	$('#container1').width(containerW1);
	$('#list1').width(listW1);
	$('#list1').css({
		"left":imgW3*2,
		"margin-left":imgW2/2
	})
	
	/*****响应式高度******/
	var containerH1=$('#container1').height();
	var listH1 = $('#list1').height();
	var imgH1=$('#list1 img').height();
	containerH1=containerW1/3.5;
	$('#container1').height(containerH1);
	$('#list1').height(containerH1);
	$('#list1 img').height(containerH1);
	/***************/
	
	$(window).resize(function(){
		$('#list1 img').width();
		$('#list1').width(imgW2*imgNum1);
		$('#container1').width(imgW2*2);
		
		$('#container1').height(containerH1);
		$('#list1 img').height(containerH1);
})
	
	
	var buttons1 = $('#buttons1 span');
	var prev1 = $('#prev1');
	var next1 = $('#next1');
	var index1 = 1;
	var len1 = 6;
	var interval1 = 3000;
	var timer1;
		
	function animate1 (offset1) {
		var left1 = parseInt(list1.css('left')) + offset1;
		if (offset1>0) {
			offset1 = '+=' + offset1;
		}
		else {
			offset1 = '-=' + Math.abs(offset1);
		}
		list1.animate({'left': offset1}, 300, function () {
			if(left1 > -200){
				list1.css('left', imgW3 * len1);
			}
			if(left1 < (imgW3 * len1)) {
				list1.css('left', imgW3);
			}
		});
	}

	function showButton1() {
		buttons1.eq(index1-1).addClass('on').siblings().removeClass('on');
	}

	function play1() {
		timer1 = setTimeout(function () {
			next1.trigger('click');
			play1();
		}, interval1);
	}
	function stop1() {
		clearTimeout(timer1);
	}

	next1.bind('click', function () {
		if (list1.is(':animated')) {
			return;
		}
		if (index1 == 6) {
			index1 = 1;
		}
		else {
			index1 += 1;
		}
		animate1(imgW3);
		showButton1();
	});

	prev1.bind('click', function () {
		if (list1.is(':animated')) {
			return;
		}
		if (index1 == 1) {
			index1 = 6;
		}
		else {
			index1 -= 1;
		}
		animate1(imgW2);
		showButton1();
	});

	buttons1.each(function () {
		 $(this).bind('click', function () {
			 if (list1.is(':animated') || $(this).attr('class')=='on') {
				 return;
			 }
			 var myIndex1 = parseInt($(this).attr('index1'));
			 var offset1 = imgW3 * (myIndex1 - index1);
			 animate1(offset1);
			 index1 = myIndex1;
			 showButton1();
		 })
	});

	container1.hover(stop1, play1);

	play1();

});
