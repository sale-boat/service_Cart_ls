// SERVER FILE
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const { getProduct } = require('../database/index.js');
const { addToCart } = require('../database/index.js');
const { itemsInCart } = require('../database/index.js');


app.use(cors());


app.use(express.static(`${__dirname}/../client/dist`));


app.get('/api/product/:id', (req, res) => {
  const idToSearch = req.params.id;
  getProduct(idToSearch, (err, data) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(data);
  });
});

app.post('/api/cart/:userId', (req, res) => {
  // create a new user for the website
  // = insert into postgres.
});

app.put('/api/cart/:productId', (req, res) => {
  // we will be updating the quantity of the product in the db.
  // update into cart
  // update into a list
  // updating delivery address
  // update an address.
  // update privacy settings.
});

app.delete('/api/cart/:userId', (req, res) => {
  // will allow for someone to delete an item out of their cart.
  // remove user
});


app.get('*', (req, res) => {
  res.sendFile(`/client/dist/index.html`, {'root': `${__dirname}/../`});
});

const PORT = 3002;

app.listen(PORT, console.log('listening at 3002'));
