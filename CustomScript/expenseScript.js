var app = angular.module("saleApp", []);
app.controller("saleCtrl", function ($scope, $http, $window) {

    $scope.InsertExpense = function () {
        var Action = document.getElementById("btnSave").getAttribute("value");
        $scope.Expense = {};
        $scope.Expense.Description = $scope.ex_desc;
        $scope.Expense.Amount = $scope.ex_amount;
        //alert($scope.ex_desc + $scope.ex_amount);
        $http({
            method: "post",
            url: "/Tbl_Expense/Add",
            datatype: "json",
            data: JSON.stringify($scope.Expense)
        }).then(function (response) {
            $scope.ex_desc = "";
            $scope.ex_amount = "";
            $scope.ExpenseList();
            $scope.ExpenseListTwo();
            alert(response.data);

        }, function () {
            alert("Error In Added New Expense");
        })
    }
    //Get Expense List
    $scope.ExpenseList = function () {
        $http({
            method: "get",
            url: "/Tbl_Expense/List"
        }).then(function (response) {
            $scope.Expense = response.data;
        }, function () {
            alert("Error Occur in Expense List");
        })
    };
    $scope.ExpenseListTwo = function () {
        $http({
            method: "get",
            url: "/Tbl_Expense/List_Today"
        }).then(function (response) {
            $scope.Expenses = response.data;
        }, function () {
            alert("Error Occur in Today Expense List");
        })
    };
    $scope.DeleteExpense = function (sup) {
        $http({
            method: "post",
            url: "/Tbl_Expense/Delete",
            datatype: "json",
            data: JSON.stringify(sup)
        }).then(function (response) {
            alert(response.data);
            $scope.ExpenseList();
            $scope.ExpenseListTwo();
        })
    };

});