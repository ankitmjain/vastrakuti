const express = require('express');
const customerImpl = require('./customerImpl');

const customerRouter = express.Router();

customerRouter.get("/version", (request, response) => {
    response.json({"module":"Customer","version": "1.0.0" });
});

customerRouter.get("/profile", (request, response) => {
    customerImpl.getProfile(request).then((data) => {
        if(data.length>0)
            response.json(data[0]);
        else{
            response.json({"code":"400","message":"Customer Not Found"});
        }
    })
});

module.exports = customerRouter