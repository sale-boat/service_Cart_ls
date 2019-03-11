const fs = require('fs');
const path = require('path');
const faker = require('faker');

const encoding = 'utf8';
function writeCSV(number, encoding, callback) {
  const writer = fs.createWriteStream(__dirname + '/postGreProducts.csv');
  let i = 0;
  function write() {
    let ok = true;
    do {
      i++;
      if (i === number) {
        writer.write(`${i}, ${faker.commerce.price()}, ${faker.random.number()}\n`, encoding, callback);
      } else {
        ok = writer.write(`${i}, ${faker.commerce.price()}, ${faker.random.number()}\n`, encoding);
      }
    } while (i < number && ok);
    if (i < number) {
      writer.once('drain', write);
    }
  }
  write();
}

writeCSV(1000000, encoding, function (error) {
  if(error) {
    console.log('error')
  } else {
    console.log('success')
  }
})


