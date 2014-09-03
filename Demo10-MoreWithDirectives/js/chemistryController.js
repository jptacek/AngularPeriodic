chemistryApp.controller('chemistryController', ['$scope', 'chemistryService','$log',
    function chemistryController($scope,  chemistryService,$log) {

        $scope.elements = chemistryService.getElements();
        $scope.fullElement = true;

        $scope.periodicElement = $scope.elements[0];
        $scope.element = $scope.periodicElement;
        $log.info('type A:' + $scope.element.type);
        var selectEleType = $scope.element.type;

//        $scope.getCssClassElement =  chemistryService.getCssClassElement($scope.periodicElement.type);

        $scope.cssForElement = getCssClassElement3();
        $scope.jpcssForElement= function(){
            $log.info('type: '+  selectEleType + ' : ' +  $scope.element.name);
            var cssClassName =chemistryService.getCssClassElement($scope.element.type);
            $scope.cssForElement =cssClassName;
            //$scope.$apply();
            $log.info('cssClassName: '+  cssClassName );

            return cssClassName;
        };

        function determineCSS(elementType) {
            var cssClassName =chemistryService.getCssClassElement(elementType);
            return cssClassName;
        };


        $scope.getCssClassElement2 = function(){
            $log.info('type: '+  selectEleType + ' : ' +  $scope.periodicElement.name)
            var cssClassName =chemistryService.getCssClassElement($scope.element.type);
            $scope.cssForElement =cssClassName;
            //$scope.$apply();
            return cssClassName;
        };
        function getCssClassElement3() {
           $log.info('type: '+  selectEleType + ' : ' +  $scope.periodicElement.name)
            var cssClassName =chemistryService.getCssClassElement($scope.element.type);
            $scope.cssForElement =cssClassName;
            //$scope.$apply();
            return cssClassName;
        };

//        $scope.updateController = function(selectedElement) {
//            $scope.periodicElement = selectedElement;
//            $scope.getCssClassElement =  $scope.getCssClassElement();
//        };

    }]
);
