const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelize = new Sequelize(process.env.MYSQL_URI);

//Authenticator function to test DB

let connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};

connection();

module.exports = sequelize;
