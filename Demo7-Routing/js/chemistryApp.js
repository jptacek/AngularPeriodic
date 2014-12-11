'use strict';

var chemistryApp = angular.module('chemistryApp', ['ngRoute','ui.bootstrap']);
    config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'templates/chemList.html',
                controller: 'chemListCtrl'
            }).when('/chemList/:atomicNumber', {
                templateUrl:'templates/chemItem.html',
                controller: 'chemItemCtrl'
            })
            .otherwise({redirectTo: '/'});
    });
