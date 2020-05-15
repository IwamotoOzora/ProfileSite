
/* ページ単位でスクロール可能にする */
var option = {
  section : '.js-section',
  easing: "swing",
  scrollSpeed: 600,
  scrollbars: true,
}

$(function() {
	  $.scrollify(option);
	});


/*TOPボタンの設定*/
$(function(){
	var pagetop = $('#page_top');
	pagetop.hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 100) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	pagetop.click(function(){
		$('body, html').animate({ scrollTop: 0}, 500);
		return false;
	})
})

/*メニュースクロール（ページ内リンク）*/
$(function(){
	$('a[href^="#"]').click(function(){
	var speed = 500;
	var href = $(this).attr('href');
	var target = $(href == '#' || href == '' ? 'html' : href);
	var position = target.offset().top;
	$('body,html').animate({scrollTop:position}, speed, 'swing');
	return false;
   });
});

/*section2*/
/*スクロールボックス*/
var ps = new PerfectScrollbar('.scroll_box');

/*section3*/
/*モーダルウィンドウ*/
$(function(){
	$('.modal').modaal();
});




