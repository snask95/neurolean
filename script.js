$(document).ready(function() {
	//Highlight on body parts of #full_body
	$('#full_body').maphilight({
		fillOpacity: 0.5,
		fillColor: 'ff0000',
		shadow: true
	});

	$("#show_stomach").hover(
		function() {
			$("#body_stomach").fadeIn('slow')
		}, 
		function() {
			$("#body_stomach").fadeOut('slow');
		}
	);

	$("#show_shoulder_right, #show_shoulder_left").hover(
		function() {
		$("#body_shoulder").fadeIn('slow')
		},
		function() {
			$("#body_shoulder").fadeOut('slow')
		}
	);

	$("#show_breast").hover(
		function() {
		$("#body_breast").fadeIn('slow')
		},
		function() {
			$("#body_breast").fadeOut('slow')
		}
	);

	$("#show_biceps_right, #show_biceps_left").hover(
		function() {
		$("#body_biceps").fadeIn('slow')
	},
		function() {
			$("#body_biceps").fadeOut('slow')
		}
	);

	$("#show_quadriceps_right, #show_quadriceps_left").hover(
		function() {
		$("#body_quadriceps").fadeIn('slow')
	},
		function() {
			$("#body_quadriceps").fadeOut('slow')
		}
	);

	$("#show_calfs_right, #show_calfs_left").hover(
		function() {
		$("#body_calfs").fadeIn('slow')
	},
		function() {
			$("#body_calfs").fadeOut('slow')
		}
	);

});