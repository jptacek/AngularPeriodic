chemistryApp.directive('periodicchartelement', function (chemistryService) {;
    return {
        restrict: 'E',
        templateUrl: './template/periodic-template.html',
        link: function (scope, elem, attrs) {
            elem.bind('click', function() {
                alert('hi');
                scope.fullElement = !scope.fullElement;
            });
            elem.bind('mouseover', function() {
                elem.css('cursor', 'pointer');
            });
        },
        scope:{
            element:'=',
            cssType:'=csstypeclass'
        }

    }

});