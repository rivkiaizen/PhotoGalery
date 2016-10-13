(function () {
    'use strict';

    angular
        .module('photoApp.photo')
        .controller('photoCtrl', photo);

   // photo.$inject = ['$scope']; 

    function photo($scope) {
        $scope.title = 'פוטו';

        activate();

        function activate() { }
    }
})();
