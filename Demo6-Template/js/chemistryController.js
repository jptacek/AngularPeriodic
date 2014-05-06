chemistryApp.controller('chemTemplateCtrl1',
    function chemCtrl($scope) {
        $scope.periodic = periodicData;

        $scope.template =  {name: 'template1.html', url: 'js/templates/element1.html'};
    }
).controller('chemTemplateCtrl2',
    function chemCtrl($scope) {
        $scope.periodic = periodicData;

        $scope.templates =
            [ { name: 'template1.html', url: 'js/templates/element1.html'}
                , { name: 'template2.html', url: 'js/templates/element2.html'}];
        $scope.template = $scope.templates[1];

    }
).controller('chemTemplateCtrl3',
    function chemCtrl($scope) {
        $scope.periodic = periodicData;

        $scope.templates =
            [ { name: 'template1.html', url: 'js/templates/element1.html'}
                , { name: 'template2.html', url: 'js/templates/element2.html'}
                , { name: 'template3.html', url: 'js/templates/element3.html'}];
        $scope.templateSelect = $scope.templates[0];

        $scope.displayAll =  function() {
            if ($scope.templateSelect.name == $scope.templates[2].name) {
                return false;
            }
            else {
                return true;
            }
        }
    }
);
