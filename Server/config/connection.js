const Sequelize = require('sequelize');

require('dotenv').config();

console.log(process.env)

let sequelize;
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    "CutMeinfor10%!",
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
    }
  );
}


module.exports = sequelize;
