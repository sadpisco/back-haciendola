const app = require('./app');
const { conn } = require('./database');

const PORT = 3005;
conn.sync({force: false}).then(()=> {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}.`)
    });
}).catch( error => console.log(error));

console.log(`Server is listening on ${PORT}`);