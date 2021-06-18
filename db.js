const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "NodeDB",
  "sa",
  "N'FjI67rJwDX9w90Z+/L3KCLIBDf9sNltJh25UNfNhMZk='",
  {
    dialect: "mssql",
    host: "DESKTOP-G78K4JG",
    dialectOptions: {
      encrypt: 1,
    },
  }
);
module.exports = sequelize;
