$(document).ready(function() { 
	$('.tabs').click(function(){
		if($('.childTab',this).css('display')=='block'){
			$('.childTab',this).slideUp();
			$(this).animate({width:'200px'},1000);
			return;
		}
		$('.childTab').slideUp();
		$('.childTab',this).slideDown();
		$('.tabs').animate({width:'200px'},1000)
		$(this).animate({width:'100%'},1000)
	})
	$('.show_all').click(function(){
		if($(this).hasClass('on')){
			$('.childTab').slideUp();
			$('.tabs').animate({width:'200px'},1000);
			$(this).addClass('off').removeClass('on').html('Показать все');
		}
		else{
			$('.childTab').slideDown();
			$('.tabs').animate({width:'100%'},1000);
			$(this).addClass('on').removeClass('off').html('Скрыть все');		

		}
	})


});