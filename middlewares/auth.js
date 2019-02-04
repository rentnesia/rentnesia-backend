const { user } = require('../models')
const jwt = require('jsonwebtoken')

exports.isAuthenticated = async (req, res, next) => {
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(' ')[1]

    if (token === undefined) {
      return res.status(401).json({ message: 'Token not found.' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const User = await user.findOne({ where: { id: decoded.id } })

    if (!User) {
      return res.status(400).json({ message: 'Account not found.' })
    }

    req.user = User

    next()
  } catch (err) {
    res.status(500).json({ message: 'There is an error.', err })
  }
}
