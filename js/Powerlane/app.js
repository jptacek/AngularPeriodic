var app = angular.module('PowerLane', []);


app.controller('YearsController', function ($scope) {

    $scope.init = function (make) {
        //This function is sort of private constructor for controller
        $scope.make = make;
        //Based on passed argument you can make a call to resource
        //and initialize more objects
        //$resource.getMeBond(007)
    };


});