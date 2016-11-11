angular.module('movieApp')
	.controller('SearchController',['$scope','$location','omdbApi', function($scope, $location,omdbApi) {
		$scope.results={};
		$scope.search = function() {
			if ($scope.query) {
				$location.path('/results').search('q', $scope.query);
			}
		}
		var searchService=function(){
			omdbApi.search('star wars')
			.then(function(response){
				$scope.results=response;
			});
		}
		searchService();
	}]);
