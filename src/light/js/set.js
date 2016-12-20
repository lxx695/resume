document.querySelector('html').style.fontSize = document.documentElement.clientWidth / 10 + 'px';
$(function() {
	$('.btn-tongzhi2').on('click', function() {
		$('.btn-tongzhi2').toggleClass('active1');
		$('.btn-tongzhi').toggleClass('active');
	})
})