$('div.nav-bar > ul > li > a').on('click',function( event ){
	
	event.preventDefault();
		
	var $name = $(this).attr('href');

	$name = $name.slice(1, $name.length);

	var $top = $('div > a#' + $name).offset().top;


	$('html, body').animate(
		{
			scrollTop: $top
		},
		{
			duration: 600
		}
	);
});
