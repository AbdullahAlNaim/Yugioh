const knex = require('knex');
const config = require('./knexfile');

const db = knex(config.development);

async function createSchema() {
  try {
    const exists = await db.schema.hasTable('cards');
    if (!exists) {
      await db.schema.createTable('cards', (table) => {
        table.increments('id').primary();
        table.integer('cardId').notNullable();
        table.string('name').notNullable();
        table.string('image_url');
        table.float('cardmarket_price').defaultTo(0);
        table.float('tcgplayer_price').defaultTo(0);
        table.float('ebay_price').defaultTo(0);
        table.float('amazon_price').defaultTo(0);
        table.float('coolstuffinc_price').defaultTo(0);
        table.timestamps(true, true);
      });
      console.log('Table "cards" craeted successfully');
    } else {
      console.log('Table "cards" already exists');
    }
  } catch (error) {
    console.error('Error creating schema:', error);
  } finally {
    await db.destroy();
  }
}

createSchema();