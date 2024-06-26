require('dotenv').config();
const express = require('express');
const morgan = require ('morgan');
const cors = require('cors');
const router = require('./routes/router');
const app = express();
const { conn } = require('./database');
const port = 3015;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(router);

conn.sync({force: false}).then(()=> {
    app.listen(port, () => {
        console.log(`Server is listening on ${port}.`)
    });
}).catch( error => console.log(error));

module.exports = app;