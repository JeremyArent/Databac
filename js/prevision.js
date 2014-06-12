
	$(".prevision-s-maths").click(function(event, index) {
		$.getScript('js/prevision-pie.js');
		$("div#prevision-s-maths-pie").addClass("prevision-s-maths-pie");
		$("div#prevision-s-maths-pie").show();
		/* S */
		$("div#prevision-s-philo-pie").hide();
		$("div#prevision-s-pc-pie").hide();
		$("div#prevision-s-svt-pie").hide();
		/* L */
		$( "div#prevision-l-philo-pie" ).hide();
		$( "div#prevision-l-hg-pie" ).hide();
		/* ES */
		$( "div#prevision-es-hg-pie" ).hide();
		$( "div#prevision-es-maths-pie" ).hide();
		$( "div#prevision-es-philo-pie" ).hide();
		$( "div#prevision-es-ses-pie" ).hide();
	});

	$(".prevision-s-philo").click(function(event, index) {
		$.getScript('js/prevision-pie.js');
		$("div#prevision-s-philo-pie").addClass("prevision-s-philo-pie");
		$("div#prevision-s-philo-pie").show();
		/* S */
		$("div#prevision-s-maths-pie").hide();
		$("div#prevision-s-pc-pie").hide();
		$("div#prevision-s-svt-pie").hide();
		/* L */
		$( "div#prevision-l-philo-pie" ).hide();
		$( "div#prevision-l-hg-pie" ).hide();
		/* ES */
		$( "div#prevision-es-hg-pie" ).hide();
		$( "div#prevision-es-maths-pie" ).hide();
		$( "div#prevision-es-philo-pie" ).hide();
		$( "div#prevision-es-ses-pie" ).hide();
	});
	
	$(".prevision-s-pc").click(function(event, index) {
		$.getScript('js/prevision-pie.js');
		$("div#prevision-s-pc-pie").addClass("prevision-s-pc-pie");
		$("div#prevision-s-pc-pie").show();
		$("div#prevision-s-maths-pie").hide();
		$("div#prevision-s-philo-pie").hide();
		$("div#prevision-s-svt-pie").hide();
		/* L */
		$( "div#prevision-l-philo-pie" ).hide();
		$( "div#prevision-l-hg-pie" ).hide();
		/* ES */
		$( "div#prevision-es-hg-pie" ).hide();
		$( "div#prevision-es-maths-pie" ).hide();
		$( "div#prevision-es-philo-pie" ).hide();
		$( "div#prevision-es-ses-pie" ).hide();
	});
	
	$(".prevision-s-svt").click(function(event, index) {
		$.getScript('js/prevision-pie.js');
		$("div#prevision-s-svt-pie").addClass("prevision-s-svt-pie");
		$("div#prevision-s-svt-pie").show();
		$("div#prevision-s-maths-pie").hide();
		$("div#prevision-s-philo-pie").hide();
		$("div#prevision-s-pc-pie").hide();
		/* L */
		$( "div#prevision-l-philo-pie" ).hide();
		$( "div#prevision-l-hg-pie" ).hide();
		/* ES */
		$( "div#prevision-es-hg-pie" ).hide();
		$( "div#prevision-es-maths-pie" ).hide();
		$( "div#prevision-es-philo-pie" ).hide();
		$( "div#prevision-es-ses-pie" ).hide();
	});

	$(".prevision-l-philo").click(function(event, index) {
		$.getScript('js/prevision-pie.js');
		$("div#prevision-l-philo-pie").addClass("prevision-l-philo-pie");
		$("div#prevision-l-philo-pie").show();
		/* S */
		$( "div#prevision-s-maths-pie" ).removeClass();
		$( "div#prevision-s-philo-pie" ).removeClass();
		$( "div#prevision-s-pc-pie" ).removeClass();
		$( "div#prevision-s-svt-pie" ).removeClass();
		$( "div#prevision-s-maths-pie" ).hide();
		$("div#prevision-s-philo-pie").hide();
		$("div#prevision-s-pc-pie").hide();
		$("div#prevision-s-svt-pie").hide();
		/* L */
		$("div#prevision-l-hg-pie").removeClass();
		$("div#prevision-l-hg-pie").hide();
		/* ES */
		$("div#prevision-es-hg-pie").removeClass();
		$("div#prevision-es-maths-pie").removeClass();
		$("div#prevision-es-philo-pie").removeClass();
		$("div#prevision-es-SES-pie").removeClass();
		$("div#prevision-es-hg-pie").hide();
		$("div#prevision-es-maths-pie").hide();
		$("div#prevision-es-philo-pie").hide();
		$("div#prevision-es-ses-pie").hide();
		
	});
	
	$(".prevision-l-hg").click(function(event, index) {
		$.getScript('js/prevision-pie.js');
		$("div#prevision-l-hg-pie").addClass("prevision-l-hg-pie");
		$("div#prevision-l-hg-pie").show();
		/* S */
		$( "div#prevision-s-maths-pie" ).removeClass();
		$( "div#prevision-s-philo-pie" ).removeClass();
		$( "div#prevision-s-pc-pie" ).removeClass();
		$( "div#prevision-s-svt-pie" ).removeClass();
		$( "div#prevision-s-maths-pie" ).hide();
		$("div#prevision-s-philo-pie").hide();
		$("div#prevision-s-pc-pie").hide();
		$("div#prevision-s-svt-pie").hide();
		/* L */
		$( "div#prevision-l-philo-pie" ).removeClass();
		$("div#prevision-l-philo-pie").hide();
		/* ES */
		$("div#prevision-es-hg-pie").removeClass();
		$("div#prevision-es-maths-pie").removeClass();
		$("div#prevision-es-philo-pie").removeClass();
		$("div#prevision-es-SES-pie").removeClass();
		$("div#prevision-es-hg-pie").hide();
		$("div#prevision-es-maths-pie").hide();
		$("div#prevision-es-philo-pie").hide();
		$("div#prevision-es-ses-pie").hide();
	});

	$(".prevision-es-hg").click(function(event, index) {
		$.getScript('js/prevision-pie.js');
		$("div#prevision-es-hg-pie").addClass("prevision-es-hg-pie");
		$("div#prevision-es-hg-pie").show();
		/* S */
		$( "div#prevision-s-maths-pie" ).removeClass();
		$( "div#prevision-s-philo-pie" ).removeClass();
		$( "div#prevision-s-pc-pie" ).removeClass();
		$( "div#prevision-s-svt-pie" ).removeClass();
		$( "div#prevision-s-maths-pie" ).hide();
		$("div#prevision-s-philo-pie").hide();
		$("div#prevision-s-pc-pie").hide();
		$("div#prevision-s-svt-pie").hide();
		/* L */
		$( "div#prevision-l-philo-pie" ).removeClass();
		$( "div#prevision-l-hg-pie" ).removeClass();
		$( "div#prevision-l-philo-pie" ).hide();
		$("div#prevision-l-hg-pie").hide();
		/* ES */
		$("div#prevision-es-maths-pie").removeClass();
		$("div#prevision-es-philo-pie").removeClass();
		$("div#prevision-es-ses-pie").removeClass();
		$("div#prevision-es-maths-pie").hide();
		$("div#prevision-es-philo-pie").hide();
		$("div#prevision-es-ses-pie").hide();
	});
	
	$(".prevision-es-maths").click(function(event, index) {
		$.getScript('js/prevision-pie.js');
		$("div#prevision-es-maths-pie").addClass("prevision-es-maths-pie");
		$("div#prevision-es-maths-pie").show();
		/* S */
		$( "div#prevision-s-maths-pie" ).removeClass();
		$( "div#prevision-s-philo-pie" ).removeClass();
		$( "div#prevision-s-pc-pie" ).removeClass();
		$( "div#prevision-s-svt-pie" ).removeClass();
		$( "div#prevision-s-maths-pie" ).hide();
		$("div#prevision-s-philo-pie").hide();
		$("div#prevision-s-pc-pie").hide();
		$("div#prevision-s-svt-pie").hide();
		/* L */
		$( "div#prevision-l-philo-pie" ).removeClass();
		$( "div#prevision-l-hg-pie" ).removeClass();
		$( "div#prevision-l-philo-pie" ).hide();
		$("div#prevision-l-hg-pie").hide();
		/* ES */
		$("div#prevision-es-hg-pie").removeClass();
		$("div#prevision-es-philo-pie").removeClass();
		$("div#prevision-es-ses-pie").removeClass();
		$("div#prevision-es-hg-pie").hide();
		$("div#prevision-es-philo-pie").hide();
		$("div#prevision-es-ses-pie").hide();
	});
	
	$(".prevision-es-philo").click(function(event, index) {
		$.getScript('js/prevision-pie.js');
		$("div#prevision-es-philo-pie").addClass("prevision-es-philo-pie");
		$("div#prevision-es-philo-pie").show();
		/* S */
		$( "div#prevision-s-maths-pie" ).removeClass();
		$( "div#prevision-s-philo-pie" ).removeClass();
		$( "div#prevision-s-pc-pie" ).removeClass();
		$( "div#prevision-s-svt-pie" ).removeClass();
		$( "div#prevision-s-maths-pie" ).hide();
		$("div#prevision-s-philo-pie").hide();
		$("div#prevision-s-pc-pie").hide();
		$("div#prevision-s-svt-pie").hide();
		/* L */
		$( "div#prevision-l-philo-pie" ).removeClass();
		$( "div#prevision-l-hg-pie" ).removeClass();
		$( "div#prevision-l-philo-pie" ).hide();
		$("div#prevision-l-hg-pie").hide();
		/* ES */
		$("div#prevision-es-hg-pie").removeClass();
		$("div#prevision-es-maths-pie").removeClass();
		$("div#prevision-es-ses-pie").removeClass();
		$("div#prevision-es-hg-pie").hide();
		$("div#prevision-es-maths-pie").hide();
		$("div#prevision-es-ses-pie").hide();
	});
	
	$(".prevision-es-ses").click(function(event, index) {
		$.getScript('js/prevision-pie.js');
		$("div#prevision-es-ses-pie").addClass("prevision-es-ses-pie");
		$("div#prevision-es-ses-pie").show();
		/* S */
		$( "div#prevision-s-maths-pie" ).removeClass();
		$( "div#prevision-s-philo-pie" ).removeClass();
		$( "div#prevision-s-pc-pie" ).removeClass();
		$( "div#prevision-s-svt-pie" ).removeClass();
		$( "div#prevision-s-maths-pie" ).hide();
		$("div#prevision-s-philo-pie").hide();
		$("div#prevision-s-pc-pie").hide();
		$("div#prevision-s-svt-pie").hide();
		/* L */
		$( "div#prevision-l-philo-pie" ).removeClass();
		$( "div#prevision-l-hg-pie" ).removeClass();
		$( "div#prevision-l-philo-pie" ).hide();
		$("div#prevision-l-hg-pie").hide();
		/* ES */
		$("div#prevision-es-hg-pie").removeClass();
		$("div#prevision-es-philo-pie").removeClass();
		$("div#prevision-es-maths-pie").removeClass();
		$("div#prevision-es-hg-pie").hide();
		$("div#prevision-es-philo-pie").hide();
		$("div#prevision-es-maths-pie").hide();
	});