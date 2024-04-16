var app = angular.module("psApp", []);
app.controller("psCtrl", function ($scope, $http, $window) {
    //debugger;
    $scope.add = function () {
        if ($scope.qty != null) {
            $scope.cptotal = $scope.qty * $scope.cpp;
            $scope.stotal = $scope.qty * $scope.spp;
            $scope.list.push({ Barcode: $scope.Barcode, code: $scope.code, na: $scope.na, des: $scope.des, si: $scope.si, costrate: $scope.cpp, salerate: $scope.spp, qty: $scope.qty, cptotal: $scope.cptotal, sptotal: $scope.stotal, ex: $scope.ex });

            $scope.Barcode = '';
            $scope.code = '';
            $scope.na = '';
            $scope.sf = '';
            $scope.si = '';
            $scope.des = '';
            $scope.cpp = '';
            $scope.spp = '';
            $scope.sspp = '';
            $scope.bonus = '';
            $scope.qty = '';
            $scope.expiry = '';
            var name = $window.document.getElementById('bc');
            name.focus();
        } else {
            alert("Please Enter Quantity");
        }
    }

    $scope.savepro = function () {
        $scope.Supplier = {};
        $scope.Supplier.Id = $scope.id;
        $scope.Supplier.code = $scope.c;
        $scope.Supplier.Barcode = $scope.barc;
        $scope.Supplier.Name = $scope.n;
        $scope.Supplier.Description = $scope.d;
        $scope.Supplier.Size_C = $scope.s;
        $scope.Supplier.Cost_Price = $scope.cp;
        $scope.Supplier.Sale_Price = $scope.sp;
        $http({
            method: "post",
            url: "/Home/AddProduct",
            datatype: "json",
            data: JSON.stringify($scope.Supplier)
        }).then(function (response) {
            alert(response.data);
            $scope.c = "";
            $scope.barc = "";
            $scope.n = "";
            $scope.d = "";
            $scope.s = "";
            $scope.f = "";
            $scope.cp = "";
            $scope.sp = "";
            $scope.id = "";
            $scope.productist();
        })
    };
    $scope.productist = function () {
        $http({
            method: "get",
            url: "/Home/ProductList"
        }).then(function (response) {
            $scope.Supplier = response.data;
        }, function () {
            alert("Error Occur in Product List");
        })
    };
    $scope.stocklist = function () {
        $http({
            method: "get",
            url: "/Home/StockList"
        }).then(function (response) {
            $scope.Stock = response.data;
        }, function () {
            alert("Error Occur in Stock List");
        })
    };
    $scope.deletepro = function (r) {
        $http({
            method: "post",
            url: "/Home/DeleteProduct",
            datatype: "json",
            data: JSON.stringify(r)
        }).then(function (response) {
            alert(response.data);
            $scope.productist();
        })
    };
    $scope.editpro = function (r) {
        $scope.id = r.Id;
        $scope.c = r.code;
        $scope.barc = r.Barcode;
        $scope.n = r.Name;
        $scope.d = r.Description;
        $scope.s = r.Size_C;
        $scope.cp = r.Cost_Price;
        $scope.sp = r.Sale_Price;
    };
    $scope.totalAmount = function () {
        var total = 0;
        for (count = 0; count < $scope.list.length; count++) {
            total += parseInt($scope.list[count].cptotal, 10);
        }
        return total;
    };
    $scope.totalAmounts = function () {
        var total = 0;
        for (count = 0; count < $scope.list.length; count++) {
            total += parseInt($scope.list[count].sptotal, 10);
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
        $scope.cr = total;
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
        $scope.Supplier.Barcode = $scope.Barcode;
        $http({
            method: "post",
            url: "/Home/RData",
            datatype: "json",
            data: JSON.stringify($scope.Supplier)
        }).then(function (response) {

            $scope.code = response.data.code;
            $scope.Barcode = response.data.Barcode;
            $scope.na = response.data.Name;
            $scope.des = response.data.Description;
            $scope.si = response.data.Size_C;
            $scope.cpp = response.data.Cost_Price;
            $scope.spp = response.data.Sale_Price;
            if ($scope.cpp != null && $scope.spp != null) {
                var name = $window.document.getElementById('qty');
                name.focus();
            }

        })
    };
    $scope.check_name = function () {
        //$window.location.href = '/AddSupplierDetails.cshtml';
        $scope.Supplier = {};
        $scope.Supplier.Name = $scope.na;
        $http({
            method: "post",
            url: "/Home/NData",
            datatype: "json",
            data: JSON.stringify($scope.Supplier)
        }).then(function (response) {

            $scope.code = response.data.code;
            $scope.Barcode = response.data.Barcode;
            $scope.na = response.data.Name;
            $scope.des = response.data.Description;
            $scope.si = response.data.Size_C;
            $scope.cpp = response.data.Cost_Price;
            $scope.spp = response.data.Sale_Price;
            if ($scope.cpp != null && $scope.spp != null) {
                var name = $window.document.getElementById('qty');
                name.focus();
            }

        })
    };
    $scope.checkeds = function () {
        //$window.location.href = '/AddSupplierDetails.cshtml';
        $scope.Supplier = {};
        $scope.Supplier.Barcode = $scope.Barcode;
        $http({
            method: "post",
            url: "/Home/RDatad",
            datatype: "json",
            data: JSON.stringify($scope.Supplier)
        }).then(function (response) {

            $scope.code = response.data.code;
            $scope.Barcode = response.data.Barcode;
            $scope.na = response.data.Name;
            $scope.des = response.data.Description;
            $scope.si = response.data.Size_C;
            $scope.cpp = response.data.Cost_Price;
            $scope.spp = response.data.Sale_Price;
            if ($scope.cpp != null && $scope.spp != null) {
                var name = $window.document.getElementById('qty');
                name.focus();
            }

        })
    };
    $scope.checkc = function () {
        //$window.location.href = '/AddSupplierDetails.cshtml';
        $scope.Supplier = {};
        $scope.Supplier.code = $scope.code;
        $http({
            method: "post",
            url: "/Home/CData",
            datatype: "json",
            data: JSON.stringify($scope.Supplier)
        }).then(function (response) {

            $scope.code = response.data.code;
            $scope.Barcode = response.data.Barcode;
            $scope.na = response.data.Name;
            $scope.des = response.data.Description;
            $scope.si = response.data.Size_C;
            $scope.cpp = response.data.Cost_Price;
            $scope.spp = response.data.Sale_Price;
            if ($scope.cpp != null && $scope.spp != null) {
                var name = $window.document.getElementById('qty');
                name.focus();
            }

        })
    };
    $scope.checkn = function () {
        //$window.location.href = '/AddSupplierDetails.cshtml';
        $scope.Supplier = {};
        $scope.Supplier.Name = $scope.na;
        $http({
            method: "post",
            url: "/Home/NData",
            datatype: "json",
            data: JSON.stringify($scope.Supplier)
        }).then(function (response) {

            $scope.code = response.data.code;
            $scope.Barcode = response.data.Barcode;
            $scope.na = response.data.Name;
            $scope.des = response.data.Description;
            $scope.si = response.data.Size_C;
            $scope.cpp = response.data.Cost_Price;
            $scope.spp = response.data.Sale_Price;
            if ($scope.cpp != null && $scope.spp != null) {
                var name = $window.document.getElementById('qty');
                name.focus();
            }

        })
    };
    $scope.checkcode = function () {
        alert("code");
        $scope.Supplier = {};
        $scope.Supplier.Shop_Code = $scope.sp_code;
        $http({
            method: "post",
            url: "/Home/CodeData",
            datatype: "json",
            data: JSON.stringify($scope.Supplier)
        }).then(function (response) {
            alert(response.data.Shop_Code + '....' + response.data.Shop_Name + '....' + response.data.Contact);
            $scope.sp_code = response.data.Shop_Code;
            $scope.sp_name = response.data.Shop_Name;
            $scope.con = response.data.Contact;
            $scope.b_line = response.data.B_Line;
            $scope.addr = response.data.Address;
            if ($scope.sp_code != null && $scope.sp_name != null) {
                var name = $window.document.getElementById('or_booker');
                name.focus();
            }

        })
    };
    $scope.checkname = function () {
        //$window.location.href = '/AddSupplierDetails.cshtml';
        $scope.Supplier = {};
        alert();
        $scope.Supplier.Shop_Name = $scope.sp_name;
        $http({
            method: "post",
            url: "/Home/NameData",
            datatype: "json",
            data: JSON.stringify($scope.Supplier)
        }).then(function (response) {

            $scope.sp_code = response.data.Shop_Code;
            $scope.sp_name = response.data.Shop_Name;
            $scope.con = response.data.Contact;
            $scope.b_line = response.data.B_Line;
            $scope.addr = response.data.Address;
            if ($scope.sp_code != null && $scope.sp_name != null) {
                var name = $window.document.getElementById('or_booker');
                name.focus();
            }

        })
    };
    $scope.checkcontact = function () {
        //$window.location.href = '/AddSupplierDetails.cshtml';
        $scope.Supplier = {};
        $scope.Supplier.Contact = $scope.con;
        $http({
            method: "post",
            url: "/Home/ContactData",
            datatype: "json",
            data: JSON.stringify($scope.Supplier)
        }).then(function (response) {

            $scope.sp_code = response.data.Shop_Code;
            $scope.sp_name = response.data.Shop_Name;
            $scope.con = response.data.Contact;
            $scope.b_line = response.data.B_Line;
            $scope.addr = response.data.Address;
            if ($scope.sp_code != null && $scope.sp_name != null) {
                var name = $window.document.getElementById('or_booker');
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