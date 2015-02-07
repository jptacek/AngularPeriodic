chemistryApp.controller('chemistryController', ['$scope', 'chemistryService','$log',
    function chemistryController($scope,  chemistryService,$log) {

        $scope.elements = chemistryService.getElements();
        $scope.fullElement = true;

        $scope.periodicElement = $scope.elements[0];
        $scope.element2 =null;
        $scope.element = $scope.periodicElement;
        var selectEleType = $scope.element.type;

        for (var i=0; i<$scope.elements.length; i++) {
            $scope.elements[i].cssForDisplay = determineCSSClassName($scope.elements[i].type);


        }
        function determineCSSClassName(elementType) {
            var cssClassName =chemistryService.getCssClassElement(elementType);
            return cssClassName;
        };


    }]
);
