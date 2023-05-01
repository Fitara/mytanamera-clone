const bcrypt = require('bcryptjs')

const hash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8));
const compare = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = { hash, compare };