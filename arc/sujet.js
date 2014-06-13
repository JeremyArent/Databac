$(".serie_s").click(function(event,index){ //quand tu cliques sur Série S
		$.getScript('sujet-graph-s.js'); //fichier avec tes graphiques. Ici on reload le fichier pour activer l'animation
		$("div#chart_s").addClass("chart_s"); //on ajoute à la div avec l'id sujet_s_graphique, la class qui permet d'afficher le graphique
		$("div#chart_s").show(); //on affiche la div dans laquelle doit s'afficher le graphique
		$("div#chart_l").hide(); //on cache la div du sujet L
		$("div#chart_es").hide(); //on cache la div du sujet ES
	});
	
	$(".serie_es").click(function(event,index){ //quand tu cliques sur Série ES
		$.getScript('sujet-graph-es.js'); //fichier avec tes graphiques. Ici on reload le fichier pour activer l'animation
		$("div#chart_es").addClass("chart_es"); //on ajoute à la div avec l'id sujet_es_graphique, la class qui permet d'afficher le graphique
		$("div#chart_es").show(); //on affiche la div dans laquelle doit s'afficher le graphique
		$("div#chart_s").hide(); //on cache la div du sujet L
		$("div#chart_l").hide(); //on cache la div du sujet S
	});
	
	$(".serie_l").click(function(event,index){ //quand tu cliques sur Série L
		$.getScript('sujet-graph-l.js'); //fichier avec tes graphiques. Ici on reload le fichier pour activer l'animation
		$("div#chart_l").addClass("chart_l"); //on ajoute à la div avec l'id sujet_l_graphique, la class qui permet d'afficher le graphique
		$("div#chart_l").show(); //on affiche la div dans laquelle doit s'afficher le graphique
		$("div#chart_s").hide(); //on cache la div du sujet ES
		$("div#chart_es").hide(); //on cache la div du sujet S
	});