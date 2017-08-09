$(function () {
	// 首页 菜单交互效果
	$('.navname').hover(
		function () {
			$(this).removeClass('navlist').addClass('navarrow')
				.find('ul').removeClass('navhid').addClass('navitem');
		},
		function () {
			$(this).removeClass('navarrow').addClass('navlist')
				.find('ul').removeClass('navitem').addClass('navhid');
		}
	)
	
	
	
	

	
	
	
});