const jwt = require('jsonwebtoken')
const user = require('../models').user

exports.isAuthenticated = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(' ')[1]

  if (token === undefined) {
    return res.json('token NOT found !')
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const User = await user.findOne({ where: { id: decoded.id } })

    if (User === null) {
      return res.json('User NOT found !')
    }

    req.user = User
    next()
  } catch (error) {
    res.json(error)
  }
}
