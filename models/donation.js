'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Donation.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "name is required"
        },
        notNull: {
          msg: "name is required"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "email is required"
        },
        notNull: {
          msg: "email is required"
        }
      }
    },
    contact: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "contact is required"
        },
        notNull: {
          msg: "contact is required"
        }
      }
    },
    donate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "donate is required"
        },
        notNull: {
          msg: "donate is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Donation',
  });
  return Donation;
};