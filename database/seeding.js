const fs = require('fs');
const path = require('path');
const faker = require('faker');

const encoding = 'utf8';
function writeTenMilliontimes(number, encoding, callback) {
  const writer = fs.createWriteStream(__dirname + '/writeMe.txt');
  let i = 0;
  function write() {
    let ok = true;
    do {
      i++;
      if (i === number) {
        writer.write(`${faker.name.findName()}, ${faker.address.city()} ${faker.address.zipCode()}, [], [], []\n`, encoding, callback);
      } else if (i === 1) {
        ok = writer.write(`name, address, wishList, shoppingList, cart\n`, encoding);
      } else {
        ok = writer.write(`${faker.name.findName()}, ${faker.address.city()} ${faker.address.zipCode()}, [], [], []\n`, encoding);
      }
    } while (i < number && ok);
    if (i < number) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMilliontimes(10000000, encoding, function () {
  if(Error) {
    console.log('error')
  } else {
    console.log('success')
  }
})
