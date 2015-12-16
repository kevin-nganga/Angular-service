'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
var app = angular
  .module('testApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('index');

    $stateProvider
      .state('index', {
        url: '/index',
        templateUrl: 'views/contacts.html',
        controller: 'contacts'
      })

  });
