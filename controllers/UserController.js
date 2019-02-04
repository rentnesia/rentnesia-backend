const User = require("../models").user;

exports.getUser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.status(200).json("User has been slain");
  } catch (error) {
    res.status(500).json(error);
  }
};
