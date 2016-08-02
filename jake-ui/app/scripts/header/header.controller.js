angular.module('app')
    .controller('HeaderController', HeaderController);

HeaderController.$inject = ['$scope', 'AuthService', 'NotifierService', '$uibModal'];

function HeaderController($scope, AuthService, NotifierService, $uibModal) {
    'use strict';

    var ctrl = this;

    function updateUser() {
        ctrl.user = AuthService.currentUser();
    }

    function openModal() {

        function modalController($scope, $uibModalInstance, AuthService) {
            function changeUser() {
                if ($scope.username) {
                    $scope.loggedUser.name = $scope.username;
                    AuthService.login($scope.loggedUser);
                }
                
                $uibModalInstance.dismiss('submit');

            }

            function cancel() {
                $uibModalInstance.dismiss('cancel');
            }

            $scope.changeUser = changeUser;
            $scope.cancel = cancel;

            $scope.loggedUser = AuthService.currentUser();
            $scope.username = _.cloneDeep($scope.loggedUser.name);
        }

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: './scripts/header/change-user.tpl.html',
            controller: modalController,
            controllerAs: 'ctrl'
        });
    }


    function _init() {
        NotifierService.subscribeLogin($scope, updateUser);
        AuthService.login(ctrl.user);
    }

    ctrl.user = {}
    ctrl.user.name = 'jake@jake.com';

    ctrl.openModal = openModal;

    _init();
}