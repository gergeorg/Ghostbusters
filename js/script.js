$(document).ready(function () {
	const mMenuBtn = $('.burger-menu');
	const mobMenu = $('.m-menu');

	mMenuBtn.on('click', function() {
		mobMenu.toggleClass('active-menu')
		$('body').toggleClass('no-scroll')
	});
});
