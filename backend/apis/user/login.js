const express = require('express');
const loginImpl = require('./loginImpl');

const loginRoute = express.Router();

loginRoute.get("/version", (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.json({"module":"Login","version": "1.0.0" });
});

loginRoute.post("/login", (request, response) => {
    loginImpl.doLogin(request).then((data) => {
        if(data.length>0)
            response.json(data[0]);
        else{
            response.json({"code":"400","message":"Invalid Username and Password"});
        }
    })
});


module.exports = loginRoute