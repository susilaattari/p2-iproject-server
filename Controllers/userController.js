'use strict'
const { User } = require('../models')
const { comperPassword } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')

class ControllerUser {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body
      const dataUser = await User.create({
        username,
        email,
        password
      })
      res.status(201).json({
        message: `successfully added ${dataUser.username}`,
        id: dataUser.id,
        email: dataUser.email
      })
    } catch (error) {
      next(error)
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body
      const dataUser = await User.findOne({
        where: {
          email
        }
      });

      if (!password || !email) {
        throw {
          code: 400,
          name: "BadRequest",
          message: `Email and password is required!`
        }
      }

      //mencari User di DB, Apakah Ada???
      if (!dataUser) {
        throw {
          code: 401,
          name: "Unauthorized",
          message: `You are unthorized on our system`
        }
      }

      //membandingkan password dari client dengan di server, Apakah sama???
      const passwordValid = comperPassword(password, dataUser.password)

      if (!passwordValid) {
        throw {
          code: 401,
          name: "Unauthorized",
          message: `You are unthorized on our system`
        }
      }

      //bikin Payload dulu
      const payload = {
        id: dataUser.id,
        email: dataUser.email,
        role: dataUser.role
      }

      const access_token = generateToken(payload)
      res.status(201).json({
        access_token,
        dataUser
      })

    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = ControllerUser