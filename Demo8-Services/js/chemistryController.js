chemistryApp.controller('chemServiceCtrl', ['$scope', 'chemistryService',
    function chemServiceCtrl($scope, $log, chemistryService) {

        $scope.elements = periodicData.elements;

        $scope.calculateBondPolarity = function () {

            if ($scope.selectedElement1 && $scope.selectedElement2) {

                $scope.currentBondDifference = chemistryService.calculateElectronegativityDifference($scope.selectedElement1, $scope.selectedElement2);
                $scope.currentBondType = chemistryService.convertElectronegativityDifferenceToName($scope.currentBondDifference);

            }

        };

        /* private methods */

    }]
);
