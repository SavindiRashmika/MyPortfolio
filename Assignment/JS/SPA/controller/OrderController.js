
$('#OrderDate').val(new Date().toISOString().slice(0, 10));

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
            $('#IAutoPrice').val(itemDB[i].qtyOnHand)
            $('#IAutoQty').val(itemDB[i].unitPrice)
            break;
        }
    }
});

function saveOrder(){

}