const { Pool } = require('pg');
// const dotenv = require('dotenv');
const knex = require('knex');
const config = require('../db/knexfile');

const db = knex(config.development);

async function collector() {
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json();
    const cards = json.data;


    const cardData = cards.map(card => ({
      cardId: card.id,
      name: card.name,
      image_url: card.card_images[0].image_url,
      cardmarket_price: card.card_prices[0].cardmarket_price,
      tcgplayer_price: card.card_prices[0].tcgplayer_price,
      ebay_price: card.card_prices[0].ebay_price,
      amazon_price: card.card_prices[0].amazon_price,
      coolstuffinc_price: card.card_prices[0].coolstuffinc_price
    }))

    const batchSize = 1000;
    await db.batchInsert('cards', cardData, batchSize);

    console.log('Cards inserted successfully');

  } catch (error) {
    console.error(error.message);
  } finally {
    db.destroy();
  }

}

collector();

// dotenv.config({ path: './.env' });


// db.connect((error) => {
//   if (error) {
//     console.log('Error connecting with the postgres DB', error);
//   } else {
//     console.log('PostgreSQL connected!');
//   }
// });





