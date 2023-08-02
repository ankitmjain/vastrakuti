const express = require('express');
const cors = require('cors');
const loginRouter = require('./apis/user/login');
const customerRouter = require("./apis/customer/customer");
const orderRouter = require("./apis/order/order");
const demorouter = require('./apis/demorouter/demorouter')

const PORT = 9999;
const HOST = "0.0.0.0";

const app = express();


//enables cors
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended:true}));

app.use(express.static("client"));

app.use("/api/",loginRouter);
app.use("/api/customer/",customerRouter);
app.use("/api/order/",orderRouter);
app.use("/api/v3/",demorouter);


app.listen(PORT,HOST,()=> {
    console.log(`Server is running at ${HOST}:${PORT}`);
});