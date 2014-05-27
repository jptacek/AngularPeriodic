chemistryApp.controller('chemistryController', ['$scope', 'chemistryService',
    function chemistryController($scope,  chemistryService) {

        $scope.elements = chemistryService.getElements();

        $scope.periodicElement = $scope.elements[0];

        $scope.isMetalloid = true;

        $scope.getCssClassElementx = chemistryService.getCssClassElement($scope.periodicElement.name);

        $scope.cssElement = chemistryService.testing1();

        /* private methods */



    }]
);
