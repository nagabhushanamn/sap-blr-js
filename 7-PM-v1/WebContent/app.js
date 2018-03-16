/**
 * 
 */

$(document).ready(function(){
	
	let productForm=$('#product-form');
	productForm.hide();
	
	$('#new-btn').click(function(){
		productForm.slideDown();
		$(this).hide();
	});
	$('#cancel-btn').click(function(){
		productForm.slideUp();
		$('#new-btn').show();
	});
	
});