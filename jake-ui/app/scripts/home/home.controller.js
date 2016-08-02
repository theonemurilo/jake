angular.module('app')
       .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'AuthService'];

function HomeController($scope, AuthService) {
    'use strict';
    
    var ctrl = this;
    
    function login() {
        AuthService.login(ctrl.user);
    }
    
    function addPunch() {
        ctrl.punchList.push("00:00");
    }
    
    
    function _init() {
        
    }
    
    ctrl.user = {};
    ctrl.user.name = 'jake@jake.com';
    ctrl.punchList = [];
    
    ctrl.login = login;
    ctrl.addPunch = addPunch;
    
    _init();
}