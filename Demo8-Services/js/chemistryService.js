chemistryApp.service('chemistryService', function () {

    this.calculateElectronegativityDifference = function (element1, element2) {

        return Math.abs(element1.electronegativity - element2.electronegativity);

    };

    this.convertElectronegativityDifferenceToName = function (difference) {

        if (difference > 2.0) {
            return 'Ionic Bond';
        } else if (difference >= 0.5 < 1.6) {
            return 'Polar Covalent Bond';
        } else {
            return 'NonPolar Covalent Bond';
        }

    };
});
