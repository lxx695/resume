/*music start*/
var audio = document.querySelector('audio');

function playOrPaused(id, obj) {
	if(audio.paused) {
		audio.play();
		obj.src = "img/img-lxx/on.png";
		return;
	}
	audio.pause();
	obj.src = "img/img-lxx/off.png";
}
/*music end*/
function nav(){
	if($(window).width() <= 414){
		return false
	}else {
		return true
	}
}
document.querySelector('html').style.fontSize = document.documentElement.clientWidth / 10 + 'px';
$('#container').fullpage({
	navigation: nav(),
	anchors: ['one', 'two', 'three', 'four', 'five', 'six', 'seven'],
	showActiveTooltip: true,
	menu: "#menu",
	css3: true,
	continuousHorizontal: true,
	controlArrows: false,
	slidesNavigation: true,

	'afterLoad': function(anchorLink, index) {
		if(index == 1) {
			$('#page1 .next-page').on('click', function() {
				$.fn.fullpage.moveSectionDown();
			});
			setTimeout(function() {
				$('#page1 .corner').show();
				$('.rowword').show();
			}, 500);
			$('.btn').on('click', function() {
				$('.header ul').slideToggle(700);
			})
		}
		if(index == 2) {
			setInterval(function() {
				$('#page2 .container1 .one').fadeToggle(1000, function() {
					$('#page2 .container1 .two').fadeToggle(2000, function() {
						$('#page2 .container1 .three').fadeToggle(3000, function() {
							$('#page2 .container1 .four').fadeToggle(4000, function() {
								$('#page2 .container1 .five').fadeToggle(5000, function() {
									$('#page2 .container1 .six').fadeToggle(6000, function() {})
								})
							})
						})
					});
				});
			}, 21000);
		}
		if(index == 3) {
			$('nav').addClass('blue');
			$('.cpt').addClass('cptUp');
			$('.cptSc').addClass('cptScShow');
			$('.sw').animate({
				opacity: 1
			}, 6000);
			$('.tvBar').addClass('tvShow');
			$('.phBar').addClass('phShow');
		} else {
			$('.cpt').removeClass('cptUp');
			$('.cptSc').removeClass('cptScShow');
			$('.phBar').removeClass('phShow');
			$('.tvBar').removeClass('tvShow');

		}
		if($(window).width() < 987) {
			$('.tvBar .tv').on('mouseover', function() {
				$('.phBar .tv').css('display', 'none')
				$('.tvBar .tv1').css('opacity', '1')
				$('.wordBar').css('display', 'none')
			})
			$('.tvBar .tv').on('mouseout', function() {
				$('.phBar .tv').css('display', 'block')
				$('.tvBar .tv1').css('opacity', '0')
				$('.wordBar').css('display', 'block')
			})
			$('.phBar .tv').on('mouseover', function() {
				$('.tvBar .tv').css('display', 'none')
				$('.phBar .tv1').css('opacity', '1')
				$('.wordBar').css('display', 'none')
			})
			$('.phBar .tv').on('mouseout', function() {
				$('.tvBar .tv').css('display', 'block')
				$('.phBar .tv1').css('opacity', '0')
				$('.wordBar').css('display', 'block')
			})
		}
		if(index == 4) {
			$('.map-left').animate({
				left: 210
			}, 600);
			$('.map-right').delay(100).animate({
				left: 370
			}, 600);
			$('.box').on('mouseenter', function() {
				$('p.intour').css({
					color: '#fff'
				})
			})
			$('.box').on('mouseout', function() {
				$('p.intour').css({
					color: '#000'
				})
			})
			var num = 0;
			var timer = setInterval(function() {
				var page4Phone = document.querySelector('.page4-phone');
				num = num + 20;
				$('p.page4-phone').animate({
					height: num
				}, 600)
				if($(window).height() > 533){
					if(num >= 200) {
					clearInterval(timer);
					}
				}else{
					if(num >= 160) {
					clearInterval(timer);
					}
				}
				
			}, 600)
			var four = new Vivus('believe', {
					type: 'scenario-sync',
					duration: 20,
					start: 'autostart',
					dashGap: 20,
					forceRender: false
				},
				function() {
					if(window.console) {
						console.log('Animation finished. [log triggered from callback]');
					}
				})
		}
		if(index == 5) {
			var arr = [
				'img/project/p01.png',
				'img/project/p02.png',
				'img/project/p03.png',
				'img/project/p04.png',
				'img/project/p05.png',
				'img/project/p06.png',
				'img/project/p07.png',
				'img/project/p08.png',
				'img/project/p09.png'
			];
			$('.slide_1').on('click', function() {
				var str = $(this).find('img').attr('src');
				for(var i = 0; i < arr.length; i++) {
					if(arr[i].indexOf(str) != -1) { //不等于-1是存在字符串str
						newLook(i);
					}
				}
				function newLook(a) {
					layer.confirm('您要打开新的网页详细查看吗？', {
						time: 8000,
						btn: ['是的,来一观', '不要,没兴趣'] //按钮
					}, function() {
							layer.open({
								type: 2,
								title: '放大详情页,点击右上角的"X"可关闭放大窗口',
								shadeClose: true,
								shade: 2,
								area: ['100%', '100%'],
								content: arr[a] //iframe的url
							}); 
					}, function() {
						layer.confirm('看看吧', {
							time: 5000, //5s后自动关闭
							btn: ['那就看看吧','不看不看']
						}, function() {
							layer.open({
								type: 2,
								title: '放大详情页,点击右上角的"x"可关闭放大窗口',
								shadeClose: true,
								shade: 0.8,
								area: ['100%', '100%'],
								content: arr[a] //iframe的url
							});
						});
					})
				}
			})
		}
		if(index == 6) {
			$('#page6').find(".main").removeClass("light").addClass("playing")
		}
	},

	'onLeave': function(index, nextIndex, direction) {
		if(index == 1) {
			$('#page1 .corner').hide();
			$('.rowword').hide();
			$('nav').removeClass('black')
		} else if(index == 4 && direction == 'up') {
			$('.map-left').animate({
				left: -600
			}, 600);
			$('.map-right').delay(100).animate({
				left: 1300
			}, 600);
			$('p.page4-phone').animate({
				height: 0
			}, 100)
		} else if(index == 3) {
			$('nav').removeClass('blue')
		} else if(index == 4 && direction == 'out') {
			$('.map-left').animate({
				left: -600
			}, 600);
			$('.map-right').delay(100).animate({
				left: 1300
			}, 600);
			$('p.page4-phone').animate({
				height: 0
			}, 100)
		} else if(index == 5 && direction == 'up') {
			$('.map-left').animate({
				left: -600
			}, 600);
			$('.map-right').delay(100).animate({
				left: 1300
			}, 600);
		}
	},
	loopBottom: true
})