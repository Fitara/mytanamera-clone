const { User } = require("../models/index");
const { verify } = require("../helpers/jwt");

const authen = async function (req, res, next) {
  try {
    const access_token = req.headers.access_token;
    if (!access_token) throw { name: "InvalidToken" };

    const payload = verify(access_token);
    const user = await User.findByPk(payload.id);
    if (!user) throw { name: "InvalidToken" };

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authen;