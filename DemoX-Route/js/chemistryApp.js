'use strict';

var chemistryApp = angular.module('chemistryApp', ['ngRoute']).
    config(function($routeProvider) {
        $routeProvider
            .when('/chemList', {
                templateUrl:'templates/chemList.html',
                controller: 'chemCtrl'
            })
            .otherwise({redirectTo: '/'});
    });
