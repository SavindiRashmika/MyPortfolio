

function clearOrderInputFields() {
    $("#OrderId,#MenuCus,#CusAutoName,#CusAutoAddres,#CusAutoSalary,#IOrderQty,#IAutoPrice,#IAutoQty,#IAutoName,#MenuItem").val("");
    $("#OrderId,#MenuCus,#CusAutoName,#CusAutoAddres,#CusAutoSalary,#IOrderQty,#IAutoPrice,#IAutoQty,#IAutoName,#MenuItem").css("border", "1px solid #ced4da");
    $("#OrderId").focus();
}

$("#IOrderQty").keyup(function () {
    let qty = $("#IOrderQty").val();
    if (Number($("#IOrderQty").val()) !== 0 && $("#IOrderQty").val() !== "") {
        if (Number(qty) <= Number($("#IAutoQty").val())) {
            $("#IOrderQty").css("border", 'solid green 2px');
        } else {
            $("#IOrderQty").css("border", 'solid red 2px');
        }
    } else {
        $("#IOrderQty").css("border", 'solid red 2px');
    }
});

$("#OrderId").keyup(function (){
    const ORDER_REGEX = /^(OID-)[0-9]{3}$/;
    const inputValue = $(this).val();

    if (ORDER_REGEX.test(inputValue)) {
        $("#OrderId").css("border", 'solid green 2px');
    }else {
        $("#OrderId").css("border", 'solid red 2px');
    }
});