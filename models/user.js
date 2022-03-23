'use strict';
const {
  Model
} = require('sequelize');
const { hasPassword } = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "username is required"
        },
        notNull: {
          msg: "username is required"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "password is required"
        },
        notNull: {
          msg: "password is required"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "Admin"
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance) => {
    instance.password = hasPassword(instance.password)
  })
  return User;
};