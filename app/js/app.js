document.addEventListener("DOMContentLoaded", function() {

	// Custom JS

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		prefix: "$"
	});

	$('.icon-th-list').on('click', function(){
		$('.product__item').addClass('list');
		$('.icon-th-list').addClass('active');
		$('.icon-th-large').removeClass('active');
	});

	$('.icon-th-large').on('click', function(){
		$('.product__item').removeClass('list');
		$('.icon-th-list').removeClass('active');
		$('.icon-th-large').addClass('active');
	});
	

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "12px",
		ratedFill: "#ffa726",
		readOnly: true
	});
	
	$('.product-slider__inner').slick({
		dots: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint:1900,
				settings:{
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint:1200,
				settings:{
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint:740,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
	
	$('.menu__btn').on('click', function(){
		$('.menu__list').slideToggle();
	});

	$('.header__btn-menu').on('click', function(){
		$('.header__box').toggleClass('active');
	});

	$('.product-one__tabs .tab').on('click', function(event) {
		var id = $(this).attr('data-id');
			$('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
			$('.product-one__tabs .tabs').find('.tab').removeClass('active');
			$(this).addClass('active');
			$('#'+id).addClass('active-tab').fadeIn(300);
			return false;
	});

	$('.settings__tabs .tab').on('click', function(event) {
		var id = $(this).attr('data-id');
			$('.settings__tabs').find('.tab-item').removeClass('active-tab').hide();
			$('.settings__tabs .tabs').find('.tab').removeClass('active');
			$(this).addClass('active');
			$('#'+id).addClass('active-tab').fadeIn(300);
			return false;
	});

	$('input[type="file"], select').styler();

	var containerEl = document.querySelector(".products__inner-box");
	var mixer;
	if (containerEl) {
		mixer = mixitup(containerEl);
	};


});
