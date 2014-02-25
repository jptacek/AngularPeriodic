chemistryApp.controller('chemListCtrl',
    function chemCtrl($scope) {
        $scope.periodic = perioicData;
    }
).controller('chemItemCtrl',
    function chemCtrl($scope, $log,$routeParams) {
        $log.info('hello world');
        var itemId = $routeParams.atomicNumber;
        $log.info(itemId);
        $scope.element = perioicData.elements[itemId];
    }
);
