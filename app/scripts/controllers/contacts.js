'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:contacts
 * @description
 * # contacts
 * Controller of the testApp
 */
app.controller('contacts', function ($scope, myService) {

  $scope.contacts = myService.list();

  /*****gets new contacts and pass to saveContact method in myService*****/
  $scope.saveContact = function(){
    myService.save($scope.newContact);
    $scope.newContact = {};
  };

  /*****get contact id and pass to delete method in myService*****/
  $scope.delete = function(id){
    myService.delete(id);
    if($scope.newContact.id == id){
      $scope.newContact = {};
    }
  };

  /*****get contact id and pass to edit method in myService*****/
  $scope.edit = function(id){
    $scope.newContact = angular.copy(myService.get(id));
  };

});
