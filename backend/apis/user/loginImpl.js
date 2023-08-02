const database_gateway = require("./../database/database_gateway");
const properties = require('../../properties.json');
const { response } = require("express");

async function doLogin(request){
    
    var loginData = request.body;
    var SQL = "SELECT A.user_name,B.first_name,B.last_name,B.mobile_no,A.user_status,A.last_login from tbl_user_login A,tbl_user B where A.user_id = B.user_id AND A.user_name=? and A.user_password=? AND A.user_status=1";

    var params = [];
    params.push(loginData.username);
    params.push(loginData.password);

    var response = await database_gateway.query(SQL,params);
    return response;
}

module.exports = {
    doLogin
}
