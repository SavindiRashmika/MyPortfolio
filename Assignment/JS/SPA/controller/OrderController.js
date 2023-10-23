
$('#OrderDate').val(new Date().toISOString().slice(0, 10));

function OrderCount() {
    $("#orderCount")[0].innerText = orderDB.length;
}

function loadAllCusID() {
    var cusSelect = '';
    for (var i = 0; i < customerDB.length; i++) {
        cusSelect += '<option value="' + customerDB[i].id + '">' + customerDB[i].id + '</option>';
    }
    $('#MenuCus').append(cusSelect);
}

function loadAllItemID(){
    var itemSelect = '';
    for (var i = 0; i < itemDB.length; i++) {
        itemSelect += '<option value="' + itemDB[i].code + '">' + itemDB[i].code + '</option>';
    }
    $('#MenuItem').append(itemSelect);
}

$('#MenuCus').change(function () {
    for (let i = 0; i < customerDB.length; i++) {
        if ($(this).val() == customerDB[i].id) {
            $('#CusAutoName').val(customerDB[i].name);
            $('#CusAutoSalary').val(customerDB[i].address)
            $('#CusAutoAddres').val(customerDB[i].salary)
            break;
        }
    }
});

$('#MenuItem').change(function () {
    for (let i = 0; i < itemDB.length; i++) {
        if ($(this).val() == itemDB[i].code) {
            $('#IAutoName').val(itemDB[i].description);
            $('#IAutoQty').val(itemDB[i].qtyOnHand)
            $('#IAutoPrice').val(itemDB[i].unitPrice)
            break;
        }
    }
});

function saveOrder(){
        let orderId = $("#OrderId").val();
        let id = $("#MenuCus").val();
        let code = $("#MenuItem").val();
        let date = $("#OrderDate").val();
        let itemPrice = $("#IAutoPrice").val();
        let itemQty = $("#IOrderQty").val();

    orderDB.push({
        oid: orderId,
        customerID: id,
        code: code,
        date: date,
        unitPrice: itemPrice,
        qty: itemQty,
    });
    getAllOrder();
    clearOrderInputFields();
}
$("#OrderSave").click(function () {
    saveOrder();
    OrderCount();
});
getAllOrder();
function getAllOrder() {

    $("#tblOrder").empty();

    for (let i = 0; i < orderDB.length; i++) {
        let orderId = orderDB[i].oid;
        let cusID = orderDB[i].customerID;
        let itemID = orderDB[i].code;
        let date = orderDB[i].date;
        let untPrice = orderDB[i].unitPrice;
        let qty = orderDB[i].qty;
        let total = parseFloat(untPrice)*parseFloat(qty);

        let row = `<tr>
                     <td>${orderId}</td>
                     <td>${cusID}</td>
                     <td>${itemID}</td>
                     <td>${date}</td>
                     <td>${untPrice}</td>
                     <td>${qty}</td>
                     <td>${total}</td>
                      </tr>`;

        $("#Total").val(total);
        $("#tblOrder").append(row);
        clearOrderInputFields();
    }
}

