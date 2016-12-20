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
console.log($(window).width())
$(window).resize(function(){
	imgBoxW=$('.img-box1').width();
    imgBox2W=$('.img-box2').width();
	$('.img-box1').height(imgBoxW);
	$('.img-box2').height(imgBox2W);
	console.log($(window).width())
})
$(".btn-top").click(function(){
	$(window).scrollTop(0)
})

	/*轮播图插件**/
	
	$(function () {
		var wraperW=$('.container').width();
		var container = $('#container');
		var containerW=$('#container').width();
		containerW=wraperW;
		var imgW=$('#list img').width();
		imgW=containerW/2;
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
		var buttons = $('#buttons span');
		var prev = $('#prev');
		var next = $('#next');
		var index = 1;
		var len = 6;
		var interval = 3000;
		var timer;
		
$(window).resize(function(){
	wraperW.width();
	containerW.width(wraperW);
	imgW.width(containerW/2);
	imgW1=-1*imgW;
	listW.width(imgW*imgNum);
	$('#list').css({
	"left":imgW1*2,
	"margin-left":imgW/2
	})
})
		
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
