const database_gateway = require("./../database/database_gateway");
const properties = require('../../properties.json');
const { response } = require("express");

async function getOrdersByDate(request){
    
    var SQL = "SELECT 'delivery',count(*) as total,DATE(B.suborder_date) as start,DATE(B.suborder_date) as end from tbl_customer_orders A, tbl_customer_order_items B WHERE A.order_id = B.order_id GROUP By Date(B.suborder_date)";
    var response = await database_gateway.query(SQL);
    console.log(response);
    return response;
}

async function saveOrder(request){
    var SQL = "INSERT INTO tbl_customer_orders(customer_id,order_date) values(1,now())";
    var response = await database_gateway.query(SQL,[]);
    request.items.forEach(async element => {
        request['order_id']=response.insertId;
        SQL = "INSERT INTO tbl_customer_order_items(order_id,item_type,details,suborder_date,delivery_date)"+ 
            "values("+response.insertId+",'"+element.item_name+"','"+JSON.stringify(element.item_messurement)+"',now(),'"+request.delivery_date+"')";
           var itemResponse = await database_gateway.query(SQL);
           element['item_id']=itemResponse.insertId;
        element.item_images.forEach(async imageElement => {
            SQL = "INSERT INTO tbl_item_images(item_id,image_data,created_at) values("+itemResponse.insertId+",'"+imageElement+"',now())";
            var imageResponse = await database_gateway.query(SQL);
            imageElement['image_id']=imageResponse.insertId;
        });
    });
    return request;
}

module.exports = {
    getOrdersByDate,
    saveOrder
}
