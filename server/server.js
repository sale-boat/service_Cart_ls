// SERVER FILE
const newrelic = require('newrelic')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js')


const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static(`${__dirname}/../client/dist`));


app.get('/api/product/:id', (req, res) => {
  const idToSearch = req.params.id;
  db.getProduct(idToSearch, (err, data) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(data);
  });
});
app.get('/api/:userId', (req, res) => {
  const userId = req.params.userId;
  db.getUser(userId, (err, user) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(user);
  });
});

app.post('/api/cart/:productId/:userId', (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  db.addToCart(productId, userId, (err, user) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(user);
  });
});
app.post('/api/ideaList/:productId/:userId', (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  db.addToIdeaList(productId, userId, (err, user) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(user);
  });
});
app.post('/api/shoppingList/:productId/:userId', (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  db.addToShoppingList(productId, userId, (err, user) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(user);
  });
});
app.post('/api/wishList/:productId/:userId', (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  db.addToWishList(productId, userId, (err, user) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(user);
  });
});
app.post('/api/User/:userId', (req, res) => {
  // create a new user for the website
  // = insert into postgres.
  // sample query for the future Insert into Users (userid, name, addresses, shopping_list_privacy, wish_list_privacy, idea_list_privacy) values (30000000, 'Luke Singer', ARRAY['Winterfell'], false, false, false);
});

app.put('/api/shoppingList/:userId', (req, res) => {
  const userId = req.params.userId;
  db.updateShoppingListPrivacy(userId, (err, user) => {
    if(err) {
      res.status(400).send();
    } else {
      res.status(200).send(user);
    }
  })
});
app.put('/api/wishList/:userId', (req, res) => {
  const userId = req.params.userId;
  db.updateWishListPrivacy(userId, (err, user) => {
    if(err) {
      res.status(400).send();
    } else {
      res.status(200).send(user);
    }
  })
});
app.put('/api/ideaList/:userId', (req, res) => {
  const userId = req.params.userId;
  db.updateIdeaListPrivacy(userId, (err, user) => {
    if(err) {
      res.status(400).send();
    } else {
      res.status(200).send(user);
    }
  })
});

app.delete('/api/cart/:productId/:userId', (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  db.removeFromCart(productId, userId, (err, product) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(product);
  });
});
app.delete('/api/shoppingList/:productId/:userId', (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  db.removeFromShoppingList(productId, userId, (err, product) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(product);
  });
});
app.delete('/api/wishList/:productId/:userId', (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  db.removeFromWishList(productId, userId, (err, product) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(product);
  });
});
app.delete('/api/ideaList/:productId/:userId', (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  db.removeFromIdeaList(productId, userId, (err, product) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(product);
  });
});


app.get('*', (req, res) => {
  res.sendFile(`/client/dist/index.html`, {'root': `${__dirname}/../`});
});

const PORT = 3002;

app.listen(PORT, console.log('listening at 3002'));
