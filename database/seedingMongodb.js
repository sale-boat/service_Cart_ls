const fs = require('fs');
const path = require('path');
const faker = require('faker');

const encoding = 'utf8';
function writeCSV(number, encoding, callback) {
  const writer = fs.createWriteStream(__dirname + '/test2.csv');
  let i = 0;
  function write() {
    let ok = true;
    do {
      i++;
      if (i === number + 1) {
        writer.write(`${faker.name.findName()}, ${faker.address.city()} ${faker.address.zipCode()}, [], [], []\n`, encoding, callback);
      } else if (i === 1) {
        ok = writer.write(`id, name, address, wishList, shoppingList, cart\n`, encoding);
      } else {
        ok = writer.write(`${i - 1}, ${faker.name.findName()}, ${faker.address.city()} ${faker.address.zipCode()}, [], [], []\n`, encoding);
      }
    } while (i < number && ok);
    if (i < number) {
      writer.once('drain', write);
    }
  }
  write();
}

const desiredNumberOfRecords = 10;
const writeCSVInsert = desiredNumberOfRecords + 1;


writeCSV(writeCSVInsert, encoding, function () {
  if(Error) {
    console.log('error')
  } else {
    console.log('success')
  }
})