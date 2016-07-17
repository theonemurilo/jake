angular.module('app')
       .controller('HeaderController', HeaderController);

HeaderController.$inject = ['$scope', 'AuthService', 'NotifierService'];

function HeaderController($scope, AuthService, NotifierService) {
    'use strict';
    
    var ctrl = this;
    
    function updateUser() {
        ctrl.user = AuthService.currentUser();
    }
    
    
    function _init() {
        NotifierService.subscribeLogin($scope, updateUser);
    }
    
    ctrl.user = {}
    ctrl.user.name = "jake@jake.com";
    
    _init();
}