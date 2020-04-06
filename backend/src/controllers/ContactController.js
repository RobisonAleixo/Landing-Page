const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { name, email, message } = req.body;

    await connection('contact').insert({
      name,
      email,
      message
    });
  
    return res.json();
  },

  async index(req, res) {
    const contacts = await connection('contact').select('*');
    return res.json(contacts);
  }

};