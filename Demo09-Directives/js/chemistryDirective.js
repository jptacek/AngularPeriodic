chemistryApp.directive('periodicchartelement', function (chemistryService) {;
    return {
        restrict: 'E',
        templateUrl: './template/periodic-template.html',
        scope:{
            element:'=',
            cssType:'=csstypeclass'
        }

    }

});