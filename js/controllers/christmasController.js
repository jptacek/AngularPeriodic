'use strict';

christmasApp.controller('christmasController',
    function christmasController($scope) {
        // http://www.irishmirror.ie/female/family/how-much-would-cost-presents-2851366
        // http://www.usatoday.com/story/money/business/2012/11/26/12-days-of-christmas-107k/1726807/
        //one
        $scope.pearTree = 189.99;
        $scope.partridge = 15.00;

        //two
        $scope.turtleDove = 62.50;

        // three
        $scope.frenchHen = 55;

        // four
        $scope.callingBird = 129.24;

        // five
        $scope.goldRing = 150;
        // six
        $scope.geese = 35;

        // seven swans
        $scope.swan = 1000.0;

        // eight
        $scope.milkingMaid = 7.25;

        // nine ladies dancing
        $scope.dancingLady = 700.0;

        // ten lords
        $scope.lord = 476.7;

        // eleven pipers at 232.91/hour
        $scope.piper = 232.91;

        // twelve drummers drumming
        $scope.drummer = 231.33;

        $scope.day1 =  function () {
            return parseFloat($scope.pearTree) +  parseFloat($scope.partridge);

        };

        $scope.day2 = function () {
            return parseFloat($scope.turtleDove) * 2;
        };

        $scope.day3 = function () {
            return parseFloat($scope.frenchHen) * 3;
        };

        $scope.day4 = function () {
            return parseFloat($scope.callingBird) * 4;
        };

        $scope.day5 = function () {
            return parseFloat($scope.goldRing) * 5;
        };

        $scope.day6 = function () {
            return parseFloat($scope.geese) * 6;
        };

        $scope.day7 = function () {
            return parseFloat($scope.swan) * 7;
        };

        $scope.day8 = function () {
            return parseFloat($scope.milkingMaid) * 8;
        };

        $scope.day9 = function () {
            return parseFloat($scope.dancingLady) * 9;
        };

        $scope.day10 = function () {
            return parseFloat($scope.lord) * 10;
        };

        $scope.day11 = function () {
            return parseFloat($scope.piper) * 11;
        };

        $scope.day12 = function () {
            return parseFloat($scope.drummer) * 12;
        };

        $scope.totalCostChristmas = function() {
            return  12* $scope.day1() + 11* $scope.day2() + 10*  $scope.day3() +  9 * $scope.day4()+ 8 * $scope.day5()+ 7* $scope.day6() +
                6 * $scope.day7() +  5* $scope.day8() +  4* $scope.day9() + 3* $scope.day10() +  12* $scope.day11() +  $scope.day12();
        };



    }
);
