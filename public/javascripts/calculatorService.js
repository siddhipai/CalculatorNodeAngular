/**
 * Created by siddhip on 2/26/2016.
 */
var cal = angular.module('calController', []);


cal.controller( 'Cal', function sub($scope,$http){
    console.log("substract module");

    $scope.sub = function(){ $http({
        method: 'POST',
        url: '/calculate/sub',
        data: { "number1": $scope.num1, "number2": $scope.num2 }

    }).success(function(data){

        console.log("2");
        $scope.calresults =data;

        console.log($scope.calresults);

    }).error(function(response){
        console.log("3");
        alert("error");
    });
    };
    $scope.add = function(){ $http({
        method: 'POST',
        url: '/calculate/add',
        data: { "number1": $scope.num1, "number2": $scope.num2 }

    }).success(function(data){

        console.log("add module");
        $scope.calresults =data;

        console.log($scope.calresults);

    }).error(function(response){
        console.log("add module");
        alert("error");
    });
    };

    $scope.mul = function(){ $http({
        method: 'POST',
        url: '/calculate/mul',
        data: { "number1": $scope.num1, "number2": $scope.num2 }

    }).success(function(data){

        console.log("multiply module");
        $scope.calresults =data;

        console.log($scope.calresults);

    }).error(function(response){
        console.log("multiply module");
        alert("error");
    });
    };

    $scope.div = function(){ $http({
        method: 'POST',
        url: '/calculate/div',
        data: { "number1": $scope.num1, "number2": $scope.num2 }

    }).success(function(data){

        console.log("Div module");
        $scope.calresults =data;

        console.log($scope.calresults);

    }).error(function(response){
        console.log("Div module");
        alert("error");
    });
    };


});