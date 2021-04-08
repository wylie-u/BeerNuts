const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Info extends Model {}

Info.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING(20),
  },
  food: {
    type: DataTypes.STRING(3),
  },
  outdoor_seating: {
    type: DataTypes.STRING(3),
  },
  website: {
    type: DataTypes.STRING(50),
  },

  
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'Info',
}
);


module.exports = Info;