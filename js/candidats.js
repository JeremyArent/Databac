var Candidat = (function(){
	var Candidat = function(data,$el){

		this.data = data;
		this.$el = $el;
		this.SERIE_S = 'S';
		this.SERIE_L = 'L';
		this.SERIE_ES = 'ES';
		this.TOTAL='TOTAL';
		this._width=0;
		this.firstRound=true;
		this._height=0;
		this._DEFAULT_CITY = 'PARIS';
		this._DEFAULT_YEAR = 2013;
		this._data_cache=new Array();


		this.initialize = function(){
			this._width = this.$el.width();
			this._height = this.$el.height();
			var data = this._compileData(this._DEFAULT_CITY, this._DEFAULT_YEAR);
			this.drawData(data);
			
		};
		this._compileData = function(city, year){

			if(typeof this._data_cache[city] != 'undefined'
				&& typeof this._data_cache[city][year] != 'undefined')
				return this._data_cache[city][year];

			var data = this.data.getByCityAndYear(city, year);
			var ret = { 
				'TOTAL': { presents: 0},
				'S': { presents: 0}, 
				'ES': {  presents: 0}, 
				'L': {  presents: 0}
			};

			console.debug(data);

			for(var i = 0, sz = data.length; i < sz; i++){
				if(data[i].serie == this.SERIE_S)
					ret[this.SERIE_S].presents += data[i].presents;
				else if(data[i].serie == this.SERIE_L)
					ret[this.SERIE_L].presents += data[i].presents;
				else if(data[i].serie == this.SERIE_ES)
					ret[this.SERIE_ES].presents += data[i].presents;
			}

			ret[this.TOTAL].presents=ret[this.SERIE_S].presents+ret[this.SERIE_L].presents+ret[this.SERIE_ES].presents;

			if(typeof this._data_cache[city] == 'undefined')
				this._data_cache[city] = {};

			this._data_cache[city][year] = ret;

			return ret;
		};
		this.drawData=function(data)
		{
			$('.numberTotal').html(data[this.TOTAL].presents + " Candidats");

			
			var self = this;

			if (this.firstRound) {
				$('.S').animate({width: ((data[this.SERIE_S].presents/data[this.TOTAL].presents)*100) +'%'},500, 
					function() {						
						$('.candS').html( Math.floor((data[self.SERIE_S].presents/data[self.TOTAL].presents)*100) + "%");
						$('.compteurS').css('visible', 'visible').html(data[self.SERIE_S].presents);
						$('.ES').animate({width: ((data[self.SERIE_ES].presents/data[self.TOTAL].presents)*100) +'%'},500, 
						function() {
							$('.candES').html( Math.floor((data[self.SERIE_ES].presents/data[self.TOTAL].presents)*100) + "%");
							$('.compteurES').css('visible', 'visible').html(data[self.SERIE_ES].presents);
							$('.L').animate({width: ((data[self.SERIE_L].presents/data[self.TOTAL].presents)*100) +'%'},500, 
							function() {
								$('.candL').html( Math.floor((data[self.SERIE_L].presents/data[self.TOTAL].presents)*100) + "%");
								$('.compteurL').css('visible', 'visible').html(data[self.SERIE_L].presents);
							});
						});
					});

			    this.firstRound=false;
			}
			else
			{
				$('.S').animate({width: Math.floor((data[this.SERIE_S].presents/data[this.TOTAL].presents)*100) +'%'},500, function(){
					$(this).width((data[self.SERIE_S].presents / data[self.TOTAL].presents *100) + '%');
				});
				$('.candS').html( Math.floor((data[this.SERIE_S].presents/data[this.TOTAL].presents)*100) + "%");
				$('.compteurS').css('visible', 'visible').html(data[self.SERIE_S].presents);
				$('.ES').animate({width: Math.floor((data[this.SERIE_ES].presents/data[this.TOTAL].presents)*100) +'%'},500, function(){
					$(this).width((data[self.SERIE_ES].presents / data[self.TOTAL].presents *100) + '%');
				});
				$('.candES').html( Math.floor((data[this.SERIE_ES].presents/data[this.TOTAL].presents)*100) + "%");
				$('.compteurES').css('visible', 'visible').html(data[self.SERIE_ES].presents);
				$('.L').animate({width: Math.floor((data[this.SERIE_L].presents/data[this.TOTAL].presents)*100) +'%'},500, function(){
					$(this).width((data[self.SERIE_L].presents / data[self.TOTAL].presents *100) + '%');
				});
				$('.candL').html( Math.floor((data[this.SERIE_L].presents/data[this.TOTAL].presents)*100) + "%");
				$('.compteurL').css('visible', 'visible').html(data[self.SERIE_L].presents);

			};
		};
		this.refresh = function(city, year){
			var data = this._compileData(city, year);
			this.drawData(data);
			return this;
		};

		this.initialize();
	};

	return Candidat;


})();