chemistryApp.directive('jp-chemElement', function ($log) {
    $log.info('hi mom');
    return {
        restrict: 'E',
        scope:{
            element:'='
        },
        templateUrl:'periodic-template.html'
    }
});
