angular.module('app')
       .factory('NotifierService', NotifierService);

NotifierService.$inject = ['$rootScope'];

function NotifierService($rootScope) {
    
    function subscribeLogin(scope, callback) {
        var handler = $rootScope.$on('login-notify', callback);
        scope.$on('$destroy', handler);
    }
    
    function notifyLogin() {
        $rootScope.$emit('login-notify');
    }
     return {
        subscribeLogin: subscribeLogin,
        notifyLogin: notifyLogin
    };
}