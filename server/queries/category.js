const Joi = require('joi');
const db = require('../db');
const { insertIntoTableAndValidate } = require('../queries');

const schema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image_url: Joi.string().allow('').uri({
    scheme: [
      /\+https?/
    ]
  }),
});

module.exports = {
  getAll(){
    return db('category').select();
  },
  async insert(category) {
  	return insertIntoTableAndValidate('category', category, schema);
	},
};