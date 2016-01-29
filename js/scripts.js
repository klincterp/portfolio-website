$(function() {
	$('.nav-link').click(function() {
		if ($(this).data('nav-target')) {
			if ($('.active-nav')[0]) {
				$('.active-nav').removeClass('active-nav');
			}
			
			var targetPage = $(this).data('nav-target');
			if (targetPage != 'front') {
				$(this).addClass('active-nav');
			}
			
			$('section:visible').hide();

			var sectionId = 'section-'.concat(targetPage);

			$('#'+sectionId).show();
		}
	});
});