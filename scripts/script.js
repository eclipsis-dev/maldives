/*$(document).ready(function(){
	$('.places-gallery-blocks-img').css('border', '4px solid black');
	$('.places-gallery-blocks-img:first').hide(500).delay(300).show(800);

});

$(function(){
	$('h2').hover(function(){
		$(this).toggleClass('red');
	});
});*/

$(document).ready(function(){

	$('.places-gallery-link').magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		}
	});

});
