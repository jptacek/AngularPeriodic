chemistryApp.controller('chemistryController', ['$scope', 'chemistryService','$log',
    function chemistryController($scope,  chemistryService,$log) {

        $scope.elements = chemistryService.getElements();
        $scope.fullElement = true;

        $scope.periodicElement = $scope.elements[0];
        $scope.element = $scope.periodicElement;
        $log.info('type A:' + $scope.element.type);
        var selectEleType = $scope.element.type;

//        $scope.getCssClassElement =  chemistryService.getCssClassElement($scope.periodicElement.type);
        $scope.getCssClassElement =  determineCSS(selectEleType);
        $scope.getCssClassElement3 =  getCssClassElement3();

        $scope.cssForElement = getCssClassElement3();
        function determineCSS(elementType) {
            var cssClassName =chemistryService.getCssClassElement(elementType);
            return cssClassName;
        };
        function getCssClassElement2(elementType) {
            var cssClassName =chemistryService.getCssClassElement(elementType);
            return cssClassName;
        };
        function getCssClassElement3() {
           $log.info('type: '+  $scope.element.type)
            var cssClassName =chemistryService.getCssClassElement($scope.element.type);
            $scope.cssForElement =cssClassName;
            $scope.$apply();
            return cssClassName;
        };

//        $scope.updateController = function(selectedElement) {
//            $scope.periodicElement = selectedElement;
//            $scope.getCssClassElement =  $scope.getCssClassElement();
//        };

    }]
);
