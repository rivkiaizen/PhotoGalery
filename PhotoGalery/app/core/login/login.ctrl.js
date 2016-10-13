angular
       .module('photoApp.login')
       .controller('loginCtrl', function ($scope, $http, $timeout,$location) {
                $scope.login = function () {
                    $http.post('/api/login', $scope.user).then(function (response) {
                        $scope.isSuccess = response.data;
                        if (response.data) {
                            $scope.message = 'משתמש נכנס בהצלחה';
                            $timeout(function () {
                                $location.path('/photo');
                            })
                        }
                        else {
                            $scope.message = 'משתמש לא קיים';
                        }
                        
                    }, function (error) {
                        console.log(error);
                    })

                }
            });



