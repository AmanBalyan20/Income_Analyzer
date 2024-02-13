const express = require('express');
const cors = require('cors');
const { db } = require('./dataBase/db');
const {readdirSync} = require('fs')
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({
    origin : [""],
    methods:["POST", "GET", "PUT","DELETE"],
    credentials :true
    }
));

readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log("Serverer is running on port " + PORT);
    });
};

server();
