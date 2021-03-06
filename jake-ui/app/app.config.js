angular.module('app')
       .config(basicRouteConfig);
    
function basicRouteConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('root', {
        url: '',
        abstract: true,
        views: {
            'header@': {
                templateUrl: 'scripts/header/header.tpl.html',
                controller: 'HeaderController',
                controllerAs: 'ctrl'
            },
            'footer@': {
                templateUrl: 'scripts/footer/footer.tpl.html'
            }
        }
    });
    
    $urlRouterProvider.otherwise('/home');

}