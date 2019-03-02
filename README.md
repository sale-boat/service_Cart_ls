# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)


## Implementing CSV file for database

type:
```js
'npm run CSV generator'
```
into the command line on service_cart to generate CSV file,

IMPORTANT!
file is currently set up to generate 10 million files into CSV.txt

to change hoe many users you want to generate for your database, make you rway to line
28 in seeding.js and adjust the 10000000 input to your desired user amount.

### CRUD API Routing

| Endpoint                   | Type    | Operation                 |
|----------------------------|---------|---------------------------|
| `/api/product/:id`         | GET     | Get all cart              |
| `/api/cart/:userId`        | POST    | Add a review              |
| `/api/cart/:productId`     | PUT     | Update a review           |
| `/api/cart/:userId`        | DELETE  | Delete a review           |
## GET Request

> Endpoint: /api/product/:id

**URL Params** : productId

**Description of use**
Retrieve product details for page rendering.

```js
app.get('/api/product/:id', (req, res) => {
  //response will send back data based off of the desired product.
})
```
## Expected Response
```js
{
  uniqueID: Number,
  price: Number,
  quantity: Number,
  isPrime: String,
  inCart: Number,
  cartQuantity: Number,
  imageURL: String,
}
```

## POST Request
> Endpoint: /api/cart/:userId

**URL Params** :userid

**Description of use**
ADD a product to either review or list based on the current user.

```js
app.post('/api/cart/:userId', (req, res) => {
  // wait to revieve the event of the click to know what button what pushed and where to post the info.
});
```
## Expected Response

Add to cart:
```js
Success(200)

Console.log(Data was succesfully added to Cart)
```
## Data Schema for Cart
```js
{
  id: Number
  user_id: Number
  product_id: Number
  subtotal: Number
}
```


## Expected Response

Add to list:
```js
Success(200)

console.log(Data was succesfully added to List)
```
## Data Schema for List
```js
{
  id: Number
  list_type: Number
  product_id: Number
  user_id: Number
}
```

## PUT Request
```js
app.put('/api/cart/:productId', (req, res) => {
  // we will be updating the quantity of the product in the db.
});
```
> Endpoint: /api/cart/:productId

**URL Params** :productid

**Description of use**
Update product quantity.


## Expected Response

Add to list:
```js
Success(200)

console.log(Product quantity was succesfully updated)
```
## Data Schema for Product
```js
{
  uniqueID: Number,
  price: Number,
  quantity: Number,
  isPrime: String,
  inCart: Number,
  cartQuantity: Number,
  imageURL: String,
}
```

## Delete Request
```js
app.delete('/api/cart/:userId', (req, res) => {
  // will allow for products to be removed from cart or list
});
```
> Endpoint: /api/cart/:userId

**URL Params** :userid

**Description of use**
Remove a product out of your cart or list.

## Expected Response

Add to cart:
```js
Success(200)

Console.log(Data was succesfully added to Cart)
```
## Data Schema for Cart
```js
{
  id: Number
  user_id: Number
  product_id: Number
  subtotal: Number
}
```

## Expected Response

Add to list:
```js
Success(200)

console.log(Data was succesfully added to List)
```
## Data Schema for List
```js
{
  id: Number
  list_type: Number
  product_id: Number
  user_id: Number
}
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc


### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm run react-dev
nopm start
```

