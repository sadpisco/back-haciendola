require('dotenv').config();
const app = require('./app');
const { conn } = require('./database');
const SERVER_PORT = process.env.SERVER_PORT;

conn.sync({force: false}).then(()=> {
    app.listen(process.env.PORT || SERVER_PORT, () => {
        console.log(`Server listening on port ${process.env.PORT || SERVER_PORT}.`)
    });
}).catch( error => console.log(error));

console.log(`Server is listening on ${process.env.PORT || SERVER_PORT}`);