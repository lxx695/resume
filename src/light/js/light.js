/*滚动插件引用*/
var myScroll;
function loaded () {
	myScroll = new IScroll('#wrapper', {
		zoom: true,
		scrollX: true,
		scrollY: true,
		mouseWheel: true,
		wheelAction: 'zoom',
		click:true,
		disableMouse:true,
		disablePointer:true
		/*disableTouch:true*/
	});
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

/*页面切换*/

(function(d){
	var light = {
		btns: d.querySelectorAll('.btn'),
		contents: d.querySelectorAll('.content'),
		change: function(){
			var _this = this;
			for(var i=0,len=this.btns.length;i<len;i++){
				(function(index){
					_this.btns[index].addEventListener('click',function(){
						for(var j=0;j<len;j++){
							_this.contents[j].classList.remove('active');
							_this.btns[j].classList.remove('active');
						}
						_this.contents[index].classList.add('active');
						this.classList.add('active');
						//if(i==3){ $('.menu-btn').hide()}
					},false)
				})(i);
			}
		}
	}
	light.change()
})(document)
/*滚动插件引用 end*/
document.querySelector('html').style.fontSize=document.documentElement.clientWidth/10+'px';
$(function () {
	  /* 精选第一张图片尺寸变化*/
	  var bar1W=$('.box-1 .bar1').width();
	  var bar1H=$('.box-1 .bar1').height();
	  var telW=$(window).innerWidth();
      $('.box-1 .bar1 .firstPic').width(bar1W);
	  $('.box-1 .bar1 .firstPic').height(bar1H);
	  var marginL =(bar1W-telW)/2*(-1); 
	  $('.box-1 .bar1').css('margin-left', marginL);
	  //$('.box-1').mousemove()
	
  /*显示菜单*/
	 $('.menu-btn').click(function(){
	 	$('.slide-menu').show()
	 })
	 $('.slide-r').click(function(){
	 	$('.slide-menu').hide()
	 })
	 var telH=$(window).innerHeight();
	 $('.set').height(telH);
})
/*
var width,height;
window.onload= function () {
    var bar1 = document.getElementById('bar1');
    height = parseInt(bar1.style.height);
    console.log(top1)
    left = image.style.left;
    console.log(left)
}
function show_coords(event){
     var x = event.clientX-parseInt(left);
     var y = event.clientY-parseInt(top1);
     var say = document.all("coords");
     say.innerHTML = "X:"+x+" Y:"+y;
     say.style.position = "absolute";
     say.style.left = x + 30;
     say.style.top = y;
    }

*/


 /* end */

/* 头部动画效果 */
var hi = new Vivus('yuan', {type: 'scenario-sync', duration:50, start: 'autostart', dashGap:20, forceRender: false});
	$('.icon-taiyang').animate({
		top:'2.1rem',
		left:'2.85rem'
	},500)

/*设置页面*/
$(function() {
	$('.btn-tongzhi2').on('click', function() {
		$('.btn-tongzhi2').toggleClass('active1');
		$('.btn-tongzhi').toggleClass('active');
	})
	$('.caidan').on('click', function() {
		$('.slide-menu').show()
	})
	$('#btnFenXiang').on('click',function(){
		$('.fenxiang').show()
	})
	$('.zhezhao1').on('click',function(){
		$('.fenxiang').hide()
	})
	$('#shezhi').on('click',function(){
		$('.menu-btn').hide();
		//$('#scroller').addClass('active2');
	})
	$('#shezhi').siblings().on('click',function(){
		$('.menu-btn').show();
		//$('#scroller').removeClass('active2');
	})
})