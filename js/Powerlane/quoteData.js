app.factory('quoteData', function ($http, $log, $q) {
    var _warehouseCustomerId = '4127561';
    var _dealerNumber = '1';
    var _warehouseCode1 = 'CLW';
    var _warehouseCode2 = 'MAW';

    return {
        initializeNewQuote: function () {
            var partNum1 = getQuerystringFromUrl('partNum1', '');
            var manCode1 = getQuerystringFromUrl('manCode1', '');

            var partNum2 = getQuerystringFromUrl('partNum2', '');
            var manCode2 = getQuerystringFromUrl('manCode2', '');

            var partNum3 = getQuerystringFromUrl('partNum3', '');
            var manCode3 = getQuerystringFromUrl('manCode3', '');

            var serviceURL = createInitializeQuote(_dealerNumber, 4, partNum1, manCode1, partNum2, manCode2, partNum3, manCode3,  _warehouseCustomerId, _warehouseCode1, _warehouseCode2);
            var deferred = $q.defer();

            var results;
            $http({ method: 'POST', url: serviceURL }).
                success(function (data, status, headers, config) {
                    //$log.info(data, status, headers(), config);
                    deferred.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    //$log.warn(data, status, headers(), config);
                    deferred.reject(status);
                });
            return deferred.promise;
        }

    };
    function createInitializeQuote(dealerId, quantity, partNumber1, manCode1, partNumber2,
                                   manCode2,partNumber3, manCode3, warehouseCustomerId, primaryWarehouseId, secondaryWarehouseId) {
        var initalizeQuoteUrl = '/api/QuoteAPI/InitializeQuote?dealerId=' + dealerId + '&quantity=' + quantity + '&partNumber1=' + partNumber1 + '&manCode1=' + manCode1;
        initalizeQuoteUrl += '&partNumber2=' + partNumber2 + '&manCode2=' + manCode2 + '&partNumber3=' + partNumber3 + '&manCode3=' + manCode3;
        initalizeQuoteUrl += '&wdID=' + warehouseCustomerId + '&wh1=' + primaryWarehouseId + '&wh2=' + secondaryWarehouseId;

        return initalizeQuoteUrl;
    }
})
