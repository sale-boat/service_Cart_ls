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




### CRUD API Routing

| Endpoint                   | Type    | Operation                 |
|----------------------------|---------|---------------------------|
| `/api/reviews/:productId`  | GET     | Get all reviews           |
| `/api/reviews/`            | POST    | Add a review              |
| `/api/reviews/:productId`  | PUT     | Update a review           |
| `/api/reviews/:productId`  | DELETE  | Delete a review           |


## POST Request
> Endpoint: /api/cart/:userId

**URL Params** :userid

ADD a product to either review or list based on the current user.

app.post('/api/cart/:userId', (req, res) => {
  // wait to revieve the event of the click to know what button what pushed and where to post the info.
});

Responses:
Add to cart:
Success(200)
Console.log(Data was succesfully added to Cart)

## Data Schema for Cart
{
  id:
  user_id:
  product_id:
  subtotal:
}


Add to list:
Success(200)
console.log(Data was succesfully added to List)

## Data Schema for List
{
  id:
  list_type:
  product_id:
  user_id:
}

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

