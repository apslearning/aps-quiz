$(document).ready(function(){
	alert("hi");	
});
var app = angular.module("myApp", []);

app.controller("myController", function($scope,$http) {
	/* Application login functionality */
	$scope.validate=function(user){		
		$http.get("http://www.w3schools.com/angular/customers_sql.aspx")
	    .then(function (response) {$scope.names = response.data.records;});
	}
	
	/* Application Registration functionality */
	$scope.userRegistration = function(reguser){
				
		
	}
    
});