var BAC = (function(){
	var BAC = function(data, $el, _drawCallback){
		this.SERIE_S = 'S';
		this.SERIE_L = 'L';
		this.SERIE_ES = 'ES';
		
		this._DEFAULT_CITY = 'PARIS';
		this._DEFAULT_YEAR = 2013;

		this.COLOR_S = '#FF8830';
		this.COLOR_ES = '#394844';
		this.COLOR_L = '#c3a92c';
		this.COLOR_TOT = '#c56b6c';

		this.ANIMATION_TIME = 1000;

		this.data = data;
		this.$el = $el;
		this.d3 = d3.select($el.get(0));
		this._arc = null;
		this._svg = null;
		this._fields = null;
		this._width = 0;
		this._height = 0;
		this._spacing = 0.08;
		this._radius = null;
		this._data_cache = {};
		this._drawCallback = _drawCallback;

		this.initialize = function(){
			this._width = this.$el.width();
			this._height = this.$el.height();

			var radius = Math.min(this._width, this._height) / 2.1;
			this._radius = radius;
			var spacing = this._spacing;

			this._arc = d3.svg.arc()
						  .startAngle(0)
						  .endAngle(function(d) { return d.value * 2 * Math.PI; })
						  .innerRadius(function(d) { return d.index * radius; })
						  .outerRadius(function(d) { return (d.index + spacing) * radius; });

			this._svg = this.d3.append("svg")
							.attr("width", this._width)
							.attr("height", this._height)
							.append("g")
							.attr("transform", "translate(" + this._width / 2 + "," + this._height / 2 + ")");
			
			var data = this._compileData(this._DEFAULT_CITY, this._DEFAULT_YEAR);
			this._fields = this._svg.selectAll("g")
							   .data(this._tod3data(data))
							   .enter()
							   .append("g");

			this._fields.append('path');

			this._drawData(data);
		};

		this.refresh = function(city, year){
			var data = this._compileData(city, year);
			this._fields.data(this._tod3data(data));
			this._drawData(data);
			return this;

		};

		this.onDrawData = function(callback){
			this._drawCallback = callback;
		};

		this._drawData = function(data){
			var self = this;

			this._fields = this._fields.each(function(d) { 
				var reset = (typeof this._oldValue == 'undefined');

				d.originalValue = d.value; 

				if(reset)
					d.value = 0;
				else
					d.value = this._oldValue;

				this._oldValue = d.originalValue;
			});

			this._fields.select("path")
						.style("fill", function(d, i) { console.debug(i, d); return d3.rgb(d.color); })
						.transition()
						.duration(this.ANIMATION_TIME)
						.ease("exp-out")
						.attrTween("d", function(d){
							var i = d3.interpolateNumber(d.value, d.originalValue);
  							return function(t) { 
  								d.value = i(t);
  								return self._arc(d); 
  							};
						})
						.attr("startOffset", function(d, i) {return i * 100 / 45 + "%";})
						.attr('transform', function(d){
							return 'rotate(' + d.angle + ')';

						});

			if(this._drawCallback != null)
				this._drawCallback(data);
		};


		

		this._add = function(obj, data){
			obj.admis += data.admis;
			obj.presents += data.presents;
			return obj;
		};

		this._calc = function(presents, admis){
			return (admis / presents);
		};

		this._tod3data = function(data){
			return [
				$.extend(true, {}, data[this.SERIE_ES]),
				$.extend(true, {}, data[this.SERIE_S]),
				$.extend(true, {}, data[this.SERIE_L]),
				$.extend(true, {}, data.TOTAL)
			];
		};

		this._compileData = function(city, year){
			if(typeof this._data_cache[city] != 'undefined'
				&& typeof this._data_cache[city][year] != 'undefined')
				return this._data_cache[city][year];
			
			var data = this.data.getByCityAndYear(city, year);

			var ret = { 
				'TOTAL': { index: 0.9, admis: 0, presents: 0, value: 0.0, angle: Math.random() * 360, previousValue: 0, color: this.COLOR_TOT },
				'S': { index: 0.8, admis: 0, presents: 0, value: 0.0, angle: Math.random() * 360, previousValue: 0, color: this.COLOR_S }, 
				'ES': { index: 0.7, admis: 0, presents: 0, value: 0.0, angle: Math.random() * 360, previousValue: 0, color: this.COLOR_ES }, 
				'L': { index: 0.6, admis: 0, presents: 0, value: 0.0, angle: Math.random() * 360, previousValue: 0, color: this.COLOR_L }
			};

			for(var i = 0, sz = data.length; i < sz; i++){
				if(data[i].serie == this.SERIE_S)
					ret[this.SERIE_S] = this._add(ret[this.SERIE_S], data[i]);
				else if(data[i].serie == this.SERIE_L)
					ret[this.SERIE_L] = this._add(ret[this.SERIE_L], data[i]);
				else if(data[i].serie == this.SERIE_ES)
					ret[this.SERIE_ES] = this._add(ret[this.SERIE_ES], data[i]);
			}

			ret[this.SERIE_S].value = this._calc(ret[this.SERIE_S].presents, ret[this.SERIE_S].admis);			
			ret[this.SERIE_L].value = this._calc(ret[this.SERIE_L].presents, ret[this.SERIE_L].admis);
			ret[this.SERIE_ES].value = this._calc(ret[this.SERIE_ES].presents, ret[this.SERIE_ES].admis);

			ret.TOTAL.admis = (ret[this.SERIE_S].admis + ret[this.SERIE_L].admis + ret[this.SERIE_ES].admis);
			ret.TOTAL.presents = (ret[this.SERIE_S].presents + ret[this.SERIE_L].presents + ret[this.SERIE_ES].presents);
			ret.TOTAL.value = this._calc(ret.TOTAL.presents, ret.TOTAL.admis);
			
			if(typeof this._data_cache[city] == 'undefined')
				this._data_cache[city] = {};

			this._data_cache[city][year] = ret;

			return ret;
			
		};
		this.initialize();
	};;
	
	// NIK LA POLICE
	return BAC;
})();