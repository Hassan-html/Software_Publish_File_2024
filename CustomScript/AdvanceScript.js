var app = angular.module("saleApp", []);
app.controller("saleCtrl", function ($scope, $http, $window) {
    //debugger;

    $scope.add = function () {

        // ADD A NEW ELEMENT.
        //var a = $scope.Item;
        if ($scope.Item != null && $scope.Qty != null) {
            $scope.TotalPrice = $scope.Qty * $scope.Price;
            //$scope.Qty = '1';
            //$scope.Total = $scope.Art_No * $scope.Bar_Code;
            $scope.list.push({ Item: $scope.Item, Qty: $scope.Qty, Price: $scope.Price, TotalPrice: $scope.TotalPrice });

            $scope.Item = '';
            $scope.Qty = '';
            $scope.Price = '';
            $scope.TotalPrice = '';
            var name = $window.document.getElementById('item');
            name.focus();
        } else {
            alert("Please Enter Item OR Quantity");
        }
    }


    $scope.totalAmount = function () {
        var total = 0;
        for (count = 0; count < $scope.list.length; count++) {
            total += parseInt($scope.list[count].TotalPrice, 10);
        }
        return total;
    };
    $scope.removeRow = function (index) {
        alert("Delete Item Successfully !");
        $scope.list.splice(index, 1);

    };
    $scope.Finish = function (index) {
        $scope.dis = "";
        $scope.cname = "";
        $scope.cmobile = "";
        $scope.deb = "";
        $scope.rdate = "";
        $scope.list.splice(index);
    };
    $scope.Fin = function () {
        $scope.showSave = true;
    };

    $scope.CheckData = function () {
        //$window.location.href = '/AddSupplierDetails.cshtml';
        $scope.Supplier = {};
        $scope.Supplier.Item = $scope.Item;
        $http({
            method: "post",
            url: "/Home/RData",
            datatype: "json",
            data: JSON.stringify($scope.Supplier)
        }).then(function (response) {

            $scope.Qty = response.data.Qty;
            $scope.Price = response.data.Price;
            //$scope.TotalPrice = $scope.Price * $scope.Qty;
        })
    };
    $scope.printToCart = function (printbill) {
        var innerContents = document.getElementById(printbill).innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=370,height=auto,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    }

});