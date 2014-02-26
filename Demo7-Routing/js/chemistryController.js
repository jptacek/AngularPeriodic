chemistryApp.controller('chemListCtrl',
    function chemCtrl($scope) {
        $scope.periodic = periodicData;
    }
).controller('chemItemCtrl',
    function chemCtrl($scope, $log,$routeParams) {
        var elementNumber  = $routeParams.atomicNumber;
        for (var i=0;i<periodicData.elements.length;i++) {
            if (periodicData.elements[i].atomicNumber == elementNumber) {
                $scope.element = periodicData.elements[i];
                break;
            }
        }

    }
);
