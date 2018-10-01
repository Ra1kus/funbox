$(document).ready(function() {
	
$('.select_trigger').on('click', function() {
	$(this).parents('.product_block_wrp').toggleClass('selected').removeClass('hover');
	return false
});
$('.product_block_wrp').on('mouseleave', function() {
	if ($(this).hasClass('selected')) {
		$(this).addClass('hover');
	}
});

});