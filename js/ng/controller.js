var appModule = angular.module('ngapp', []);

appModule.controller('mainController', function ($scope, $http) {
    $scope.path = location.pathname;
    if($scope.path=="/"){
        $scope.path = "/home";
    }
    $scope.logout = function () { localStorage.removeItem('token'); window.location.href = 'login.html'; }
});