(function() {
    'use strict';

    angular
        .module('chemistryApp')
        .directive('periodicChartElement',periodicChartElement);

    periodicChartElement.$inject= ['chemistryService'];

    function periodicChartElement (chemistryService) {
    return {
        restrict: 'E',
        templateUrl: './template/periodic-template.html',
        link: function (scope, elem, attrs) {
            elem.bind('click', function() {
                // Change state
                scope.$apply(function(){
                    scope.fullElement = !(scope.fullElement);
                });

            });
            elem.bind('mouseover', function() {
                elem.css('cursor', 'pointer');
            });

        },
        scope:{
            element:'='
        }

    }
    }
})();