const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 3000;
const cardRoutes = require('./src/routes/cardRoutes')

app.use(express.json());
// app.use(router);
app.use(cors());

app.use('/api', cardRoutes);

app.get('/', (req, res) => {
  res.send('mvc')
})

// app.get('/api', cardRoutes);

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});