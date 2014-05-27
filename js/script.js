$(document).ready(function() {

	$(window).scroll(function(event){
		var y = $(this).scrollTop(),
		headline = $('#headline').height(),
		section3 = $('#section3').height(),
		section2 = $('#section2').height(),
		section1 = $('#section1').height();

		if (y > +headline + +section3) {
			$('#monitor').addClass('animate');
			$('#mobile').addClass('animate');
		}
		if (y > +headline + +section3 + +section1) {
			$('#speed').addClass('animate grow-img');
			$('#support').addClass('animate grow-img');
			$('#smart').addClass('animate grow-img');
			$('.s').addClass('animate');
		}
		if (y > +headline + +section3 + +section1 + +section2) {
			$('#s1').addClass('animate-down');
			setTimeout(function(){$('#s2').addClass('animate-down');},100);
			setTimeout(function(){$('#s3').addClass('animate-down');},200);
			setTimeout(function(){$('#s4').addClass('animate-down');},300);
			setTimeout(function(){$('#s5').addClass('animate-down');},400);
			setTimeout(function(){$('#s6').addClass('animate-down');},500);
			setTimeout(function(){$('#s7').addClass('animate-down');},600);
			setTimeout(function(){$('#s8').addClass('animate-down');},700);
			setTimeout(function(){$('#s9').addClass('animate-down');},800);
			setTimeout(function(){$('#s10').addClass('animate-down');},900);

			setTimeout(function(){$('#us').addClass('animate');},700);

		}
	});
});