$(document).ready(function () {
    fetchSaleId();
    //loadData2();
    $("#date").kendoDatePicker({ value: new Date(), format: "yyyy-MM-dd", });
    $("#fdate").kendoDatePicker({ value: new Date(), format: "yyyy-MM-dd", });
    $("#ldate").kendoDatePicker({ value: new Date(), format: "yyyy-MM-dd", });
    function fetchSaleId() {
        $.ajax({
            type: "GET",
            url: "/MSale/getSaleId",
            data: "{}",
            success: function (data) {
                $("#saleid").val(data);
                loadData();
            }
        });
    };
    dataSource4 = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/MSale/getCustomerDetail",
                dataType: "json"
            }
        }
    });
    dataSource1 = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/Customer/getCustomer",
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
                url: "/SaleLedger/getInvoice",
                dataType: "json"
            }
        }
    });
    dataSource3 = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/MSale/getBalanceInvoice",
                dataType: "json"
            }
        }
    });
    $("#cbinv").kendoMultiColumnComboBox({
        dataTextField: "CustomerName",
        dataValueField: "SaleID",
        height: 650,
        columns: [
            {
                field: "SaleID",
                title: "InvNo",
                width: 100
            },
            {
                field: "Date",
                title: "Date",
                width: 100,
                template: "#= kendo.toString(kendo.parseDate(Date, 'yyyy-MM-dd'), 'MM/dd/yyyy') #"
            },
            {
                field: "CustomerName",
                title: "Customer",
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
                width: 150
            },
            {
                field: "ReceivedBy",
                title: "ReceivedBy",
                width: 150
            },
            {
                field: "TotalAmt",
                title: "Total Amount",
                width: 200
            },
            {
                field: "Discount",
                title: "Dis",
                width: 120
            },
            {
                field: "Charges",
                title: "D.Charges",
                width: 120
            },
            {
                field: "NetTotal",
                title: "Net Total",
                width: 120
            },
            {
                field: "Payment",
                title: "Paid",
                width: 120
            }
        ],
        filter: "contains",
        filterFields: ["SaleID", "CustomerName", "Name", "ReceivedBy", "Date"],
        dataSource: dataSource3
    });
    $("#cbinv").change(function () {
        var vid = $("#cbinv").val();
        EditInvoiceItem(vid);
    });
    $("#editinvd").kendoMultiColumnComboBox({
        dataTextField: "CustomerName",
        dataValueField: "SaleID",
        height: 650,
        columns: [
            {
                field: "SaleID",
                title: "InvNo",
                width: 100
            },
            {
                field: "Date",
                title: "Date",
                width: 100,
                template: "#= kendo.toString(kendo.parseDate(Date, 'yyyy-MM-dd'), 'MM/dd/yyyy') #"
            },
            {
                field: "CustomerName",
                title: "Customer",
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
                width: 150
            },
            {
                field: "ReceivedBy",
                title: "ReceivedBy",
                width: 150
            },
            {
                field: "TotalAmt",
                title: "Total Amount",
                width: 200
            },
            {
                field: "Discount",
                title: "Dis",
                width: 120
            },
            {
                field: "Charges",
                title: "D.Charges",
                width: 120
            },
            {
                field: "NetTotal",
                title: "Net Total",
                width: 120
            },
            {
                field: "Payment",
                title: "Paid",
                width: 120
            }
        ],
        filter: "contains",
        filterFields: ["SaleID", "CustomerName", "Name", "ReceivedBy", "Date"],
        dataSource: dataSource2
    });
    $("#editinvd").change(function () {
        var vid = $("#editinvd").val();
        EditInvoiceItem(vid);
    });

    $("#ecname").kendoMultiColumnComboBox({
        dataTextField: "CustomerName",
        dataValueField: "CCode",
        height: 450,
        columns: [
            {
                field: "CCode",
                title: "Cust-Code",
                width: 150
            },
            {
                field: "CustomerName",
                title: "Cust-Name",
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
            }
        ],
        filter: "contains",
        filterFields: ["CustomerName", "CCode", "Mobile"],
        dataSource: dataSource1
    });
    $("#ecname").change(function () {
        var vid = $("#ecname").val();
        $.ajax({
            type: "POST",
            url: "/MSale/getCustomerRecord",
            data: '{cid:"' + vid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                $("#ccode").val(result.CCode);
                $("#cname").val(result.CustomerName);
            }
        });
    });
    $("#departmentsDropdown").kendoMultiColumnComboBox({
        dataTextField: "CustomerName",
        dataValueField: "CCode",
        height: 450,
        columns: [
            {
                field: "CCode",
                title: "Cust-Code",
                width: 150
            },
            {
                field: "CustomerName",
                title: "Cust-Name",
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
            }
        ],
        filter: "contains",
        filterFields: ["CustomerName", "CCode", "Mobile"],
        dataSource: dataSource1
    });
    $("#departmentsDropdown").change(function () {
        var cid = $("#departmentsDropdown").val();
        $.ajax({
            type: "POST",
            url: "/MSale/getCustomerRecord",
            data: '{cid:"' + cid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                $("#ccode").val(result.CCode);
                $("#cname").val(result.CustomerName);
                $("#comp").val(result.CompanyName);
                $("#contact").val(result.Mobile);
                //$("#balance").val(result.Balance);
                sum();
            }
        });
    });
});

//##########################################################################
//##########################################################################
function loadData() {
    var id = 1;
    var saleid = $("#saleid").val();
    var empObj = {
        Id: id,
        SaleID: saleid,
    };
    $.ajax({
        url: "/MSale/fetchSaleItem",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr class="next">';
                html += '<td class="aa" style="display:none;font-weight:bold">' + 0 + '</td>';
                html += '<td class="aa" style="display:none;font-weight:bold">' + item.SaleID + '</td>';
                html += '<td class="aa" style="display:none;font-weight:bold">' + item.Barcode + '</td>';
                html += '<td class="aa" style="font-weight:bold">' + item.Item + '</td>';
                html += '<td class="aa" style="font-weight:bold">' + item.Description + '</td>';
                html += '<td class="aa" style="font-weight:bold">' + item.AMeasure + '</td>';
                html += '<td class="aa" style="font-weight:bold">' + item.Measure + '</td>';
                html += '<td class="aa" style="font-weight:bold">' + item.Pcs + '</td>';
                html += '<td class="aa" style="font-weight:bold">' + item.DeliveredQty + '</td>';
                html += '<td class="aa" style="font-weight:bold">' + item.RemainingQty + '</td>';
                html += '<td class="aa" contenteditable="True" style="font-weight:bold">' + 0+ '</td>';
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
function sum() {
    let gtotal=$("#grosstotal").val();
    let pay = $("#payment").val();
    let bal = parseFloat(parseFloat(gtotal) - parseFloat(pay));
    $("#remamt").val(bal.toFixed(2));
};
var _rpay_ = document.getElementById("rpay");
_rpay_.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        RePay();
    }
});
function RePay() {
    let _bal = $("#remamt").val();
    let _rpay = $("#rpay").val();
    let bal = parseFloat(parseFloat(_bal) - parseFloat(_rpay));
    $("#nrec").val(bal.toFixed(2));
};
function EditInvoiceItem(ID) {
    $.ajax({
        type: "POST",
        url: "/MSale/getInvIdNo",
        data: '{cid:"' + ID + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            //$("#uid").val(result.Id);
            $("#saleid").val(result.SaleID);
            $("#ccode").val(result.CCode);
            $("#cname").val(result.CustomerName);
            $("#comp").val(result.Company);
            $("#contact").val(result.Contact);
            $("#grosstotal").val(result.NetTotal);
            $("#payment").val(result.Payment);
            var item = $('#departmentsDropdown').data("kendoMultiColumnComboBox");
            item.value(result.CustomerName);
            var item1 = $('#date').data("kendoDatePicker");
            item1.value(result.Date);
            var item3 = $('#editinvd').data("kendoMultiColumnComboBox");
            item3.value('');
            //CustomerUpdate();
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
            url: "/SaleLedger/Delete/" + ID,
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                loadData();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }
};

function saveInvoice() {
    var uid = $("#uid").val();
    var saleid = $("#saleid").val();
    var ccode = $("#ccode").val();
    var cname = $("#cname").val();
    var cont = $("#contact").val();
    var comp = $("#comp").val();
    var custn = $("#custn").val();
    var gpass = $("#gpass").val();
    var vehno = $("#vehno").val();
    var rby = $("#rby").val();
    var prby = $("#prby").val();
    var date = $("#date").val();
    var total = $("#grosstotal").val();
    var paid = $("#payment").val();
    var balance = $("#remamt").val();
    var payment = $("#rpay").val();
    var nbalance = $("#nrec").val();
    var itime = $("#dtime").val();
    var orderArr = [];
    orderArr.length = 0;

    $.each($("#itemtbl tbody tr"), function () {
        orderArr.push({
            Id: $(this).find('td:eq(0)').html(),
            SaleID: $(this).find('td:eq(1)').html(),
            Barcode: $(this).find('td:eq(2)').html(),
            Item: $(this).find('td:eq(3)').html(),
            Description: $(this).find('td:eq(4)').html(),
            AMeasure: $(this).find('td:eq(5)').html(),
            Measure: $(this).find('td:eq(6)').html(),
            Pcs: $(this).find('td:eq(7)').html(),
            DeliveredQty: $(this).find('td:eq(8)').html(),
            RemainingQty: $(this).find('td:eq(9)').html(),
            IssueQty: $(this).find('td:eq(10)').html()
        });
    });
    var data = JSON.stringify({
        Id: uid,
        SaleID: saleid,
        CCode: ccode,
        CustomerName: cname,
        Company: comp,
        Name: custn,
        Contact: cont,
        ReceivedBy: rby,
        PayReceivedBy: prby,
        GatePass: gpass,
        VehicleNo: vehno,
        Total: total,
        Paid: paid,
        Balance: balance,
        Payment: payment,
        NetBalance: nbalance,
        Date: date,
        ITime: itime,
        order: orderArr
    });
    $.ajax({
        url: "/SaleLedger/SaleSaveInvoice",
        data: data,
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //location.reload();
            var _item = $('#departmentsDropdown').data("kendoMultiColumnComboBox");
            _item.value(null);
            $("#uid").val('');
            $("#ccode").val('');
            $("#cname").val('');
            $("#contact").val('');
            $("#comp").val('');
            $("#custn").val('');
            $("#gpass").val('');
            $("#vehno").val('');
            $("#rby").val('');
            $("#prby").val('');
            $("#date").val('');
            $("#sdate").val('');
            $("#totalcost").val('');
            $("#totalsale").val('');
            $("#discount").val('');
            $("#nettotal").val('');
            $("#payment").val('');
            $("#dtime").val('');
            fetchSaleId();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
};

function addleadingzero(number, size) {
    var s = "0000" + number;
    return s.substr(s.length - size);
};
//function fetchvrecord() {
//    var vid = $("#vcode").val();
//    $.ajax({
//        type: "POST",
//        url: "/Purchase/getVendorRecord",
//        data: '{vid:"' + vid + '"}',
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (result) {
//            $("#vcode").val(result.VCode);
//            $("#vname").val(result.VendorName);
//            $("#pbal").val(result.Balance);
//        }
//    });
//};
function CustomerUpdate() {
    var cid = $("#ccode").val();
    //alert(vid);
    $.ajax({
        type: "POST",
        url: "/MSale/getCustomerRecord",
        data: '{cid:"' + cid + '"}',
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
    var cid = $("#saleid").val();
    var ccode = $("#ccode").val();
    var cname = $("#cname").val();
    var empObj = {
        SaleID: cid,
        CCode: ccode,
        CustomerName: cname
    };
    $.ajax({
        type: "POST",
        url: "/SaleLedger/DeletePreviousInvoice",
        data: JSON.stringify(empObj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            location.reload();
        }
    });
};
function SearchloadData() {
    var ccode = $("#ccode").val();
    var cname = $("#cname").val();
    var fdate = $("#fdate").val();
    var ldate = $("#ldate").val();
    var empObj = {
        CCode: ccode,
        CustomerName: cname,
        Date: fdate,
        DDate: ldate
    };
    $.ajax({
        type: "POST",
        url: "/SaleLedger/SaleList",
        data: JSON.stringify(empObj),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //console.log(result);
            var html = '';
            $.each(result, function (key, item) {
                var dt = new Date(parseInt(item.Date.replace('/Date(', '')))
                var dtfinal = addleadingzero(dt.getDate(), 2) + '-' + addleadingzero(dt.getMonth() + 1, 2) + '-' + addleadingzero(dt.getFullYear(), 4)
                html += '<tr>';
                html += '<td class="aa">' + item.SaleID + '</td>';
                html += '<td class="aa">' + dtfinal + '</td>';
                html += '<td class="aa">' + item.CustomerName + '</td>';
                html += '<td class="aa">' + item.GatePass + '</td>';
                html += '<td class="aa">' + item.VehicleNo + '</td>';
                html += '<td class="aa">' + item.ReceivedBy + '</td>';
                html += '<td class="aa">' + item.Total + '</td>';
                html += '<td class="aa">' + item.Paid + '</td>';
                html += '<td class="aa">' + item.Balance + '</td>';
                html += '<td class="aa">' + item.Payment + '</td>';
                html += '<td class="aa">' + item.NetBalance + '</td>';
                html += '<td class=""> <a href="#" class="btn btn-sm btn-warning" onclick="updateSaleId(' + item.Id + ')"><i class="fa fa-pencil"></i></a></td>';
                html += '</tr>';
            });
            $('.spobody').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
};
function updateSaleId(ID) {
    $.ajax({
        type: "POST",
        url: "/MSale/getEditInvoice",
        data: '{vid:"' + ID + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            $("#uid").val(result.Id);
            $("#saleid").val(result.SaleID);
            $("#ccode").val(result.CCode);
            $("#cname").val(result.CustomerName);
            $("#comp").val(result.Company);
            $("#contact").val(result.Contact);
            $("#grosstotal").val(result.NetTotal);
            $("#payment").val(result.Payment);
            //alert($("#payment").val());
            var item = $('#departmentsDropdown').data("kendoMultiColumnComboBox");
            item.value(result.CustomerName);
            var item1 = $('#date').data("kendoDatePicker");
            item1.value(result.Date);
            var item3 = $('#editinvd').data("kendoMultiColumnComboBox");
            item3.value('');
            //CustomerUpdate();
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
    $("#tcname").text($("#cname").val());
    $("#tname").text($("#custn").val());
    $("#tgpass").text($("#gpass").val());
    $("#tvehno").text($("#vehno").val());
    //$("#tname").text($("#custn").val());
    $("#trby").text($("#rby").val());
    $("#tprby").text($("#prby").val());
    $("#tcont").text($("#contact").val());
    $("#tidate").text($("#date").val());
    $("#tddate").text($("#sdate").val());
    $("#tamt").text($("#totalsale").val());
    $("#tdis").text($("#discount").val());
    $("#tpre").text($("#balance").val());
    alert($("#payment").val());
    $("#tpayment").text($("#payment").val());
    $("#trem").text($("#remamt").val());
    $("#tsinv").text($("#saleid").val());
    $("#ttime").text($("#time").val());
    $("#tdtime").text($("#dtime").val());
    //$(".divhi").hide();
    //$(".tfhide").show();
};
function printdiv(printpage) {
    $(".divhi").hide();
    $(".thhide").show();//thhide Header Show
    $(".tfhide").show();//tfhide footer Show
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