const database_gateway = require("../database/database_gateway");
const properties = require('../../properties.json');

async function getProfile(request){    
    const userMobile = request.query.mobileNo;
    var SQL = "SELECT * from tbl_customer where mobile_no=?";
    var params = [];
    params.push(userMobile);
    return await database_gateway.query(SQL,params);
}

module.exports = {
    getProfile
}
