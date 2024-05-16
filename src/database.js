require('dotenv').config();
const { Sequelize } = require ('sequelize');
const fs = require ('fs');
const path = require('path');
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_CONNECTION = process.env.DB_CONNECTION;
const port = process.env.PORT || 3000;

const sequelize = new Sequelize(
    // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    // {
    //     logging: false,
    //     native: false
    // }
        DB_CONNECTION_URL,
    {
        logging: false,
        native: false,
        dialectOptions: {
          ssl: true, // Desactiva SSL
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        },
    }
);

const testingConection = async function(){
    try {
        await sequelize.authenticate();
        // console.log(`Succesfully connected to ${DB_NAME} in the PORT ${DB_PORT}.`);
        console.log(`Succesfully connected to ${DB_CONNECTION_URL}.`);
    } catch (error) {
       console.log(error);
    };
  };
  testingConection();

  const basename = path.basename(__filename);
  const modelDefiners = [];
  fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });
  modelDefiners.forEach(model => model(sequelize));
  
  let entries = Object.entries(sequelize.models);
  let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
  sequelize.models = Object.fromEntries(capsEntries);

  const { Users } = sequelize.models;

  module.exports = {
    ...sequelize.models,
    conn: sequelize
  };