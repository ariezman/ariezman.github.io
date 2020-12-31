// event pada navbar saat klik

$('.page-scroll').on('click', function(e){

	// ambil isi href attr(atribut)
	var tujuan = $(this).attr('href');

	// grab elemen ybs
	var elemenTujuan = $(tujuan);

	// scroll page
	$('html').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'swing');
	
	e.preventDefault();
});


//paralax

/*$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	console.log(wScroll);
});
*/

//paralax-ABOUT
$(window).on('load', function () {
	$('.pLeft').addClass('pShow');
	$('.pRight').addClass('pShow');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	//jumbotron-paralax-header
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	//jumbrotron-paralax-portfolio-ShowOn_IMG
	if (wScroll > $('.portfolio').offset(). top - 360) {
		$('.portfolio .thumbnail').addClass('showOn')
	}
});

	/*if (wScroll > $('.portfolio').offset(). top - 360) {
		  $('.portfolio .thumbnail').each(function(i) {
		  	setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('showOn')
			}, 300 * (i+1));
});
*/

