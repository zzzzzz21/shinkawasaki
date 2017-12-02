$(function () {
	var $window = $('window'),
		$html = $('html'),
		$body = $('body'),
		break_point_sp = 768,
		windowH = $(window).height(),
		windowW = $(window).width(),
		header = $('#data-header'),
		headerH = $(header).height(),
		contents = $('#data-contents'),
		contentsH = $(contents).height();
		$gNavBtn = $('#data-gNav-title'),
		$gNavItem = $('.gNav__item a'),
		$gNavBody = $('#data-gNav-body');
		
		
	$(window).resize(function(){
		var windowW = $(window).width();
		console.log(windowW);
	});
	
	
// -------------------------------------------------------------------
// スムーズスクロール
// -------------------------------------------------------------------
 $('a[href^=#]').on('click touchend',function() {
	var speed = 500; // ミリ秒
	var href = $(this).attr('href');
	var target = $(href == '#' || href == '' ? 'html' : href);
	if (windowW < break_point_sp) {
		var position = target.offset().top - 60;
	} else {
		var position = target.offset().top - 100;
	}
	$('body, html').animate({ scrollTop: position }, speed, 'swing');
	return false;
});


// -------------------------------------------------------------------
// gNav
// -------------------------------------------------------------------
$gNavBtn.on('click', function(){
	if ($(this).hasClass('is-close')) {
		$(this).removeClass('is-close');
		$body.removeClass('is-open');
		$gNavBody.fadeOut();
	} else {
		$(this).addClass('is-close');
		$body.addClass('is-open');
		$gNavBody.fadeIn();
	}
});


// -------------------------------------------------
//	アンカーリンク対策
// -------------------------------------------------
$gNavItem.on('click', function(){
	$body.removeClass('is-open');
	$gNavBtn.removeClass('is-close');
	$gNavBody.fadeOut();
});


// -------------------------------------------------
//	画像入れ替え
// -------------------------------------------------
$(".data-switch").each(function(){
	var $this = jQuery(this);
	var PC_IMG_SUFFIX = '_pc';
	var SP_IMG_SUFFIX = '_sp';
	var SP_WIDTH = 767;
	function imgSize(){
		var windowWidth = jQuery(window).width();
		if(windowWidth >= SP_WIDTH + 1) {
			$this.attr('src',$this.attr('src').replace(SP_IMG_SUFFIX,PC_IMG_SUFFIX)).css({visibility:'visible'});
			} else if(windowWidth < SP_WIDTH + 1) {
			$this.attr('src',$this.attr('src').replace(PC_IMG_SUFFIX,SP_IMG_SUFFIX)).css({visibility:'visible'});
		}
	}
	$(window).resize(function(){imgSize();});
	imgSize();
});


// -------------------------------------------------------------------
// PC表示時にリンク無効化：電話番号リンク
// -------------------------------------------------------------------
$('a.data-link-sp').on('click',function(){
	if(windowW > break_point_sp) return false;
});


// -------------------------------------------------------------------
// go to top
// -------------------------------------------------------------------
$(document).ready(function(){
	var toTopButton = $('.gotoTop');
	toTopButton.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 780) {
			toTopButton.fadeIn();
		} else {
			toTopButton.fadeOut();
		}
	});
});

});
