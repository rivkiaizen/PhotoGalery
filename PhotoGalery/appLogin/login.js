angular
       .module('app', [])
       .controller('loginController',function ($scope, $http) {
                $scope.login = function () {
                    $http.post('/api/login', $scope.user).then(function (response) {
                        $scope.isSuccess = response.data;
                        if (response.data) {
                            $scope.message = 'משתמש נכנס בהצלחה';
                        }
                        else {
                            $scope.message = 'משתמש לא קיים';
                        }
                        
                    }, function (error) {
                        console.log(error);
                    })

                }
            });



