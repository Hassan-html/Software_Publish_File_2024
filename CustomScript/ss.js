var app = angular.module("ssApp", []);
app.controller("ssCtrl", function ($scope, $http, $window) {
    //debugger;
    var name = $window.document.getElementById('bc');
    name.focus();
    $scope.add = function () {

        if ($scope.qty != null) {
            if ($scope.q >= $scope.qty) {
                $scope.list.push({ bc: $scope.bc, c: $scope.c, n: $scope.n, f: $scope.f, m: $scope.m, cur: $scope.cur, s: $scope.s, cp: $scope.cp, sp: $scope.sp, qty: $scope.qty, });

                $scope.bc = '';
                $scope.c = '';
                $scope.n = '';
                $scope.f = '';
                $scope.m = '';
                $scope.cur = '';
                $scope.cp = '';
                $scope.sp = '';
                $scope.qty = '';
                $scope.s = '';
                var name = $window.document.getElementById('bc');
                name.focus();
            } else {
                alert("Stock quantity is less your current quantity!");
                $scope.bc = '';
                $scope.c = '';
                $scope.n = '';
                $scope.f = '';
                $scope.m = '';
                $scope.cur = '';
                $scope.cp = '';
                $scope.sp = '';
                $scope.qty = '';
                $scope.s = '';
                var name = $window.document.getElementById('bc');
                name.focus();
            }
        } else {
            alert("Please Enter Quantity");
            $scope.bc = '';
            $scope.c = '';
            $scope.n = '';
            $scope.f = '';
            $scope.m = '';
            $scope.cur = '';
            $scope.cp = '';
            $scope.sp = '';
            $scope.qty = '';
            $scope.s = '';
            var name = $window.document.getElementById('bc');
            name.focus();
        }
    }


    $scope.totalAmount = function () {
        var total = 0;
        for (count = 0; count < $scope.list.length; count++) {
            total += parseInt($scope.list[count].total, 10);
        }
        return total;
    };
    $scope.debitprice = function () {
        var total = 0;
        if ($scope.dp != null) {
            total = $scope.totalAmount() - $scope.dp;
        } else {
            total = 0;
        }

        return total;
    };
    $scope.removeRow = function (index) {
        alert("Delete Item Successfully !");
        $scope.list.splice(index, 1);

    };
    $scope.Finish = function (index) {
        $scope.dis = "";
        $scope.list.splice(index);
    };
    $scope.Fin = function () {
        $scope.showSave = true;
    };

    $scope.check = function () {
        //$window.location.href = '/AddSupplierDetails.cshtml';
        $scope.Supplier = {};
        $scope.Supplier.Barcode = $scope.bc;
        $http({
            method: "post",
            url: "/Home/SData",
            datatype: "json",
            data: JSON.stringify($scope.Supplier)
        }).then(function (response) {

            $scope.b = response.data.Barcode;
            $scope.c = response.data.Code;
            $scope.n = response.data.Name;
            $scope.f = response.data.Finish;
            $scope.m = response.data.Material;
            $scope.cur = response.data.Curvature;
            $scope.s = response.data.Size;
            $scope.q = response.data.Qty;
            $scope.cp = response.data.Cost_Price;
            $scope.sp = response.data.Sale_Price;
            if ($scope.cp != null && $scope.sp != null) {
                var name = $window.document.getElementById('qty');
                name.focus();
            }

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