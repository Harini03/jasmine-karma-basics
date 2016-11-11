describe('Search Controller', function() {

	var $location;
	var $scope;
	var $q;
	var fakeService;
	beforeEach(module('movieApp'));

	beforeEach(inject(function(_$q_){
		$q=_$q_;
		fakeService=function(){
			var deferred=$q.defer();
			deferred.resolve("fake-data");
			return deferred.promise;
		}
	}));
	beforeEach(inject(function(_$controller_, _$location_,_omdbApi_) {
		$scope = {};
		$location = _$location_;
		omdbApi=_omdbApi_;
		spyOn(omdbApi,'search').and.callFake(fakeService);
		_$controller_('SearchController', { $scope: $scope, $location: _$location_,omdbApi:_omdbApi_ });
	}));

	it('should redirect to query results for non-empty query', function() {
		$scope.query = 'star wars';
		$scope.search();
		expect($location.url()).toBe('/results?q=star%20wars');
	});

	it('should not redirect to query results for empty query', function() {
		$scope.query = '';
		$scope.search();
		expect($location.url()).toBe('');
	});

	it('should have called omdbApi search method',function(){
		expect(omdbApi.search).toHaveBeenCalled();
	});
});