const {
  Pool,
} = require('pg');


const config = require('./config.js');

const pool = new Pool(config);
// const pool = new Pool({
//   host: 'localhost',
//   database: 'service_cart',
//   port: 5432,
// });



const getProduct = function (id, callback) {
  const queryStr = `select * from Products where productid = ${id};`;
  pool.query(queryStr, (err, product) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, product);
  });
};


const itemsInCart = function (callback) {
  Product.find({ inCart: 1 }, (err, data) => {
    if (err) {
      return err;
    }
    callback(null, data);
  });
};

const getUser = function(id, callback) {
  const queryStr = `select * from Users where userid = ${id};`;
  pool.query(queryStr, (err, user) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, user);
  });
};

const addToCart = function(productId, userId, callback) {
  const queryStr = `update Users set cart = cart || Array[${productId}] where userid = ${userId};`
  pool.query(queryStr, (err, user) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, user);
  });
};
const addToWishList = function(productId, userId, callback) {
  const queryStr = `update Users set wish_list = wish_list || Array[${productId}] where userid = ${userId};`
  pool.query(queryStr, (err, user) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, user);
  });
};
const addToShoppingList = function(productId, userId, callback) {
  const queryStr = `update Users set shopping_list = shopping_list || Array[${productId}] where userid = ${userId};`
  pool.query(queryStr, (err, user) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, user);
  });
};
const addToIdeaList = function(productId, userId, callback) {
  const queryStr = `update Users set idea_list = idea_list || Array[${productId}] where userid = ${userId};`
  pool.query(queryStr, (err, user) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, user);
  });
};
const removeFromCart = function(productId, userId, callback) {
  const queryStr = `update Users set cart = array_remove(cart, ${productId}) where userid = ${userId};`
  pool.query(queryStr, (err, user) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, user);
  });
};
const removeFromShoppingList = function(productId, userId, callback) {
  const queryStr = `update Users set shopping_list = array_remove(shopping_list, ${productId}) where userid = ${userId};`
  pool.query(queryStr, (err, user) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, user);
  });
};
const removeFromWishList = function(productId, userId, callback) {
  const queryStr = `update Users set wish_list = array_remove(wish_list, ${productId}) where userid = ${userId};`
  pool.query(queryStr, (err, user) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, user);
  });
};
const removeFromIdeaList = function(productId, userId, callback) {
  const queryStr = `update Users set idea_list = array_remove(idea_list, ${productId}) where userid = ${userId};`
  pool.query(queryStr, (err, user) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, user);
  });
};
const updateShoppingListPrivacy = function(userid, callback) {
  const queryStr = `update Users set shopping_list_privacy = not shopping_list_privacy where userid = ${userid};`
  pool.query(queryStr, (err, user) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, user);
  });
}
const updateWishListPrivacy = function(userid, callback) {
  const queryStr = `update Users set wish_list_privacy = not wish_list_privacy where userid = ${userid};`
  pool.query(queryStr, (err, user) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, user);
  });
}
const updateIdeaListPrivacy = function(userid, callback) {
  const queryStr = `update Users set idea_list_privacy = not idea_list_privacy where userid = ${userid};`
  pool.query(queryStr, (err, user) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, user);
  });
}



//Update Users set cart = array_remove(cart, 12543) where userid = 37841109;
module.exports.getProduct = getProduct;
module.exports.itemsInCart = itemsInCart;
module.exports.getUser = getUser;
module.exports.addToCart = addToCart;
module.exports.addToWishList = addToWishList;
module.exports.addToShoppingList = addToShoppingList;
module.exports.addToIdeaList = addToIdeaList;
module.exports.removeFromCart = removeFromCart;
module.exports.removeFromIdeaList = removeFromIdeaList;
module.exports.removeFromWishList = removeFromWishList;
module.exports.removeFromShoppingList = removeFromShoppingList;
module.exports.updateShoppingListPrivacy = updateShoppingListPrivacy;
module.exports.updateWishListPrivacy = updateWishListPrivacy;
module.exports.updateIdeaListPrivacy = updateIdeaListPrivacy;
