require('dotenv').config();
const app = require('./app');
const { conn } = require('./database');
const SERVER_PORT = process.env.SERVER_PORT;

conn.sync({force: false}).then(()=> {
    app.listen(SERVER_PORT, () => {
        console.log(`Server listening on port ${SERVER_PORT}.`)
    });
}).catch( error => console.log(error));

console.log(`Server is listening on ${SERVER_PORT}`);