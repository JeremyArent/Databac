var DataLoader = (function(url){
	var DataLoader = function(url){
		this.data = null;
		this.url = url;
		this.cbs = new Array();

		this.initialize = function(){
			var self = this;
			$.ajax({
				url: this.url,
				type: 'GET',
				dataType: 'json',
				success: function(data){
					self._received(data);
				}
			});
			return this;
		};

		this.getData = function(){
			return this.data;
		};

		this.initialized = function(cb){
			this.cbs.push(cb);
			return this;
		};

		this.getByCity = function(name){
			return this.data[name];
		};

		this.getByCityAndYear = function(name, year){
			return this.data[name][year];
		};

		this._received = function(data){
			this.data = data;
			for(var i = 0, sz = this.cbs.length; i < sz; i++)
				this.cbs[i](data, this);
		};

		this.initialize();
	};

	return DataLoader;
})();