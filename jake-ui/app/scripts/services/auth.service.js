angular.module('app')
       .factory( 'AuthService', AuthService)

AuthService.$inject = ['NotifierService'];

function AuthService (NotifierService) {
    var user = {};
    
    function login(userInfo) {
        user.name = userInfo.name;
        NotifierService.notifyLogin();
    }
    
    function currentUser() {
        return user;
    }
    
    return {
        login: login,
        currentUser: currentUser
  }; 
}