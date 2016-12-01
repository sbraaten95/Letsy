app.factory('userFactory', ['$http', function ($http){
	var users = [];
	var factory = {};
	factory.index=(callback)=>{
		$http.get('/users').then((data)=>{
			callback(data.data);
		});
	};
	factory.create=(input, callback)=>{
		$http.post('/users', input).then((data)=>{
			callback(data.data);
		});
	};
	return factory;	
}]);