$(document).ready(function () {
    fetchPoId();
    //loadData2();
    $("#date").kendoDatePicker({ value: new Date(), format: "yyyy-MM-dd", });
    $("#sdate").kendoDatePicker({ value: new Date(), format: "yyyy-MM-dd", });
    $("#fdate").kendoDatePicker({ value: new Date(), format: "yyyy-MM-dd", });
    $("#ldate").kendoDatePicker({ value: new Date(), format: "yyyy-MM-dd", });
    function fetchPoId() {
        $.ajax({
            type: "GET",
            url: "/Purchase/getPoNo",
            data: "{}",
            success: function (data) {
                $("#Poid").val(data);
                loadData();
            }
        });
    };
    
    dataSource1 = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/Vendor/getVendor",
                dataType: "json"
            }
        }
    });
    dataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/Purchase/getProduct",
                dataType: "json"
            }
        }
    });
    dataSource2 = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/Purchase/getInvoice",
                dataType: "json"
            }
        }
    });
    dataSource3 = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/Purchase/getBalanceInvoice",
                dataType: "json"
            }
        }
    });
    $("#vbinv").kendoMultiColumnComboBox({
        dataTextField: "VendorName",
        dataValueField: "POID",
        height: 650,
        columns: [
            {
                field: "POID",
                title: "InvNo",
                width: 100
            },
            {
                field: "CDate",
                title: "Date",
                width: 100
            },
            {
                field: "VendorName",
                title: "Cust-Name",
                width: 200
            },
            {
                field: "Factory",
                title: "Factory",
                width: 200
            },
            {
                field: "Name",
                title: "Name",
                width: 200
            },
            {
                field: "GatePass",
                title: "GatePass",
                width: 150
            },
            {
                field: "VehicleNo",
                title: "VehicleNo",
                width: 100
            },
            {
                field: "ReceivedBy",
                title: "ReceivedBy",
                width: 200
            },
            {
                field: "TotalAmt",
                title: "TotalAmt",
                width: 160
            }
        ],
        filter: "contains",
        filterFields: ["POID", "VendorName", "Factory", "Name", "ReceivedBy", "GatePass", "VehicleNo", "Date", "DDate"],
        dataSource: dataSource3
    });
    $("#vbinv").change(function () {
        var vid = $("#editinvd").val();
        EditInvoiceItem(vid);
    });
    $("#editinvd").kendoMultiColumnComboBox({
        dataTextField: "VendorName",
        dataValueField: "POID",
        height: 650,
        columns: [
            {
                field: "POID",
                title: "InvNo",
                width: 100
            },
            {
                field: "CDate",
                title: "Date",
                width: 100
            },
            {
                field: "VendorName",
                title: "Cust-Name",
                width: 200
            },
            {
                field: "Factory",
                title: "Factory",
                width: 200
            },
            {
                field: "Name",
                title: "Name",
                width: 200
            },
            {
                field: "GatePass",
                title: "GatePass",
                width: 150
            },
            {
                field: "VehicleNo",
                title: "VehicleNo",
                width: 100
            },
            {
                field: "ReceivedBy",
                title: "ReceivedBy",
                width: 200
            },
            {
                field: "TotalAmt",
                title: "TotalAmt",
                width: 160
            }
        ],
        filter: "contains",
        filterFields: ["POID", "VendorName", "Factory", "Name", "ReceivedBy", "GatePass", "VehicleNo", "Date", "DDate"],
        dataSource: dataSource2
    });
    $("#editinvd").change(function () {
        var vid = $("#editinvd").val();
        EditInvoiceItem(vid);
    });
    
    $("#ecname").kendoMultiColumnComboBox({
        dataTextField: "VendorName",
        dataValueField: "VCode",
        height: 450,
        columns: [
            {
                field: "VCode",
                title: "Cust-Code",
                width: 150
            },
            {
                field: "VendorName",
                title: "Cust-Name",
                width: 200
            },
            {
                field: "FactoryName",
                title: "Factory Name",
                width: 200
            },
            {
                field: "Mobile",
                title: "Mobile",
                width: 200
            },
            {
                field: "Address",
                title: "Address",
                width: 400
            },
            {
                field: "Balance",
                title: "Balance",
                width: 200
            }
        ],
        filter: "contains",
        filterFields: ["VendorName", "VCode", "FactoryName", "Mobile"],
        dataSource: dataSource1
    });
    $("#ecname").change(function () {
        var vid = $("#ecname").val();
        $.ajax({
            type: "POST",
            url: "/Purchase/getVendorRecord",
            data: '{vid:"' + vid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                $("#vcode").val(result.VCode);
                $("#vname").val(result.VendorName);
            }
        });
    });
    $("#departmentsDropdown").kendoMultiColumnComboBox({
        dataTextField: "VendorName",
        dataValueField: "VCode",
        height: 450,
        columns: [
            {
                field: "VCode",
                title: "Cust-Code",
                width: 150
            },
            {
                field: "VendorName",
                title: "Cust-Name",
                width: 200
            },
            {
                field: "FactoryName",
                title: "Factory Name",
                width: 200
            },
            {
                field: "Mobile",
                title: "Mobile",
                width: 200
            },
            {
                field: "Address",
                title: "Address",
                width: 400
            },
            {
                field: "Balance",
                title: "Balance",
                width: 200
            }
        ],
        filter: "contains",
        filterFields: ["VendorName", "VCode", "FactoryName","Mobile"],
        dataSource: dataSource1
    });
    $("#departmentsDropdown").change(function () {
        var vid = $("#departmentsDropdown").val();
        $.ajax({
            type: "POST",
            url: "/Purchase/getVendorRecord",
            data: '{vid:"' + vid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                $("#vcode").val(result.VCode);
                $("#vname").val(result.VendorName);
                $("#fact").val(result.FactoryName);
                $("#contact").val(result.Mobile);
                $("#balance").val(result.Balance);
            }
        });
    });
    $("#Item").kendoMultiColumnComboBox({
        dataTextField: "Item",
        dataValueField: "BatchNo",
        height: 450,
        columns: [
            {
                field: "BatchNo",
                title: "BatchNo",
                width: 200
            },
            {
                field: "Item",
                title: "Item",
                width: 400
            },
            {
                field: "Size",
                title: "Size",
                width: 150
            },
            {
                field: "Colour",
                title: "Colour",
                width: 150
            },
            {
                field: "CostRate",
                title: "Rate",
                width: 200
            },
            {
                field: "Stock",
                title: "Stock",
                width: 200
            }
        ],
        footerTemplate: 'Total #: instance.dataSource.total() # items found',
        filter: "contains",
        filterFields: ["Barcode","BatchNo", "Item","Size"],
        dataSource: dataSource
    });
    $("#Item").change(function () {
        var barcode = $("#Item").val();
        var empObj = {
            //Barcode: barcode
            BatchNo: barcode
        };
        $.ajax({
            url: "/Purchase/FetchRateBatchNo",//FetchRate
            data: JSON.stringify(empObj),
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                $("#bcode").val(result.Barcode);
                $("#batchno").val(result.BatchNo);
                $("#bitem").val(result.Item);
                $("#size").val(result.Size);
                $("#colour").val(result.Colour);
                $("#rate").val(result.CostRate);
                $("#srate").val(result.SaleRate);
                $("#Item").val(result.Item);
                $("#batchno").focus();
            },
            error: function (errormessage) {
                alert("Entities Change Or Remove....");
            }
        });
    });
    
});

var _batchno = document.getElementById("batchno");
_batchno.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        $("#rate").focus();
    }
});
var _rate = document.getElementById("rate");
_rate.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        $("#srate").focus();
    }
});
var ratec = document.getElementById("srate");
ratec.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        $("#Qty").focus();
    }
});
$("#Qty").change(function () {
    var barcode = $("#bcode").val();
    var item = $("#bitem").val();
    var batch = $("#batchno").val();
    var size = $("#size").val();
    var colour = $("#colour").val();
    var qty = $("#Qty").val();
    var poid = $("#Poid").val();
    var rate = $("#rate").val();
    var srate = $("#srate").val();
    let total = parseFloat(parseFloat(rate) * parseFloat(qty));
    var tBody = $("#itemtbl > tbody")[0];
    //Add Row.
    var row = tBody.insertRow(-1);
    //Add Name cell.
    // 1
    var cell = $(row.insertCell(-1));
    cell.html(poid);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.css("display", "none");
    cell.attr('align', "center");
    // 2
    var cell = $(row.insertCell(-1));
    cell.html(barcode);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.css("display", "none");
    cell.attr('align', "center");
    // 3
    var cell = $(row.insertCell(-1));
    cell.html(batch);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.css("display", "none");
    cell.attr('align', "center");
    // 3
    var cell = $(row.insertCell(-1));
    cell.html(item);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    //cell.css("display", "none");
    cell.attr('align', "center");
    // 4
    var cell = $(row.insertCell(-1));
    cell.html(size);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    //cell.css("display", "none");
    cell.attr('align', "center");
    // 4
    var cell = $(row.insertCell(-1));
    cell.html(colour);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    //cell.css("display", "none");
    cell.attr('align', "center");
    // 5
    var cell = $(row.insertCell(-1));
    cell.html(rate);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.attr('align', "center");
    // 5
    var cell = $(row.insertCell(-1));
    cell.html(srate);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.attr('align', "center");
    cell.css("display", "none");
    // 7
    var cell = $(row.insertCell(-1));
    cell.html(qty);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.addClass('next');
    cell.attr('contenteditable', true);
    cell.attr('align', "center");
    cell.attr('align', "center");
    // 8
    var cell = $(row.insertCell(-1));
    cell.html(total.toFixed(2));
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.attr('align', "center");
    // 10
    cell = $(row.insertCell(-1));
    cell.addClass('divhi');
    var btnRemove = $("<input />");
    btnRemove.attr("type", "submit");
    btnRemove.attr("class", "btn btn-sm btn-danger ");
    btnRemove.attr("onclick", "Remove(this);");
    btnRemove.val("Del");
    cell.append(btnRemove);
    //<i class="fa fa-trash-o"></i>
    //###########################################################
    $("#bcode").val('');
    $("#batchno").val('');
    $("#bitem").val('');
    $("#size").val('');
    $("#Qty").val('');
    $("#rate").val('');
    $("#srate").val('');
    var item = $('#Item').data("kendoMultiColumnComboBox");
    item.value(null);
    item.focus();
    sum();
});
function Remove(button) {
    //Determine the reference of the Row using the Button.
    var row = $(button).closest("TR");
    var name = $("TD", row).eq(3).html();
    if (confirm("Do you want to delete: " + name)) {
        //Get the reference of the Table.
        var table = $("#itemtbl")[0];
        table.deleteRow(row[0].rowIndex);
        sum();
    }
};
function sum() {
    var grandT = 0;
    $("#itemtbl > TBODY > tr").each(function () {
        var t10 = $(this).find('td').eq(9).html();
        if (!isNaN(t10)) {
            grandT += parseFloat(t10);
        }
    });
    $("#purchase").val(grandT.toFixed(2));
    discountFun();
    paymentFun();
};
//##########################################################################
$("#itemtbl").on('keyup', '.next', function () {
    //if (event.keyCode === 13) {

    //}
    var currentRow = $(this).closest("tr");
    var rate = currentRow.find("td:eq(6)").text();
    var qty = currentRow.find("td:eq(8)").text();
    if (qty > 0) {
        let sum = parseFloat(parseFloat(rate) * parseFloat(qty));
        currentRow.find("td:eq(9)").html(sum.toFixed(1));
    } else {
        let sum = parseFloat(parseFloat(rate) * parseFloat(0));
        currentRow.find("td:eq(9)").html(sum.toFixed(1));
    }
    sum();
});
//##################################################################
var dis = document.getElementById("discount");
dis.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        discountFun();
        paymentFun();
    }
});
function discountFun() {
    //alert();
    var diss = $("#discount").val();
    var purch = $("#purchase").val();
    if (diss) {
        var sum = parseFloat(parseFloat(purch) - parseFloat(diss));
        $("#nettotal").val(sum);
    } else {
        $("#purchase").val(purch);
        $("#nettotal").val(purch);
        $("#discount").val(0);
    }
};
//##################################################################
var pay = document.getElementById("payment");
pay.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        discountFun();
        paymentFun();
    }
});
function paymentFun() {
    
    var payy = $("#payment").val();
    var ntotal = $("#nettotal").val();
    //alert(payy);
    if (payy) {
        
        var sum = parseFloat(parseFloat(ntotal) - parseFloat(payy));
        $("#remamt").val(sum.toFixed(1));
    } else {
        $("#payment").val(0);
        $("#remamt").val(ntotal);
    }
};
//##################################################################
//##########################################################################
//##########################################################################
//##########################################################################
function loadData() {
    var id = 1;
    var poid = $("#Poid").val();
    var empObj = {
        Id: id,
        POID: poid,
    };
    $.ajax({
        url: "/Purchase/fetchPoItem",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td class="aa" style="display:none;font-weight:bold">' + item.POID + '</td>';
                html += '<td class="aa" style="display:none;font-weight:bold">' + item.Barcode + '</td>';
                html += '<td class="aa" style="display:none;font-weight:bold">' + item.BatchNo + '</td>';
                html += '<td class="aa" style="font-weight:bold">' + item.Item + '</td>';
                html += '<td class="aa" style="font-weight:bold">' + item.Size + '</td>';
                html += '<td class="aa" style="font-weight:bold">' + item.Unit + '</td>';
                html += '<td class="aa" style="font-weight:bold">' + item.Rate + '</td>';
                html += '<td class="aa" style="display:none;font-weight:bold">' + item.SaleRate + '</td>';
                html += '<td class="aa next" contenteditable="True" style="font-weight:bold">' + item.Qty + '</td>';
                html += '<td class="aa" style="font-weight:bold">' + item.Total + '</td>';
                html += '<td class="divhi"> <a href="#" class="btn btn-sm btn-danger" onclick="Delele(' + item.Id + ')"><i class="fa fa-trash-o"></i></a></td>';
                html += '</tr>';
            });
            $('.itembody').html(html);
            sum();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
};
function EditInvoiceItem(ID) {
        $.ajax({
            type: "POST",
            url: "/Purchase/getInvIdNo",
            data: '{vid:"' + ID + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                $("#uid").val(result.Id);
                $("#Poid").val(result.POID);
                $("#vcode").val(result.VCode);
                $("#vname").val(result.VendorName);
                $("#fact").val(result.Factory);
                $("#custn").val(result.Name);
                $("#contact").val(result.Contact);
                $("#gpass").val(result.GatePass);
                $("#vehno").val(result.VehicleNo);
                $("#rby").val(result.ReceivedBy);
                $("#prby").val(result.PayReceivedBy);
                $("#purchase").val(result.PurchaseAmt);
                $("#discount").val(result.Discount);
                $("#nettotal").val(result.TotalAmt);
                $("#payment").val(result.Payment);
                //alert($("#payment").val());
                var item = $('#departmentsDropdown').data("kendoMultiColumnComboBox");
                item.value(result.VendorName);
                var item1 = $('#date').data("kendoDatePicker");
                item1.value(result.Date);
                var item2 = $('#sdate').data("kendoDatePicker");
                item2.value(result.DDate);
                var item3 = $('#editinvd').data("kendoMultiColumnComboBox");
                item3.value('');
                VendorUpdate();
                $('#myModal').modal('hide');
                $('.modal-backdrop').hide();
                loadData();
            }
        });
    };
function Delele(ID) {
    var ans = confirm("Are you sure you want to delete this Record?");
    if (ans) {
        $.ajax({
            url: "/Purchase/Delete/" + ID,
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                loadData();
                sum();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }
};

function saveInvoice() {
    var uid = $("#uid").val();
    var vcode = $("#vcode").val();
    var vname = $("#vname").val();
    var cont = $("#contact").val();
    var fact = $("#fact").val();
    var custn = $("#custn").val();
    var gpass = $("#gpass").val();
    var vehno = $("#vehno").val();
    var rby = $("#rby").val();
    var prby = $("#prby").val();
    var poid = $("#Poid").val();
    var date = $("#date").val();
    var sdate = $("#sdate").val();
    var purchase = $("#purchase").val();
    var discc = $("#discount").val();
    var ttotal = $("#nettotal").val();
    var payment = $("#payment").val();
    var itime = $("#time").val();
    var orderArr = [];
    orderArr.length = 0;

    $.each($("#itemtbl tbody tr"), function () {
        orderArr.push({
            POID: $(this).find('td:eq(0)').html(),
            Barcode: $(this).find('td:eq(1)').html(),
            BatchNo: $(this).find('td:eq(2)').html(),
            Item: $(this).find('td:eq(3)').html(),
            Size: $(this).find('td:eq(4)').html(),
            Colour: $(this).find('td:eq(5)').html(),
            Rate: $(this).find('td:eq(6)').html(),
            SaleRate: $(this).find('td:eq(7)').html(),
            Qty: $(this).find('td:eq(8)').html(),
            Total: $(this).find('td:eq(9)').html()
        });
    });
    if (vname != "") {
        var data = JSON.stringify({
            Id:uid,
            POID: poid,
            VCode: vcode,
            VendorName: vname,
            Factory: fact,
            Name: custn,
            Contact: cont,
            ReceivedBy: rby,
            PayReceivedBy: prby,
            GatePass: gpass,
            VehicleNo: vehno,
            PurchaseAmt: purchase,
            Discount: discc,
            TotalAmt: ttotal,
            Payment: payment,
            Date: date,
            DDate: sdate,
            ITime: itime,
            order: orderArr
        });
        $.ajax({
            url: "/Purchase/POSaveInvoice",
            data: data,
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                //location.reload();
                fetchPoId();
                //loadData();
                $("#vcode").val('');
                $("#vname").val('');
                $("#fact").val('');
                $("#custn").val('');
                $("#gpass").val('');
                $("#vehno").val('');
                $("#rby").val('');
                $("#Poid").val('');
                $("#date").val('');
                $("#sdate").val('');
                $("#purchase").val('');
                $("#discount").val('');
                $("#nettotal").val('');
                $("#payment").val('');
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    } else {
        alert("Please Select Vendor");
    }
};

function addleadingzero(number, size) {
    var s = "0000" + number;
    return s.substr(s.length - size);
};
function fetchvrecord() {
    var vid = $("#vcode").val();
    $.ajax({
        type: "POST",
        url: "/Purchase/getVendorRecord",
        data: '{vid:"' + vid + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            $("#vcode").val(result.VCode);
            $("#vname").val(result.VendorName);
            $("#pbal").val(result.Balance);
        }
    });
};
function VendorUpdate() {
    var vid = $("#vcode").val();
    //alert(vid);
    $.ajax({
        type: "POST",
        url: "/Purchase/getVendorRecord",
        data: '{vid:"' + vid + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            $("#balance").val(result.Balance);
        }
    });
}; 
function addleadingzero(number, size) {
    var s = "0000" + number;
    return s.substr(s.length - size);
};
function CancelInvoice() {
    var vid = $("#Poid").val();
    var vcode = $("#vcode").val();
    var vname = $("#vname").val();
    var empObj = {
        POID: vid,
        VCode: vcode,
        VendorName: vname
    };
    $.ajax({
        type: "POST",
        url: "/Purchase/DeletePreviousInvoice",
        data: JSON.stringify(empObj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            location.reload();
        }
    });
};
function SearchloadData() {
    var vcode = $("#vcode").val();
    var vname = $("#vname").val();
    var fdate = $("#fdate").val();
    var ldate = $("#ldate").val();
    var empObj = {
        VCode: vcode,
        VendorName: vname,
        Date: fdate,
        DDate: ldate
    };
    $.ajax({
        type: "POST",
        url: "/Purchase/PoList",
        data: JSON.stringify(empObj),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //console.log(result);
            var html = '';
            $.each(result, function (key, item) {
                var dt = new Date(parseInt(item.Date.replace('/Date(', '')))
                var dtfinal = addleadingzero(dt.getDate(), 2) + '-' + addleadingzero(dt.getMonth() + 1, 2) + '-' + addleadingzero(dt.getFullYear(), 4)
                var dt1 = new Date(parseInt(item.DDate.replace('/Date(', '')))
                var dtfinal1 = addleadingzero(dt1.getDate(), 2) + '-' + addleadingzero(dt1.getMonth() + 1, 2) + '-' + addleadingzero(dt1.getFullYear(), 4)
                html += '<tr>';
                html += '<td class="aa">' + item.POID + '</td>';
                html += '<td class="aa">' + dtfinal + '</td>';
                html += '<td class="aa">' + dtfinal1 + '</td>';
                //html += '<td class="aa">' + item.Factory + '</td>';
                html += '<td class="aa">' + item.Name + '</td>';
                html += '<td class="aa">' + item.ReceivedBy + '</td>';
                html += '<td class="aa">' + item.GatePass + '</td>';
                html += '<td class="aa">' + item.VehicleNo + '</td>';
                html += '<td class="aa">' + item.TotalAmt + '</td>';
                html += '<td class="aa">' + item.Payment + '</td>';
                html += '<td class=""> <a href="#" class="btn btn-sm btn-warning" onclick="updatePoId(' + item.Id + ')"><i class="fa fa-pencil"></i></a></td>';
                html += '</tr>';
            });
            $('.spobody').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
};
function updatePoId(ID) {
    $.ajax({
        type: "POST",
        url: "/Purchase/getEditInvoice",
        data: '{vid:"' + ID + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            $("#uid").val(result.Id);
            $("#Poid").val(result.POID);
            $("#vcode").val(result.VCode);
            $("#vname").val(result.VendorName);
            $("#fact").val(result.Factory);
            $("#custn").val(result.Name);
            $("#gpass").val(result.GatePass);
            $("#vehno").val(result.VehicleNo);
            $("#rby").val(result.ReceivedBy);
            $("#purchase").val(result.PurchaseAmt);
            $("#discount").val(result.Discount);
            $("#nettotal").val(result.TotalAmt);
            $("#payment").val(result.Payment);
            //alert($("#payment").val());
            var item = $('#departmentsDropdown').data("kendoMultiColumnComboBox");
            item.value(result.VendorName);
            var item1 = $('#date').data("kendoDatePicker");
            item1.value(result.Date);
            var item2 = $('#sdate').data("kendoDatePicker");
            item2.value(result.DDate);
            var item3 = $('#editinvd').data("kendoMultiColumnComboBox");
            item3.value('');
            var item4 = $('#ecname').data("kendoMultiColumnComboBox");
            item4.value('');
            VendorUpdate();
            $('#myModal').modal('hide');
            $('.modal-backdrop').hide();
            loadData();
        }
    });
};
function Refresh() {
    location.reload();
};
function textValues() {
    $("#tvname").text($("#vname").val());
    $("#tfact").text($("#fact").val());
    $("#tgpass").text($("#gpass").val());
    $("#tvehno").text($("#vehno").val());
    $("#tname").text($("#custn").val());
    $("#trby").text($("#rby").val());
    $("#tprby").text($("#prby").val());
    $("#tcont").text($("#contact").val());
    $("#tidate").text($("#date").val());
    $("#tddate").text($("#sdate").val());
    $("#tamt").text($("#purchase").val());
    $("#tdis").text($("#discount").val());
    $("#tnamt").text($("#nettotal").val());
    $("#tpay").text($("#payment").val());
    $("#trem").text($("#remamt").val());
    $(".tinv").text($("#Poid").val());
    $("#ttime").text($("#time").val());
    $(".divhi").hide();
    $(".tfhide").show();
};
function printdiv(printpage) {
    saveInvoice();
    textValues();
    var headstr = "<html><head><title></title></head><body>";
    var footstr = "</body>";
    var newstr = document.all.item(printpage).innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = headstr + newstr + footstr;
    window.print();
    location.reload();
    document.body.innerHTML = oldstr;
    return false;
};