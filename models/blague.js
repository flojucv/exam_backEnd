const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnect');

const Blague = sequelize.define(
  'Blague',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    blague: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reponse: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    tableName: 'Blagues',
  }
);

(async () => {


})();
module.exports = Blague;