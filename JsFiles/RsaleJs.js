$(document).ready(function () {
    fetchSaleId();
    //loadData2();
    $("#date").kendoDatePicker({ value: new Date(), format: "yyyy-MM-dd", });
    $("#sdate").kendoDatePicker({ value: new Date(), format: "yyyy-MM-dd", });
    $("#fdate").kendoDatePicker({ value: new Date(), format: "yyyy-MM-dd", });
    $("#ldate").kendoDatePicker({ value: new Date(), format: "yyyy-MM-dd", });
    function fetchSaleId() {
        $.ajax({
            type: "GET",
            url: "/RSale/getSaleId",
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
                url: "/RSale/getCustomerDetail",
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
                url: "/RSale/getInvoice",
                dataType: "json"
            }
        }
    });
    dataSource3 = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/RSale/getBalanceInvoice",
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
            url: "/RSale/getCustomerRecord",
            data: '{cid:"' + vid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                $("#ccode").val(result.CCode);
                $("#cname").val(result.CustomerName);
                $("#pbal").val(result.Balance);
            }
        });
    });
    $("#custid").kendoMultiColumnComboBox({
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
    $("#custid").change(function () {
        var cid = $("#custid").val();
        $.ajax({
            type: "POST",
            url: "/RSale/getCustomerRecord",
            data: '{cid:"' + cid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                $("#ccode").val(result.CCode);
                $("#cname").val(result.CustomerName);
                $("#comp").val(result.CompanyName);
                $("#contact").val(result.Mobile);
                $("#pbal").val(result.Balance);
                sum();
            }
        });
    });
    $("#Item").kendoMultiColumnComboBox({
        dataTextField: "Item",
        dataValueField: "BatchNo",
        height: 450,
        columns: [
            {
                field: "Barcode",
                title: "Barcode",
                width: 150
            },
            {
                field: "BatchNo",
                title: "BatchNo",
                width: 150
            },
            {
                field: "Item",
                title: "Item",
                width: 400
            }
            //,
            //{
            //    field: "Size",
            //    title: "Size",
            //    width: 150
            //},
            //{
            //    field: "Colour",
            //    title: "Colour",
            //    width: 100
            //}
            ,
            {
                field: "CostRate",
                title: "CostRate",
                width: 150
            },
            {
                field: "SaleRate",
                title: "SaleRate",
                width: 150
            },
            {
                field: "Stock",
                title: "Stock",
                width: 150
            }
        ],
        footerTemplate: 'Total #: instance.dataSource.total() # items found',
        filter: "contains",
        filterFields: ["Barcode", "Item", "Size"],
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
                $("#bitem").val(result.Item);
                $("#bno").val(result.BatchNo);
                $("#size").val(result.Size);
                $("#unit").val(result.Colour);
                $("#costrate").val(result.CostRate);
                $("#salerate").val(result.SaleRate);
                $("#salerate").focus();
            },
            error: function (errormessage) {
                alert("Entities Change Or Remove....");
            }
        });
    });

});
var bbcode = document.getElementById("bcode");
bbcode.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        var barcode = $("#bcode").val();
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
                $("#bno").val(result.BatchNo);
                $("#bitem").val(result.Item);
                $("#size").val(result.Size);
                $("#unit").val(result.Colour);
                $("#costrate").val(result.CostRate);
                $("#salerate").val(result.SaleRate);
                addProductbarcode();
                //$("#bcode").focus();
            },
            error: function (errormessage) {
                alert("Entities Change Or Remove....");
            }
        });
    }
});
var ratec = document.getElementById("salerate");
ratec.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        $("#Qty").focus();
        $("#Qty").val(1);
    }
});
//$("#Qty").change(function () {
//    addProduct();
//});
var qtyc = document.getElementById("Qty");
qtyc.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        addProduct();
    }
});
function addProductbarcode() {
    let qty = 1;
    var barcode = $("#bcode").val();
    var bano = $("#bno").val();
    var item = $("#bitem").val();
    var size = $("#size").val();
    var unit = $("#unit").val();
    var crate = $("#costrate").val();
    var srate = $("#salerate").val();
    var sqty = $("#Qty").val();
    var saleid = $("#saleid").val();
    if (sqty != "") {
        qty = sqty;
    }
    let ctotal = parseFloat(parseFloat(crate) * parseFloat(qty));
    let stotal = parseFloat(parseFloat(srate) * parseFloat(qty));

    var tBody = $("#itemtbl > tbody")[0];
    //Add Row.
    var row = tBody.insertRow(-1);
    row.classList.add('custom-row-class');
    // ##########################################################
    var cell = $(row.insertCell(-1));
    cell.html(saleid);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.css("display", "none");
    cell.attr('align', "center");
    // ###########################################################
    var cell = $(row.insertCell(-1));
    cell.html(barcode);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.css("display", "none");
    cell.attr('align', "center");
    // ###########################################################
    var cell = $(row.insertCell(-1));
    cell.html(bano);
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
    cell.attr('contenteditable', true);
    cell.css("display", "none");
    cell.attr('align', "center");
    // 5
    var cell = $(row.insertCell(-1));
    cell.html(unit);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.attr('align', "center");
    cell.css("display", "none");
    // 5
    var cell = $(row.insertCell(-1));
    cell.html(crate);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.attr('align', "center");
    cell.css("display", "none");
    // 5
    var cell = $(row.insertCell(-1));
    cell.html(srate);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.attr('align', "center");
    cell.addClass('nextr');
    cell.attr('contenteditable', true);
    // 7
    var cell = $(row.insertCell(-1));
    cell.html(qty);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.addClass('next');
    cell.attr('contenteditable', true);
    cell.attr('align', "center");
    // 5
    var cell = $(row.insertCell(-1));
    cell.html(ctotal.toFixed(1));
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.attr('align', "center");
    cell.css("display", "none");
    // 8
    var cell = $(row.insertCell(-1));
    cell.html(stotal.toFixed(2));
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
    //###########################################################
    $("#bcode").val('');
    $("#bno").val('');
    $("#size").val('');
    $("#unit").val('');
    $("#costrate").val('');
    $("#salerate").val('');
    $("#Qty").val('');
    var item = $('#Item').data("kendoMultiColumnComboBox");
    item.value(null);
    $("#bcode").focus();
    sum();
};
function addProduct() {
    let qty = 1;
    var barcode = $("#bcode").val();
    var bano = $("#bno").val();
    var item = $("#bitem").val();
    var size = $("#size").val();
    var unit = $("#unit").val();
    var crate = $("#costrate").val();
    var srate = $("#salerate").val();
    var sqty = $("#Qty").val();
    var saleid = $("#saleid").val();
    if (sqty != "") {
        qty = sqty;
    }
    let ctotal = parseFloat(parseFloat(crate) * parseFloat(qty));
    let stotal = parseFloat(parseFloat(srate) * parseFloat(qty));

    var tBody = $("#itemtbl > tbody")[0];
    //Add Row.
    var row = tBody.insertRow(-1);
    row.classList.add('custom-row-class');
    //row.css("border-top","2px solid #000000");
    //Add Name cell. style="border-top:2px solid #000000"
    // ##########################################################
    var cell = $(row.insertCell(-1));
    cell.html(saleid);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.css("display", "none");
    cell.attr('align', "center");
    // ###########################################################
    var cell = $(row.insertCell(-1));
    cell.html(barcode);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.css("display", "none");
    cell.attr('align', "center");
    // ###########################################################
    var cell = $(row.insertCell(-1));
    cell.html(bano);
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
    cell.attr('align', "left");
    // 4
    var cell = $(row.insertCell(-1));
    cell.html(size);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.attr('contenteditable', true);
    cell.css("display", "none");
    cell.attr('align', "center");
    // 5
    var cell = $(row.insertCell(-1));
    cell.html(unit);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.attr('align', "center");
    cell.css("display", "none");
    // 5
    var cell = $(row.insertCell(-1));
    cell.html(crate);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.attr('align', "center");
    cell.css("display", "none");
    // 5
    var cell = $(row.insertCell(-1));
    cell.html(srate);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.attr('align', "center");
    cell.addClass('nextr');
    cell.attr('contenteditable', true);
    // 7
    var cell = $(row.insertCell(-1));
    cell.html(qty);
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.addClass('next');
    cell.attr('contenteditable', true);
    cell.attr('align', "center");
    // 5
    var cell = $(row.insertCell(-1));
    cell.html(ctotal.toFixed(1));
    cell.css("color", "black");
    cell.css("font-weight", "bold");
    cell.attr('align', "center");
    cell.css("display", "none");
    // 8
    var cell = $(row.insertCell(-1));
    cell.html(stotal.toFixed(2));
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
    //###########################################################
    $("#bcode").val('');
    $("#bno").val('');
    $("#size").val('');
    $("#unit").val('');
    $("#costrate").val('');
    $("#salerate").val('');
    $("#Qty").val('');
    var item = $('#Item').data("kendoMultiColumnComboBox");
    item.value(null);
    item.focus();
    sum();
};
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
//##########################################################################
$("#itemtbl").on('keyup', '.next', function () {
    //if (event.keyCode === 13) {
    //}
    var currentRow = $(this).closest("tr");
    let crate = currentRow.find("td:eq(6)").text();
    let srate = currentRow.find("td:eq(7)").text();
    let qty = currentRow.find("td:eq(8)").text();
    if (qty > 0) {
        let sumct = parseFloat(parseFloat(crate) * parseFloat(qty));
        let sumst = parseFloat(parseFloat(srate) * parseFloat(qty));
        currentRow.find("td:eq(9)").html(sumct.toFixed(1));
        currentRow.find("td:eq(10)").html(sumst.toFixed(1));
    } else {
        let sumct = parseFloat(parseFloat(crate) * parseFloat(0));
        let sumst = parseFloat(parseFloat(srate) * parseFloat(0));
        currentRow.find("td:eq(9)").html(sumct.toFixed(1));
        currentRow.find("td:eq(10)").html(sumst.toFixed(1));
    }
    sum();
});
//##########################################################################
//$("#itemtbl").on('keyup', '.nextr', function () {
//    //if (event.keyCode === 13) {

//    //}
//    var currentRow = $(this).closest("tr");
//    let crate = currentRow.find("td:eq(5)").text();
//    let srate = currentRow.find("td:eq(6)").text();
//    let tax = currentRow.find("td:eq(7)").text();
//    let qty = currentRow.find("td:eq(8)").text();
//    if (srate > 0) {
//        let sumct = parseFloat(parseFloat(crate) * parseFloat(qty));
//        let sumst = parseFloat(parseFloat(srate) * parseFloat(qty));
//        let sumtt = parseFloat(parseFloat(tax) * parseFloat(qty));
//        currentRow.find("td:eq(9)").html(sumtt.toFixed(1));
//        currentRow.find("td:eq(10)").html(sumct.toFixed(1));
//        currentRow.find("td:eq(11)").html(sumst.toFixed(1));
//    } else {
//        let sumct = parseFloat(parseFloat(0) * parseFloat(qty));
//        let sumst = parseFloat(parseFloat(0) * parseFloat(qty));
//        let sumtt = parseFloat(parseFloat(0) * parseFloat(qty));
//        currentRow.find("td:eq(9)").html(sumtt.toFixed(1));
//        currentRow.find("td:eq(10)").html(sumct.toFixed(1));
//        currentRow.find("td:eq(11)").html(sumst.toFixed(1));
//    }
//    sum();
//});
//##################################################################

//##################################################################
//##########################################################################
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
        url: "/RSale/fetchSaleItem",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr style="border-top:2px solid #000000">';
                html += '<td class="aa" align="center" style="display:none;font-weight:bold;color:#000000">' + item.SaleID + '</td>';
                html += '<td class="aa" align="center" style="display:none;font-weight:bold;color:#000000">' + item.Barcode + '</td>';
                html += '<td class="aa" align="center" style="display:none;font-weight:bold;color:#000000">' + item.BatchNo + '</td>';
                html += '<td class="aa" align="left" style="font-weight:bold;color:#000000">' + item.Item + '</td>';
                html += '<td class="aa" align="center" style="display:none;font-weight:bold;color:#000000">' + item.Size + '</td>';
                html += '<td class="aa" align="center" style="display:none;font-weight:bold;color:#000000">' + item.Unit + '</td>';
                html += '<td class="aa" align="center" style="display:none;font-weight:bold;color:#000000">' + item.CostRate + '</td>';
                html += '<td class="aa nextr" align="center" contenteditable="True" style="font-weight:bold;color:#000000">' + item.SaleRate + '</td>';
                html += '<td class="aa next" align="center" contenteditable="True" style="font-weight:bold;color:#000000">' + item.Qty + '</td>';
                html += '<td class="aa" align="center" style="display:none;font-weight:bold;color:#000000">' + item.CostTotal + '</td>';
                html += '<td class="aa" align="center" style="font-weight:bold;color:#000000">' + item.SaleTotal + '</td>';
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
    //alert(1);
    $.ajax({
        type: "POST",
        url: "/RSale/getInvIdNo",
        data: '{cid:"' + ID + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            $("#uid").val(result.Id);
            $("#saleid").val(result.SaleID);
            $("#ccode").val(result.CCode);
            $("#cname").val(result.CustomerName);
            $("#comp").val(result.Company);
            $("#custn").val(result.Name);
            $("#contact").val(result.Contact);
            $("#gpass").val(result.GatePass);
            $("#vehno").val(result.VehicleNo);
            $("#rby").val(result.ReceivedBy);
            $("#prby").val(result.PayReceivedBy);
            $("#totalcost").val(result.CostAmt);
            $("#totalsale").val(result.SaleAmt);
            $("#discount").val(result.Discount);
            $("#nettotal").val(result.TotalAmt);
            $("#charges").val(result.Charges);
            $("#grosstotal").val(result.NetTotal);
            //$("#payment").val(result.Payment);
            $("#time").val(result.ITime);
            var item = $('#custid').data("kendoMultiColumnComboBox");
            item.value(result.CustomerName);
            var item1 = $('#date').data("kendoDatePicker");
            item1.value(result.Date);
            var item2 = $('#sdate').data("kendoDatePicker");
            item2.value(result.DDate);
            var item3 = $('#editinvd').data("kendoMultiColumnComboBox");
            item3.value('');
            CustomerUpdate();
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
            url: "/RSale/Delete/" + ID,
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
    var sdate = $("#sdate").val();
    var totalcost = $("#totalcost").val();
    var totalsale = $("#totalsale").val();
    var discc = $("#discount").val();
    var ttotal = $("#nettotal").val();
    var delchar = $("#charges").val();
    //alert(delchar);
    let gtotal = $("#grosstotal").val().trim();
    var payment = $("#payment").val();
    var itime = $("#time").val();
    var _pmode = $("#pmode").val();
    var orderArr = [];
    orderArr.length = 0;

    $.each($("#itemtbl tbody tr"), function () {
        orderArr.push({
            SaleID: $(this).find('td:eq(0)').html(),
            Barcode: $(this).find('td:eq(1)').html(),
            BatchNo: $(this).find('td:eq(2)').html(),
            Item: $(this).find('td:eq(3)').html(),
            Size: $(this).find('td:eq(4)').html(),
            Unit: $(this).find('td:eq(5)').html(),
            CostRate: $(this).find('td:eq(6)').html(),
            SaleRate: $(this).find('td:eq(7)').html(),
            Qty: $(this).find('td:eq(8)').html(),
            CostTotal: $(this).find('td:eq(9)').html(),
            SaleTotal: $(this).find('td:eq(10)').html()
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
        CostAmt: totalcost,
        SaleAmt: totalsale,
        Discount: discc,
        TotalAmt: ttotal,
        Charges: delchar,
        NetTotal: gtotal,
        Payment: payment,
        Date: date,
        DDate: sdate,
        ITime: itime,
        paymode: _pmode,
        order: orderArr
    });
    $.ajax({
        url: "/RSale/SaleSaveInvoice",
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
            $("#time").val('');
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
        url: "/RSale/getCustomerRecord",
        data: '{cid:"' + cid + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            $("#pbal").val(result.Balance);
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
        url: "/RSale/DeletePreviousInvoice",
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
        url: "/RSale/SaleList",
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
                html += '<td class="aa">' + item.ITime + '</td>';
                html += '<td class="aa">' + item.CustomerName + '</td>';
                html += '<td class="aa">' + item.SaleAmt + '</td>';
                html += '<td class="aa">' + item.Discount + '</td>';
                html += '<td class="aa">' + item.Charges + '</td>';
                html += '<td class="aa">' + item.NetTotal + '</td>';
                //html += '<td class="aa">' + item.Payment + '</td>';
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
    //alert(ID);
    $.ajax({
        type: "POST",
        url: "/RSale/getEditInvoice",
        data: '{cid:"' + ID + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            $("#uid").val(result.Id);
            $("#saleid").val(result.SaleID);
            $("#ccode").val(result.CCode);
            $("#cname").val(result.CustomerName);
            $("#comp").val(result.Company);
            $("#custn").val(result.Name);
            $("#contact").val(result.Contact);
            $("#gpass").val(result.GatePass);
            $("#vehno").val(result.VehicleNo);
            $("#rby").val(result.ReceivedBy);
            $("#prby").val(result.PayReceivedBy);
            $("#totalcost").val(result.CostAmt);
            $("#totalsale").val(result.SaleAmt);
            $("#discount").val(result.Discount);
            $("#nettotal").val(result.TotalAmt);
            $("#charges").val(result.Charges);
            $("#grosstotal").val(result.NetTotal);
            //$("#payment").val(result.Payment);
            $("#time").val(result.ITime);
            var item = $('#custid').data("kendoMultiColumnComboBox");
            item.value(result.CustomerName);
            var item1 = $('#date').data("kendoDatePicker");
            item1.value(result.Date);
            var item2 = $('#sdate').data("kendoDatePicker");
            item2.value(result.DDate);
            var item3 = $('#editinvd').data("kendoMultiColumnComboBox");
            item3.value('');
            CustomerUpdate();
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
    $("#tcharges").text($("#charges").val());
    $("#tgtotal").text($("#grosstotal").val());
    $("#tpbal").text($("#pbal").val());
    $("#ttrec").text($("#trec").val());
    $("#tsinv").text($("#saleid").val());
    $("#ttime").text($("#time").val());
    $("#tpmode").text($("#pmode").val());
    $("#tcpay").text($("#cpay").val());
    $("#tcret").text($("#cret").val());
    $("#tdtime").text($("#dtime").val());
    //$(".divhi").hide();tpmode
    //$(".tfhide").show();
};
function printdiv(printpage) {
    $(".divhi").hide();
    $(".thhide").show();//thhide Header Show
    $(".tfhide").show();//tfhide footer Show
    paidbalance();
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
var _cpay = document.getElementById("cpay");
_cpay.addEventListener("keyup", function (event) {
    paidbalance();
});
function paidbalance() {
    let grossValue = $("#grosstotal").val();
    let paidValue = $("#cpay").val().trim();
    //alert(grossValue);
    let balValue = parseFloat(parseFloat(paidValue) - parseFloat(grossValue));
    $("#cret").val(balValue.toFixed(2))
};
var _discount = document.getElementById("discount");
_discount.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        sum();
    }
});
var _charges = document.getElementById("charges");
_charges.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        sum();
    }
});
function sum() {
    sumcost();
    sumsale();
    discountFun();
    chargeFun();
    PrevBalFun();
};
function sumcost() {
    var grandT = 0;
    $("#itemtbl > TBODY > tr").each(function () {
        var t10 = $(this).find('td').eq(9).html();
        if (!isNaN(t10)) {
            grandT += parseFloat(t10);
        }
    });
    $("#totalcost").val(grandT.toFixed(2));
};
function sumsale() {
    var grandT = 0;
    $("#itemtbl > TBODY > tr").each(function () {
        var t10 = $(this).find('td').eq(10).html();
        if (!isNaN(t10)) {
            grandT += parseFloat(t10);
        }
    });
    $("#totalsale").val(grandT.toFixed(2));
};
function discountFun() {
    //alert();
    let diss = $("#discount").val();
    let purch = $("#totalsale").val();
    if (diss) {
        let sum = parseFloat(parseFloat(purch) - parseFloat(diss));
        $("#nettotal").val(sum.toFixed(2));
    } else {
        $("#totalsale").val(purch);
        $("#nettotal").val(purch);
        $("#discount").val(0);
    }
};
function chargeFun() {
    //alert();
    let _charges = $("#charges").val();
    let _nettotal = $("#nettotal").val();
    if (_charges) {
        let sum = parseFloat(parseFloat(_nettotal) + parseFloat(_charges));
        $("#grosstotal").val(sum.toFixed(2));
    } else {
        $("#charges").val(0);
        $("#grosstotal").val(_nettotal);
    }
};
function PrevBalFun() {
    //alert();
    let _gross = $("#grosstotal").val();
    let _pbal = $("#pbal").val();
    if (_pbal) {
        //alert(1);
        let sum = parseFloat(parseFloat(_gross) + parseFloat(_pbal));
        $("#trec").val(sum.toFixed(2));
    } else {
        //alert(2);
        $("#pbal").val(0);
        $("#trec").val(_gross);
    }
};