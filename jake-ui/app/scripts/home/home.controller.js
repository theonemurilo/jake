angular.module('app')
       .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'AuthService'];

function HomeController($scope, AuthService) {
    'use strict';
    
    var ctrl = this;
    
    function login() {
        AuthService.login(ctrl.user);
    }
    
    function addPunch(index) {
        var size = ctrl.monthlyPunch[index].length;
        ctrl.monthlyPunch[index].push(moment().format('hh:mm'));
        
        if (ctrl.monthlyPunch[index].length > ctrl.headerLength) {
            ctrl.headerLength = ctrl.monthlyPunch[index].length;
            console.log(ctrl.headerLength);
        }
    }
    
    function getNumber(size) {
        return new Array(size);
    }
    
    function isNumberEven(num) {
        return (num % 2) == 0;
    }
    
    
    function _init() {
        var index;
        
        for(index = 1; index < 31; index++) {
            
            var dailyPunches = [moment().format('hh:mm'), 
                                moment().format('hh:mm'), 
                                moment().format('hh:mm'), 
                                moment().format('hh:mm')]
            ctrl.monthlyPunch.push(dailyPunches);
        }
        
        ctrl.headerLength = 4;
        
    }
    ctrl.monthlyPunch = [];
    ctrl.user = {};
    ctrl.user.name = 'jake@jake.com';
    ctrl.headerLength = 0;
    
    ctrl.login = login;
    ctrl.addPunch = addPunch;
    ctrl.getNumber =  getNumber;
    ctrl.isNumberEven = isNumberEven;
    
    _init();
}