angular.module('app')
       .config(homeRouteConfig);

function homeRouteConfig($stateProvider, $urlRouterProvider) {
     $stateProvider.state(
         'home', {
            url: '/home',
            parent: 'root',
            views: {
                'container@': {
                    templateUrl: './scripts/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'ctrl'
                }
                
            }
        });
}