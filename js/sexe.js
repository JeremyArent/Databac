var Sexe = (function(){
	var Sexe = function(data,$el){

		this.data = data;
		this.$el = $el;
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
		this._add = function(obj, data){
			obj.participants += data.presents;
			obj.success += data.admis;
			return obj;
		};
		this._compileData = function(city, year){

			if(typeof this._data_cache[city] != 'undefined'
				&& typeof this._data_cache[city][year] != 'undefined')
				return this._data_cache[city][year];

			var data = this.data.getByCityAndYear(city, year);
			var ret = { 
				male: { success: 0, pc: 0, participants: 0}, 
				femelle: { success: 0, pc: 0, participants: 0},
				total: { male: 0, femelle: 0, participants:0}
			};

			console.debug(data);

			for(var i = 0, sz = data.length; i < sz; i++){
				if(data[i].sexe == '2') 
					ret.femelle = this._add(ret.femelle, data[i]);
				else
					ret.male = this._add(ret.male, data[i]);
			}

			ret.male.pc = ret.male.success / ret.male.participants * 100;
			ret.femelle.pc = ret.femelle.success / ret.femelle.participants * 100;

			var totalPc = ret.femelle.participants + ret.male.participants;
			ret.total.participants=totalPc;
			ret.total.male = ret.male.participants / totalPc * 100;
			ret.total.femelle = ret.femelle.participants / totalPc * 100;
			
			console.debug(ret);
			if(typeof this._data_cache[city] == 'undefined')
				this._data_cache[city] = {};

			this._data_cache[city][year] = ret;

			return ret;
		};
		this.drawData=function(data)
		{
			var self = this;
			var tauxreussiteF=(data.femelle.success/data.total.participants)*100;
			var tauxreussiteM=data.male.success/data.total.participants*100;
			
				$('.presentFemme').animate({ height: data.total.femelle +'%' },500);
				$('.margePFemme').animate({ height: (100-data.total.femelle) + '%' }, 500);

				$('.reussiteFemme').animate({ height: tauxreussiteF +'%' },500); 
				$('.margeRFemme').animate({ height: (100-tauxreussiteF) + '%' }, 500);	

				$('.presentHomme').animate({ height: data.total.male +'%' },500);
				$('.margePHomme').animate({ height: (100-data.total.male) + '%' }, 500);	

				$('.reussiteHomme').animate({ height: tauxreussiteM +'%' },500);
				$('.margeRHomme').animate({ height: (100-tauxreussiteM) + '%' }, 500);	

			    //this.firstRound=false;
			

		};
		this.refresh = function(city, year){
			var data = this._compileData(city, year);
			this.drawData(data);
			return this;
		};

		this.initialize();
	};

	return Sexe;


})();