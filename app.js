const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session')
const bodyparser = require('body-parser')
const DataBase = require('./database')
const app = express();

app.use(session({
    secret:"Hello World",
    resave:true,
    saveUninitialized:false
}))

app.set("view engine" , "ejs");
app.use(bodyparser.urlencoded({extended:true}));

// Routers
const loginRouter = require('./Routes/loginRouter');
app.use('/login' , loginRouter);

const registerRouter = require('./Routes/registerRouter');
app.use('/register' , registerRouter);

const dashboardRouter = require('./Routes/dashboardRouter');
app.use('/dashboard',dashboardRouter);

const custumUrlRouter = require('./Routes/CustumUrlRouteres');
app.use('/app/' , custumUrlRouter); 

const homeRouter = require('./Routes/homeRouter');
app.use('/' , homeRouter);


// making node server to listen at a port
app.listen(3000 , ()=>{
    console.log('server is running');
})