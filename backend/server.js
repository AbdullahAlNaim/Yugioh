const express = require('express');
const app = express();
// const cors = require('cors');
const port = process.env.port || 3000;
// const knex = require('knex')(require('./knexfile').development);

app.use(express.json());
// app.use(cors());

app.get('/', async (req, res) => {
  cards = '';
  await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then(response => response.json())
    .then(data => {
      cards = res.json(data);
    })
    .then(cards => {
      console.log(cards[0])
    })
    .catch(error => {
      console.error('There was an error fetching data:', error);
    })


});

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});