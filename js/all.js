// JavaScript Document
$(function(){
	$('.joinbx,.tab').hide();
	$('.joinbx:first,.tab:first').show();
	$('.eventbx').click(function(){
		$('.joinbx').hide();
		var activeEventbx = $(this).attr('href');
		$(activeEventbx).show();
		$('.joinbx').addClass('jump');
		setTimeout(() => {
			$('.joinbx').removeClass('jump');
		},2000)
	});
	$('.block img').click(function(){
		$('.tab').hide();
		var activeTab = $(this).attr('href');
		$(activeTab).show()
	});
	$('.cart,.fa-shopping-cart').click(function(){
		$('#cart').fadeIn();
	});
	$('.heart').click(function(){
		$(this).toggleClass('h-check');
		if($(this).hasClass('h-check')){
			$('body').append('<span class="alert">加入最愛</span>')
		}
		else{
			$('body').append('<span class="alert">取消最愛</span>')
		}
	});
	$('.view-switch').change(e =>{
		$('.tab').hide();
		$('#tab'+e.target.value).show();
	});
	$('.addToCart').click(function(){
		$('.addCart').addClass('fadeIn');
		setTimeout(() => {
			$('.addCart').removeClass('fadeIn');
		},2000)
	});
	$('.form-link').click(function(){
		$('.lightbox').fadeOut();
		$('.form-container').fadeIn();
		var activeForm = $(this).attr('href');
		$(activeForm).fadeIn();
	});
	$('.close-form,.cart-close').click(function(){
		var closeForm = $(this).attr('href');
		$(closeForm).fadeOut();
		$('.form-container').fadeOut();
	});
	$('.checkout,.social i').click(function(){
		alert('目前尚無網路 請稍後再試')
		return false
	})
})

var blockContainer = document.querySelector('.block_container');
var blocks = Array.from(document.querySelectorAll('.block'));
var isMouseOn = false;
var leftPositions = blocks.map((block,i) => i * 250);

blockContainer.onmouseover = e => isMouseOn = true;
blockContainer.onmouseout = e => isMouseOn = false;

setInterval(function(){
	leftPositions.forEach((leftPosition,i) => blocks[i].style.left = leftPosition + "px");
	
	if(!isMouseOn){
		leftPositions = leftPositions.map(leftPosition =>{
			leftPosition--;
			if(leftPosition == -250){
				leftPosition = (blocks.length -1 )*250
			}
			return leftPosition
		})
	}
},10)