const cardModel = require('../models/CardsModel');

async function searchCardsByName(req, res) {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'Name query parameter is required' });
  }

  try {
    const cards = await cardModel.getCardByName(name);
    if (cards.length === 0) {
      return res.status(404).json({ message: 'No cards found' });
    }
    return res.json(cards);
  } catch (error) {
    console.error('Error searching for cards: ', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

const home = (req, res) => {
  res.send('home');
}

module.exports = {
  searchCardsByName,
  home
}