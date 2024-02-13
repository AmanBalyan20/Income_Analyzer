const express = require('express');
const cors = require('cors');
const { db } = require('./dataBase/db');
const {readdirSync} = require('fs')
const app = express();

require('dotenv').config();


app.use(express.json());
app.use(cors({
    origin : ["https://income-analyzer-frontend.vercel.app"],
    methods:["POST", "GET", "PUT","DELETE"],
    credentials :true
    }
));

readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db();
    app.listen(3001, () => {
        console.log("Serverer is running on port " + 3001);
    });
};

server();
