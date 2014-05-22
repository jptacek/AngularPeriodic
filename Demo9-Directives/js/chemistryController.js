chemistryApp.controller('chemistryController', ['$scope', 'chemistryService',
    function chemistryController($scope,  chemistryService) {

        $scope.elements = chemistryService.getElements();

        $scope.periodicElement = $scope.elements[1];



        /* private methods */

    }]
);
