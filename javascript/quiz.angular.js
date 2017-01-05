var app = angular.module("myApp", []);

app.controller("myController", function($scope,$http) {
	$scope.validate=function(user){		
		$http.get("http://www.w3schools.com/angular/customers_sql.aspx")
	    .then(function (response) {$scope.names = response.data.records;});
	}
	$scope.resetValidate=function(user){
		user.userid="";
		user.password="";
	}
    
});