const connection = require('../database/connection');
const crypto = require('crypto');
module.exports = {
  async index(req, res) {
      const users = await connection('users').select('*');
  
      return res.json(users);
  },

  async create(req, res) {
    const { name, email, telefone, message } = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    const contactDate = new Date().toUTCString();

    await connection('users').insert({
      id,
      name,
      email,
      telefone,
      message,
      contactDate
    });

    return res.json({});
  }
}
