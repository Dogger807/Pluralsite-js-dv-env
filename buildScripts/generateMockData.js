
/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

var jsf = require('json-schema-faker');
var mockDataSchema = require('./mockDataSchema');
var fs = require('fs');
import chalk from 'chalk';

console.log (mockDataSchema); // eslint-disable-line no-console
let mySchema = jsf(mockDataSchema);
console.log (mySchema); // eslint-disable-line no-console
delete mySchema.id;
console.log (mySchema); // eslint-disable-line no-console
var json = JSON.stringify(mySchema);
json = json.substring(10)
json = json.slice(0,-1);
console.log (json); // eslint-disable-line no-console

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(err);// eslint-disable-line no-console
  } else {
    console.log(chalk.green("Mock data generated."));// eslint-disable-line no-console
  }
});
