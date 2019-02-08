const User = require("../models").user;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user === null) {
      return res.status(400).json("Email NOT Found!");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).json(`Password NOT Valid ! ${validPassword}`);
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.user_type },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );
    res.status(200).json({
      message: "You're logged in",
      id: user.id,
      name: user.username,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(400).json("error bangsat");
  }
};

exports.signupUser = async (req, res) => {
  try {
    const SALT_WORK_FACTOR = 5;
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);

    req.body.password = await bcrypt.hash(req.body.password, salt);

    const user = await User.create(req.body);

    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
