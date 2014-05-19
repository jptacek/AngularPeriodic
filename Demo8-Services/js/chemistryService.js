chemistryApp.service('chemistryService', function () {

    var calculateElectronegativityDifference = function (element1, element2) {

        return Math.abs(element1.electronegativity - element2.electronegativity);

    };

    var convertElectronegativityDifferenceToName = function (difference) {

        if (difference > 2.0) {
            return 'Ionic Bond';
        } else if (difference >= 0.5 < 1.6) {
            return 'Polar Covalent Bond';
        } else {
            return 'NonPolar Covalent Bond';
        }

    };


    return {
        calculateElectronegativityDifference: calculateElectronegativityDifference,
        convertElectronegativityDifferenceToName: convertElectronegativityDifferenceToName
    };
});
