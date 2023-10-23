

let customer = document.querySelector("#CustomerFormManage");
let item = document.querySelector("#ItemFormManage");
let order = document.querySelector("#orderManage");
let dash = document.querySelector("#Dashboard");

customer.style.display ='none';
item.style.display ='none';
order.style.display ='none';
dash.style.display = 'block';

let lnkHome = document.querySelector("#home");
let lnkOrder = document.querySelector("#orders");
let lnkCustForm =document.querySelector("#custForm");
let lnkIForm =document.querySelector("#IForm");


lnkCustForm.addEventListener("click",function (){
    customer.style.display ='block';
    item.style.display ='none';
    order.style.display ='none';
    dash.style.display = 'none';
})

lnkIForm.addEventListener("click",function (){
    customer.style.display ='none';
    item.style.display ='block';
    order.style.display ='none';
    dash.style.display = 'none';
})

lnkHome.addEventListener("click",function (){
    customer.style.display ='none';
    item.style.display ='none';
    order.style.display ='none';
    dash.style.display = 'block';
    CusCount();
    ItemCount();
    OrderCount();
})

lnkOrder.addEventListener("click",function (){
    order.style.display = 'block';
    customer.style.display ='none';
    item.style.display ='none';
    dash.style.display = 'none';
    loadAllCusID();
    loadAllItemID();
})

