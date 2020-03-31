const connetion = require('../database/connection');

module.exports = {

  async index(req, res) {
    const products = await connetion('product').select('*');

    return res.json(products);
  },

  async create(req, res) {
    const { product, description, value } = req.body;

    await connetion('product').insert({
      product,
      description,
      value,
    });

    return res.json({});
  },

  async update(req, res) {
    const { id } = req.params;
    const {
      product: newProduct,
      description: newDescription,
      value: newValue
    } = req.body;

    await connetion('product').update({
      product: newProduct,
      description: newDescription,
      value: newValue
    }).where('id', id);

    return res.status(204).send();
  },

  async delete(req, res) {
    const { id } = req.params;
    const product = await connetion('product')
      .where('id', id)
      .select('id')
      .first();

    if(!product) {
      return res.status(404).json({error: 'Produto não encontrado'});
    }

    await connetion('product').where('id', id).delete();

    return res.status(204).send();
  }

}