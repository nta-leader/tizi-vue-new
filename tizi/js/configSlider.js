document.addEventListener("DOMContentLoaded",function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav: false,
		dots: true,
		navText: [
			'<i class="icon-chevron-left"></i>',
			'<i class="icon-chevron-right"></i>'
		],
		navClass: [
			'owl-prev tg-btnround tg-btnprev',
			'owl-next tg-btnround tg-btnnext'
		],
		responsive:{
			320:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
},false);