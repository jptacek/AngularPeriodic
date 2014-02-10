chemistryApp.controller('chemTemplateCtrl1',
    function chemCtrl($scope) {
        $scope.periodic = perioicData;

        $scope.template =  {name: 'template1.html', url: 'js/templates/element1.html'};
    }
).controller('chemTemplateCtrl2',
    function chemCtrl($scope) {
        $scope.periodic = perioicData;

        $scope.templates =
            [ { name: 'template1.html', url: 'js/templates/element1.html'}
                , { name: 'template2.html', url: 'js/templates/element2.html'}];
        $scope.template = $scope.templates[1];

    }
);
