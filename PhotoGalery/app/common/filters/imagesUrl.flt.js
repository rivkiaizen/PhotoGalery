(function () {
    'use strict';

    angular
        .module('photoApp.filters')
        .filter('imagesUrl', [function imagesUrl() {
        	return function (name) {
        		return 'assets/images/' + name;
        	}
        }]);


 
})();
