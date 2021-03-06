		var
			width = 633,
			height = 633,
			radius = 50 * Math.max(width, height) / 100,
			x = d3.scale.linear().range([0, 2 * Math.PI]),
			y = d3.scale.pow().exponent(1.3).domain([0, 1]).range([0, radius]),
			padding = 5,
			duration = 1500;

		var color = d3.scale.category20();
		//var color = d3.scale.linear().domain([-100, 126]).range(["#EFEDF5", "#756BB1"]);
		//var color = d3.scale.threshold().domain([-100, 0, 126]).range(["red", "white", "blue"]);
		//var color = d3.scale.log().domain([0, 900000000]).range(["red", "green"]);


		//format currency
		var format = d3.format(",f");

		var format1 = d3.format("%");

		var content = d3.select("#col2");

		var svg = d3.select(".chart_es")
			.append("svg")
			.attr("width", width + padding * 2)
			.attr("height", height + padding * 2)
			.append("g")
			.attr("transform", "translate(" + [radius + padding, radius + padding] + ")");

		//div.append("p")
		// .attr("id", "intro")
		//.text("Click to zoom!");

		var partition = d3.layout.partition()
			.value(function(d)
			{
				return d.size;
			});

		var arc = d3.svg.arc()
			.startAngle(function(d)
			{
				return Math.max(0, Math.min(2 * Math.PI, x(d.x)));
			})

			.endAngle(function(d)
			{
				return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
			})

			.innerRadius(function(d)
			{
				return Math.max(0, y(d.y));
			})

			.outerRadius(function(d)
			{
				return Math.max(0, y(d.y + d.dy));
			});

		d3.json('serie_es', function(error, root) {


			// var path = vis.selectAll("path").data(nodes);
			//   path.enter().append("path")
			var path = svg.selectAll("path")
				.data(partition.nodes(root))
				.enter()
				.append("path")
				.attr("id", function(d, i)
				{
					return "path-" + i;
				})

				.attr("d", arc)
				.attr("fill-rule", "evenodd")
				.style("fill", function(d) { return d.fill; })

				.on("click", click)
				.on("mouseover", mouseover)
      			.on("mouseout", mouseout);

			//add text
			var text = svg.selectAll("text")
				.data(partition.nodes(root));

			var textEnter = text
				.enter()
				.append("text")
				//starting opacity
				//hides all those but the inner ring
				.style("fill-opacity", 1)
				//color fill
				//#000000 is black
				.style("fill", "#000000")
				.attr("text-anchor", function(d)
				{
					return x(d.x + d.dx / 2) > Math.PI ? "end" : "start";
				})

				.attr("dy", ".2em")
				//checks for multiline names
				.attr("transform", function(d)
				{
					var multiline = (d.name || "")
						.split(" ")
						.length > 1.5, angle = x(d.x + d.dx / 2) * 180 / Math.PI - 90, rotate = angle + ( multiline ? -.5 : 0);

					return "rotate(" + rotate + ")translate(" + (y(d.y) + padding) + ")rotate(" + (angle > 90 ? -180 : 0) + ")";
				})

				.on("click", click)
				//added mouseover and mouseout for the text as well.
				.on("mouseover", mouseover)
      			.on("mouseout", mouseout);

			//1st row of text
			textEnter
				.append("tspan")
				.attr("x", 0)
				.text(function(d)
				{
					return d.depth ? d.name.split(" ")[0] : "";
				});

			//2nd row of text
			textEnter
				.append("tspan")
				.attr("x", 0)
				.attr("dy", ".9em")
				.text(function(d)
				{
					return d.depth ? d.name.split(" ")[1] || "" : "";
				});

			//3rd row
			textEnter
				.append("tspan")
				.attr("x", 0)
				.attr("dy", ".9em")
				.text(function(d)
				{
					return d.depth ? d.name.split(" ")[2] || "" : "";
				});

			//fourth row (if necessary)
			textEnter
				.append("tspan")
				.attr("x", 0)
				.attr("dy", ".9em")
				.text(function(d)
				{
					return d.depth ? d.name.split(" ")[3] || "" : "";
				});

			//fourth row (if necessary)
			textEnter
				.append("tspan")
				.attr("x", 0)
				.attr("dy", ".9em")
				.text(function(d)
				{
					return d.depth ? d.name.split(" ")[4] || "" : "";
				});

			//click function
			function click(d)
			{
				path
				.transition()
				//duration is predefined above at 1500 (1.75 seconds)
				.duration(duration)
				.attrTween("d", arcTween(d));

				// Somewhat of a hack as it relies on arcTween updating the scales.
				text
				.style("visibility", function(e)
				{

					return isParentOf(d, e) ? null : d3.select(this).style("visibility");
				})


				.transition()
				.duration(duration)
				.attrTween("text-anchor", function(d)
				{
					return function()

					{
						return x(d.x + d.dx / 2) > Math.PI ? "end" : "start";
					};
				})

				.attrTween("transform", function(d)
				{
					var multiline = (d.name || "")
						.split(" ")
						.length > 1.5;

					return function()
					{
						var angle = x(d.x + d.dx / 2) * 180 / Math.PI - 90, rotate = angle + ( multiline ? -.5 : 0);
						return "rotate(" + rotate + ")translate(" + (y(d.y) + padding) + ")rotate(" + (angle > 90 ? -180 : 0) + ")";
					};
				})

				//.style("fill-opacity", function(e)
				//{
				//	return isParentOf(d, e) ? 1 : 0;
				//})
				//.style("fill-opacity", function(d)
				//{
						//if the depth is 1, innermost, then it's seen
				//		if (d.depth === 1)
				//		{
				//			return 1;
				//		}

						//else if (d.depth == 2 && d.children)
						//{
						//	return 1;
						//}
						//else the depth is not one, then it's hidden
				//		else
				//		{
				//			return 0;
				//		}
				//})

				.each("end", function(e)
				{
					d3.select(this)
					.style("visibility", isParentOf(d, e) ? null : "hidden");
				});

			}

			//mouseover function which will send the values to the legend
			function mouseover(d)
			{	
    			if(d.name == 'fonctions' || d.name == 'suite' || d.name == 'g�om�trie' || d.name == 'SVT' || d.name == 'S�rie S' || d.name == 'S�rie ES' || d.name == 'S�rie L' || d.name == '2013' || d.name == '2012' || d.name == '2011' || d.name == '2010' || d.name == '2009' || d.name == 'Physique Chimie' || d.name == 'Philosophie' || d.name == 'Histoire G�ographie' || d.name == 'SES' || d.name == 'Math�matiques' || d.name == 'Center'){
    				content.append("p")
    				.attr("id", "current")// + " - 2013 appropriations: " + d.appropriation13 + " - Which was a " + d.percentChange13 + "% change of the previous year.")
					content.append("p")
					//.attr("id", "name")
					.text("Passez votre souris sur un arc pour voir ses chances de tomber.")
					console.log(d.name);
    			}
    			else{
    				content.append("p")
    				.attr("id", "current")
    				.text(d.name)// + " - 2013 appropriations: " + d.appropriation13 + " - Which was a " + d.percentChange13 + "% change of the previous year.")
					content.append("p")
					//.attr("id", "name")
					.text("Probabilite " +format(d.size)+ "%")
					console.log(d.name);
    			}
    			

  			}

			//mouseout function which removes the values and replaces them with a blank space
  			function mouseout(d)
  			{

    			content.html(' ');

  			}

		});

		function isParentOf(p, c)
		{
			if (p === c)
				return true;
			if (p.children)
			{
				return p.children.some(function(d)
				{
					return isParentOf(d, c);
				});
			}
			return false;
		}

		//to determine the innermost ring
		//function isInnermost(d)
		//{
			//if (d.children)
			//{
				//return true;
			//}
			//else
			//{
				//return false;
			//}
		//}

		// function colour(d) {
		//   if (d.children) {
		//     // There is a maximum of two children!
		//     var colours = d.children.map(colour),
		//         a = d3.hsl(colours[0]),
		//         b = d3.hsl(colours[1]);
		//     // L*a*b* might be better here...
		//     return d3.hsl((a.h + b.h) / 2, a.s * 1.2, a.l / 1.2);
		//   }
		//   return d.colour || "#fff";
		// }

		// Interpolate the scales!
		function arcTween(d)
		{
			var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]), yd = d3.interpolate(y.domain(), [d.y, 1]), yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
			return function(d, i)
			{
				return i ? function(t)
				{
					return arc(d);
				} : function(t)
				{
					x.domain(xd(t));
					y.domain(yd(t)).range(yr(t));
					return arc(d);
				};
			};
		}

		function maxY(d)
		{
			return d.children ? Math.max.apply(Math, d.children.map(maxY)) : d.y + d.dy;
		}

		// http://www.w3.org/WAI/ER/WD-AERT/#color-contrast
		function brightness(rgb)
		{
			return rgb.r * .299 + rgb.g * .587 + rgb.b * .114;
		}

		// function serie(val){
		// 	case "S":
		// 		json = "serie_s";
		// 		break;
		// 	case "ES":
		// 		json = "serie_es";
		// 		break;
		// 	case "L":
		// 		json = "serie_l";
		// 		break;
		// 	default:
		// 		json="serie_s";
		// 		break;
		// 	return json;
		// }