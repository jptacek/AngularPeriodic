'use strict';

chemistryApp.directive('myCheckbox', function($log) {
    $log.info('we are in');
    return {
        link: function (scope,elemennt,attrs,controller) {
            var markup = "Test<br/>";
            var markup2 = "<input type='text'ng-model='sampleData' /> {{sampleData}}<br/> ";
            angular.element(element).html(markup2);
        }
}
});