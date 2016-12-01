app.controller('homeControl', ['$scope', 'userFactory', function($scope, uF) {
	$scope.users;
	$scope.user;

	$scope.getUsers=()=>{
		uF.index((data)=>{
			$scope.users = data;
		});
	};

	$scope.newUser=()=>{
		uF.create($scope.input, (data)=>{
			$scope.user = data;
		});
	};
}]);