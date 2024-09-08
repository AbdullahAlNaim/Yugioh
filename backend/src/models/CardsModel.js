const knex = require('knex');
const config = require('../../db/knexfile');
const db = knex(config.development);

async function getCardByName(searchName) {
  return await db('cards').where('name', 'ilike', `%${searchName}%`)
}

module.exports = {
  getCardByName
}