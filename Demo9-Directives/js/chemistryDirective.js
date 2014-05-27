chemistryApp.directive('periodicchartelement', function (chemistryService) {;
    return {
        restrict: 'A',
        templateUrl: './template/periodic-template.html',
        scope:{
            element:'=',
            statetype:'='
        },
        link: function (scope, element, attrs) {
            scope.getCssClassElementx = chemistryService.cssElement;
            alert( scope.getCssClassElementx);
        }


    }

});