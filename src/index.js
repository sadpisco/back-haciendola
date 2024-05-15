require('dotenv').config();
const app = require('./app');
const { conn } = require('./database');
const port = process.env.PORT || 3000;

conn.sync({force: false}).then(()=> {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}.`)
    });
}).catch( error => console.log(error));

console.log(`Server is listening on ${port}`);