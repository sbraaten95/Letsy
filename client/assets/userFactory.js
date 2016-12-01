app.factory('userFactory', ['$http', function ($http){
	var users = [];
	var factory = {};
	factory.index=(callback)=>{
		$http.get('/users').then((data)=>{
			callback(data.data);
		});
	};
	factory.create=(callback, input)=>{
		$http.post('/friends', input).then((data)=>{
			callback(data.data);
		});
	};
	return factory;	
}]);