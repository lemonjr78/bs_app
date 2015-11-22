
app.controller('AddNewController', function($scope) {
    $scope.generating = function(){
        console.log($scope.formAddNew.inputWi);
        $scope.inputWh = $scope.formAddNew.inputWi;
        
    };

});
