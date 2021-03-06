// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery.remotipart

//= require cards
// $(document).on('page:change', function(){
// 	$('.post').on('ajax:success', function(){
// 		$(this).fadeOut();
// 	});
// });

$(document).on('page:change ready', function() {
 	$('.card').on('ajax:success', function() {
 		$(this).fadeOut();
 	});

 	$('.bcard').on('click', function() {
 		$('#card').animate({
			height: '400px'
		}, 1500);
	});

	$("#card").flip({
	  axis: 'y',
	  trigger: 'click'
	});

	$(".card").flip({
	  axis: 'y',
	  trigger: 'click'
	});
});
