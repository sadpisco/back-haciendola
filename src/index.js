require('dotenv').config();

const express = require('express');
const morgan = require ('morgan');
const cors = require('cors');
const router = require('./routes/router');


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(router);




const { conn } = require('./database');
const port = process.env.PORT || 3000;

conn.sync({force: false}).then(()=> {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}.`)
    });
}).catch( error => console.log(error));

console.log(`Server is listening on ${port}`);

module.exports = app;