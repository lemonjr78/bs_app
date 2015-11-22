var app = angular.module('myApp', []);

app.controller('ViewWordController', function($scope) {
	$scope.tagLists = [
	    {id: 0, name: 'Select Tag'},
	    {id: 1, name: 'Week 1'},
	    {id: 2, name: 'Week 2'},
	    {id: 3, name: 'Week 3'},
	    {id: 4, name: 'Week 4'},
	    {id: 5, name: 'Week 5'}
    ];

    $scope.selectFilter = $scope.tagLists[0];

    $scope.tagChosenList = [];

	$scope.removeElement = function(tagFilter){
	    for(var i = $scope.tagLists.length - 1; i >= 0; i--){
	        if($scope.tagLists[i].name == tagFilter.name){
	            $scope.tagLists.splice(i,1);
	        }
	    }
	}

    $scope.addFilter = function(){
    	
    	var tagFilter = $scope.selectFilter;

    	//ensure select tag not added
    	if(tagFilter!=$scope.tagLists[0]){
	    	$scope.tagChosenList.push(tagFilter);

	    	$scope.removeElement(tagFilter);
	    	$scope.selectFilter = $scope.tagLists[0];
	    	//$scope.tagList.splice(tagFilter.id , 1)
    	}
    };

});
