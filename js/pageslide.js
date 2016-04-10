$('div.nav-bar > ul > li > a').on('click',function(){
	var $name = $(this).attr('href');

	$name = $name.slice(1, $name.length);

	var $top = $('div > a#' + $name).offset().top;

	console.log(123);

	$('html, body').animate(
		{
			scrollTop: $top
		},
		{
			duration: 600
		}
	);

});