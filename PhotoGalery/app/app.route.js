(function () {
    'use strict';
    angular.module('photoApp')
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider
               .when('/login', {
                   controller: 'loginCtrl',
                   //controllerAs:'loginVm',
                   templateUrl: 'core/login/login.tpl.html'
               })
            .when('/photo', {
                controller: 'photoCtrl',
                templateUrl: 'core/photo/photo.tpl.html',
                //controllerAs: 'photoVm'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }]);
    
})();
