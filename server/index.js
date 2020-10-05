require('dotenv').config();

const express = require('express');
const app = express();
const massive = require('massive');
const ctrl= require('./controller')

const { CONNECTION_STRING, SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => console.log(`Listening to ${SERVER_PORT} FM`));
massive ({
    connectionString : CONNECTION_STRING,
    ssl : { rejectUnauthorized : false }
}).then (bd => {
    console.log('db connected');
    app.set('db', db);
}).catch (err => console.log(err))

app.get('/api/inventory', ctrl.getInventory);
app.post('/api/product', ctrl.postInventory);
