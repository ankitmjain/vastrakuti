const express = require('express');
const orderImpl = require('./orderImpl');

const orderRoute = express.Router();

orderRoute.get("/version", (request, response) => {
    response.json({ "version": "1.0.0" });
});

orderRoute.get("/GetOrderByDate", (request, response) => {
    orderImpl.getOrdersByDate(request).then((data) => {
        response.json(data);
    })
});


orderRoute.post("/save", (request, response) => {
    orderImpl.saveOrder(request.body).then((data) => {
        response.json(data);
    })
});

module.exports = orderRoute