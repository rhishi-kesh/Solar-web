$('#circle').circleProgress({
	value: 0.98,
	size: 100,
	fill: '#2B9B1F',
	thickness: 4,
	startAngle: 17.3,
	emptyFill: '#182127'
	}).on('circle-animation-progress', function(event, progress) {
	$(this).find('.circla-progressbar-wraper').html(Math.round(98 * progress) + '<i>%</i>');
});

$('#circle1').circleProgress({
	value: 0.87,
	size: 100,
	fill: '#2B9B1F',
	thickness: 4,
	startAngle: 17.3,
	emptyFill: '#182127'
	}).on('circle-animation-progress', function(event, progress) {
	$(this).find('.circla-progressbar-wraper').html(Math.round(87 * progress) + '<i>%</i>');
});

$('#circle2').circleProgress({
	value: 0.79,
	size: 100,
	fill: '#2B9B1F',
	thickness: 4,
	startAngle: 17.3,
	emptyFill: '#182127'
	}).on('circle-animation-progress', function(event, progress) {
	$(this).find('.circla-progressbar-wraper').html(Math.round(79 * progress) + '<i>%</i>');
});

$('#circle3').circleProgress({
	value: 0.90,
	size: 100,
	fill: '#2B9B1F',
	thickness: 4,
	startAngle: 17.3,
	emptyFill: '#182127'
	}).on('circle-animation-progress', function(event, progress) {
	$(this).find('.circla-progressbar-wraper').html(Math.round(90 * progress) + '<i>%</i>');
});
	
$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:false,
	dots: false,
	autoplay: true,
	responsive:{
	   	0:{
	        items:2
	    },
	    576:{
	        items:2
	    },
	    768:{
	        items:3
	    },
	    992:{
	        items:5
	    }
	}
});