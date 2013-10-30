app.controller("quoteController", function quoteController($scope, $log, quoteData) {
    //This function is sort of private constructor for controller
    $log.info('hello controller');
    $scope.newQuote = quoteData.initializeNewQuote();

    $scope.removeQuoteItem = function(partNumber, manufacturerCode) {

    };


});