const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, "root", {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
