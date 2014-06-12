		
		
		var sexe=null;
		var candidat=null;
		var bac=null;
		var academies = null;
		

		function onLoaded(fromSvg){
			if(sexe != null && map != null){
				academies.on('click', function(d, i){
					bac.refresh($(this).data('aca'), 2013)
				 	candidat.refresh($(this).data('aca'), 2013)
				 	sexe.refresh($(this).data('aca'), 2013)

				 	$("#nomacademie").empty();
				 	$("#nomacademie").append($(this).data('aca'));
				 	
				 	
				 	console.log($(this).data('aca'));
				 	console.log($(this).data('pc'));
	            });

			}
		}
		$(document).ready(function(){
			d3.xml("./map/Map.svg", function(xml) {
	          	$('.map').append(xml.documentElement);
	            var svg = d3.select('.map svg');
	            academies = svg.select('#map')
	            			   .selectAll('path');

	            onLoaded();
	        });

			(new DataLoader('js/json.json')).initialized(function(data, dataLoader){



				bac = new BAC(
					dataLoader, 
					$('.bacr'),
					function(data){
						$({c:0}).delay(500).animate({c: Math.round(data.TOTAL.value * 100) }, { 
							step: function(now) {
								$("#counter").html(Math.round(now));
								
							},
							duration: 3000,
							easing: "easeOutQuart"        
						});

						$({c:0}).delay(500).animate({c: Math.round((data.S.admis/data.S.presents)*100) }, { 
							step: function(now) {
								
								$("#reussite_s").html(Math.round(now));
							},
							duration: 3000,
							easing: "easeOutQuart"        
						});

						$({c:0}).delay(500).animate({c: Math.round((data.ES.admis/data.ES.presents)*100) }, { 
							step: function(now) {
								
								$("#reussite_es").html(Math.round(now));
							},
							duration: 3000,
							easing: "easeOutQuart"        
						});

						$({c:0}).delay(500).animate({c: Math.round((data.L.admis/data.L.presents)*100) }, { 
							step: function(now) {
								
								$("#reussite_l").html(Math.round(now));
							},
							duration: 3000,
							easing: "easeOutQuart"        
						});


					}
				);

				candidat = new Candidat(
					dataLoader,
					$('.AllCandidats')
				);

				sexe = new Sexe(
					dataLoader,
					$('.SexeDiff')
				);

				onLoaded();
			  
			});
	
			 
		});