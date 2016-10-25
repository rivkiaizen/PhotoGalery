(function () {
    'use strict';
    angular.module('photoApp.login', []);
    angular.module('photoApp.photo', []);

    angular.module('photoApp.services', []);
    angular.module('photoApp.filters', []);
    angular.module('photoApp.directives', []);

    angular.module('photoApp', [
        // Angular modules 
        'ngRoute',

        // Custom modules 
        'photoApp.login',
        'photoApp.photo',

        'photoApp.services',
        'photoApp.filters',
        'photoApp.directives',

        // 3rd Party Modules

    ]);

    angular
        .module('photoApp')
        .run(['$rootScope', '$filter', 'imagesUrlFilter', function ($rootScope, $filter, imagesUrlFilter) {
            $rootScope.title = "גלרית תמונות";
            //$rootScope.imageSrc = $filter('imagesUrl')("1.jpg");
            $rootScope.imageSrc = imagesUrlFilter("1.jpg");


            $rootScope.currentDate = $filter('date')(new Date(), "dd/MM/yyyy");
            $rootScope.currentDate = new Date();

        }]);
})();