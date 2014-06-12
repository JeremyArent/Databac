/** 
 ** Graphique Prévision BAC S Maths
 **/

$(function () {
    
        var colors = Highcharts.getOptions().colors,
            categories = ['Mathematiques'],
            name = 'Matiere',
            data = [{
                    y: 100,
                    color: colors[4],
                    drilldown: {
                        name: 'Chapitres',
                        categories: ['Les Suites', 'Derivation', 'Fonctions Logarithme Neperien', 'Conditionnement et Independance', 'Loi Binomiale'],
                        data: [20, 20, 20, 20, 20],
                        color: colors[0]
                    }
                }];
    
    
        // Build the data arrays
        var browserData = [];
        var versionsData = [];
        for (var i = 0; i < data.length; i++) {
    
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
    
            // add version data
            for (var j = 0; j < data[i].drilldown.data.length; j++) {
                var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }
		
        // Create the chart
        $('.prevision-s-maths-pie').highcharts({
			tooltip: { enabled: false },
            chart: {
                type: 'pie',
            },
            title: {
                text: 'BAC S : Sujets probables de <b>Mathematiques</b>'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            series: [{
                name: 'Matiere',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Chance',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>'+ this.point.name : null;
                    }
                }
            }]
        });
    });
	
/** 
 ** Graphique Prévision BAC S Philo
 **/

$(function () {
    
        var colors = Highcharts.getOptions().colors,
            categories = ['Philosophie'],
            name = 'Matiere',
            data = [{
                    y: 100,
                    color: colors[4],
                    drilldown: {
                        name: 'Chapitres',
                        categories: ['La Verite', 'Le Bonheur', 'Le Desir', 'L\'Art'],
                        data: [25, 25, 25, 25],
                        color: colors[0]
                    }
                }];
    
    
        // Build the data arrays
        var browserData = [];
        var versionsData = [];
        for (var i = 0; i < data.length; i++) {
    
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
    
            // add version data
            for (var j = 0; j < data[i].drilldown.data.length; j++) {
                var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }
		
        // Create the chart
        $('.prevision-s-philo-pie').highcharts({
			tooltip: { enabled: false },
            chart: {
                type: 'pie',
            },
            title: {
                text: 'BAC S : Sujets probables de <b>Philosophie</b>'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            series: [{
                name: 'Matiere',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Chance',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>'+ this.point.name : null;
                    }
                }
            }]
        });
    });
	
/** 
 ** Graphique Prévision BAC S Physique Chimie
 **/
 
$(function () {
    
        var colors = Highcharts.getOptions().colors,
            categories = ['Physique Chimie'],
            name = 'Matiere',
            data = [{
                    y: 100,
                    color: colors[4],
                    drilldown: {
                        name: 'Chapitres',
                        categories: ['Structure et Transformation de la Matiere', 'Synthetiser les Molecules et Fabriquer de Nouveaux Materiaux', 'Caracteristiques et Proprietes des Ondes', 'Analyse spectrale'],
                        data: [25, 25, 25, 25],
                        color: colors[0]
                    }
                }];
    
    
        // Build the data arrays
        var browserData = [];
        var versionsData = [];
        for (var i = 0; i < data.length; i++) {
    
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
    
            // add version data
            for (var j = 0; j < data[i].drilldown.data.length; j++) {
                var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }
		
        // Create the chart
        $('.prevision-s-pc-pie').highcharts({
			tooltip: { enabled: false },
            chart: {
                type: 'pie',
            },
            title: {
                text: 'BAC S : Sujets probables de <b>Physique-Chimie</b>'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            series: [{
                name: 'Matiere',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Chance',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>'+ this.point.name : null;
                    }
                }
            }]
        });
    });
	
/** 
 ** Graphique Prévision BAC S SVT
 **/
 
$(function () {
    
        var colors = Highcharts.getOptions().colors,
            categories = ['SVT'],
            name = 'Matiere',
            data = [{
                    y: 100,
                    color: colors[4],
                    drilldown: {
                        name: 'Chapitres',
                        categories: ['Genetique et Evolution', 'Le Maintien de l\'Integrite de l\'Organisme ', 'Geothermie et Proprietes Thermiques  de la Terre'],
                        data: [33, 34, 33],
                        color: colors[0]
                    }
                }];
    
    
        // Build the data arrays
        var browserData = [];
        var versionsData = [];
        for (var i = 0; i < data.length; i++) {
    
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
    
            // add version data
            for (var j = 0; j < data[i].drilldown.data.length; j++) {
                var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }
		
        // Create the chart
        $('.prevision-s-svt-pie').highcharts({
			tooltip: { enabled: false },
            chart: {
                type: 'pie',
            },
            title: {
                text: 'BAC S : Sujets probables de <b>SVT</b>'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            series: [{
                name: 'Matiere',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Chance',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>'+ this.point.name : null;
                    }
                }
            }]
        });
    });
	
/** 
 ** Graphique Prévision BAC L Philo
 **/
 
$(function () {
    
        var colors = Highcharts.getOptions().colors,
            categories = ['Philosophie'],
            name = 'Matiere',
            data = [{
                    y: 100,
                    color: colors[4],
                    drilldown: {
                        name: 'Chapitres',
                        categories: ['La Societe', 'La Verite', 'L\'Etat', 'La Liberte', 'Le Desir'],
                        data: [20, 20, 20, 20, 20],
                        color: colors[0]
                    }
                }];
    
    
        // Build the data arrays
        var browserData = [];
        var versionsData = [];
        for (var i = 0; i < data.length; i++) {
    
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
    
            // add version data
            for (var j = 0; j < data[i].drilldown.data.length; j++) {
                var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }
		
        // Create the chart
        $('.prevision-l-philo-pie').highcharts({
			tooltip: { enabled: false },
            chart: {
                type: 'pie',
            },
            title: {
                text: 'BAC L : Sujets probables de <b>Philosophie</b>'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            series: [{
                name: 'Matiere',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Chance',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>'+ this.point.name : null;
                    }
                }
            }]
        });
    });
	
/** 
 ** Graphique Prévision BAC L Histoire / Géographie
 **/
 
$(function () {
    
        var colors = Highcharts.getOptions().colors,
            categories = ['Histoire Geo'],
            name = 'Matiere',
            data = [{
                    y: 100,
                    color: colors[4],
                    drilldown: {
                        name: 'Chapitres',
                        categories: ['La Gouvernance Economique Mondiale depuis 1944', 'Des Cartes pour Comprendre le Monde', 'Le Continent Americain', 'L\'Asie du Sud et de l\'Est', 'Medias et Opinion Publique'],
                        data: [20, 20, 20, 20, 20],
                        color: colors[0]
                    }
                }];
    
    
        // Build the data arrays
        var browserData = [];
        var versionsData = [];
        for (var i = 0; i < data.length; i++) {
    
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
    
            // add version data
            for (var j = 0; j < data[i].drilldown.data.length; j++) {
                var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }
		
        // Create the chart
        $('.prevision-l-hg-pie').highcharts({
			tooltip: { enabled: false },
            chart: {
                type: 'pie',
            },
            title: {
                text: 'BAC L : Sujets probables d\'<b>Histoire Geo</b>'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            series: [{
                name: 'Matiere',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Chance',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>'+ this.point.name : null;
                    }
                }
            }]
        });
    });
	
/** 
 ** Graphique Prévision BAC ES Histoire Géographie
 **/
 
$(function () {
    
        var colors = Highcharts.getOptions().colors,
            categories = ['Histoire Geo'],
            name = 'Matiere',
            data = [{
                    y: 100,
                    color: colors[4],
                    drilldown: {
                        name: 'Chapitres',
                        categories: ['La Gouvernance Economique Mondiale depuis 1944', 'Des Cartes pour Comprendre le Monde', 'Le Continent Americain', 'L\'Asie du Sud et de l\'Est', 'Les Espaces Maritimes'],
                        data: [20, 20, 20, 20, 20],
                        color: colors[0]
                    }
                }];
    
    
        // Build the data arrays
        var browserData = [];
        var versionsData = [];
        for (var i = 0; i < data.length; i++) {
    
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
    
            // add version data
            for (var j = 0; j < data[i].drilldown.data.length; j++) {
                var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }
		
        // Create the chart
        $('.prevision-es-hg-pie').highcharts({
			tooltip: { enabled: false },
            chart: {
                type: 'pie',
            },
            title: {
                text: 'BAC ES : Sujets probables d\'<b>Histoire Geo</b>'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            series: [{
                name: 'Matiere',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Chance',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>'+ this.point.name : null;
                    }
                }
            }]
        });
    });
	
/** 
 ** Graphique Prévision BAC ES Maths
 **/
 
$(function () {
    
        var colors = Highcharts.getOptions().colors,
            categories = ['Mathematiques'],
            name = 'Matiere',
            data = [{
                    y: 100,
                    color: colors[4],
                    drilldown: {
                        name: 'Chapitres',
                        categories: ['Notion de Continuite sur un Intervalle', 'Derivation', 'Fonction Exponentielle', 'Integration', 'Conditionnement', 'Loi Normale', 'Intervalle de Fluctuation', ],
                        data: [14, 14, 14, 14, 14, 14, 16],
                        color: colors[0]
                    }
                }];
    
    
        // Build the data arrays
        var browserData = [];
        var versionsData = [];
        for (var i = 0; i < data.length; i++) {
    
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
    
            // add version data
            for (var j = 0; j < data[i].drilldown.data.length; j++) {
                var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }
		
        // Create the chart
        $('.prevision-es-maths-pie').highcharts({
			tooltip: { enabled: false },
            chart: {
                type: 'pie',
            },
            title: {
                text: 'BAC ES : Sujets probables de <b>Mathematiques</b>'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            series: [{
                name: 'Matiere',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Chance',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>'+ this.point.name : null;
                    }
                }
            }]
        });
    });
	
/** 
 ** Graphique Prévision BAC ES Philo
 **/
 
 $(function () {
    
        var colors = Highcharts.getOptions().colors,
            categories = ['Philosophie'],
            name = 'Matiere',
            data = [{
                    y: 100,
                    color: colors[4],
                    drilldown: {
                        name: 'Chapitres',
                        categories: ['La Liberte', 'Le Travail et la Technique', 'La Societe et les Echanges', 'La Justice et le Droit', 'La Demonstration', 'L\'Histoire'],
                        data: [17, 17, 17, 17, 17, 15],
                        color: colors[0]
                    }
                }];
    
    
        // Build the data arrays
        var browserData = [];
        var versionsData = [];
        for (var i = 0; i < data.length; i++) {
    
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
    
            // add version data
            for (var j = 0; j < data[i].drilldown.data.length; j++) {
                var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }
		
        // Create the chart
        $('.prevision-es-philo-pie').highcharts({
			tooltip: { enabled: false },
            chart: {
                type: 'pie',
            },
            title: {
                text: 'BAC ES : Sujets probables de <b>Philosophie</b>'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            series: [{
                name: 'Matiere',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Chance',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>'+ this.point.name : null;
                    }
                }
            }]
        });
    });
	
	
/** 
 ** Graphique Prévision BAC ES SES
 **/
 
 $(function () {
    
        var colors = Highcharts.getOptions().colors,
            categories = ['SES'],
            name = 'Matiere',
            data = [{
                    y: 100,
                    color: colors[4],
                    drilldown: {
                        name: 'Chapitres',
                        categories: ['Mondialisation et Finance Internationale', 'Travail, Emploi, Chomage', 'Liens Sociaux'],
                        data: [33,34,33],
                        color: colors[0]
                    }
                }];
    
    
        // Build the data arrays
        var browserData = [];
        var versionsData = [];
        for (var i = 0; i < data.length; i++) {
    
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
    
            // add version data
            for (var j = 0; j < data[i].drilldown.data.length; j++) {
                var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }
		
        // Create the chart
        $('.prevision-es-ses-pie').highcharts({
			tooltip: { enabled: false },
            chart: {
                type: 'pie',
            },
            title: {
                text: 'BAC ES : Sujets probables de <b>SES</b>'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            series: [{
                name: 'Matiere',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Chance',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>'+ this.point.name : null;
                    }
                }
            }]
        });
    });
