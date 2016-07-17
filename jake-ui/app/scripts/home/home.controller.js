angular.module('app')
       .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'AuthService'];

function HomeController($scope, AuthService) {
    'use strict';
    
    var ctrl = this;
    
    function login() {
        AuthService.login(ctrl.user);
    }
    
    
    function _init() {
        
    }
    
    ctrl.user = {};
    ctrl.user.name = 'jake@jake.com';
    
    ctrl.login = login;
    
    _init();
}