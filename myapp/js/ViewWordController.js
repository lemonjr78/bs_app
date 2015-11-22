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

    $scope.wordLists = [
    	{wi : "John" , wr : "Doe" , wh : "Almar" , wk : "july" },
    	{wi : "John" , wr : "Doe" , wh : "Almar" , wk : "july" },
    	{wi : "John" , wr : "Doe" , wh : "Almar" , wk : "july" },
    	{wi : "John" , wr : "Doe" , wh : "Almar" , wk : "july" },
    	{wi : "John" , wr : "Doe" , wh : "Almar" , wk : "july" }
    ];

    $scope.selectFilter = $scope.tagLists[0];

    $scope.tagChosenList = [];

    $scope.checkWi = true;

    $scope.checkWr = true;
    
    $scope.checkWh = false;
    
    $scope.checkWk = false;

	$scope.removeElementByName = function(tagLists , tagFilter){
	    for(var i = tagLists.length - 1; i >= 0; i--){
	        if(tagLists[i].name == tagFilter.name){
	            tagLists.splice(i,1);
	        }
	    }
	}

    $scope.addFilter = function(){
    	
    	var tagFilter = $scope.selectFilter;

    	//ensure select tag not added
    	if(tagFilter!=$scope.tagLists[0]){
	    	$scope.tagChosenList.push(tagFilter);

	    	$scope.removeElementByName($scope.tagLists , tagFilter);
	    	$scope.selectFilter = $scope.tagLists[0];
	    	//$scope.tagList.splice(tagFilter.id , 1)
    	}
    };

    $scope.removeFilter = function(tagFilter){
    	$scope.removeElementByName($scope.tagChosenList , tagFilter);
    	$scope.tagLists.push(tagFilter);
    }

});
