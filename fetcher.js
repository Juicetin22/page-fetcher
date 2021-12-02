const args = process.argv;
const fs = require('fs');
const request = require('request');

request(`${args[2]}`, (error, response, body) => {
  fs.writeFile(`${args[3]}`, body, err => {
    if (!err) {
      fs.stat(`${args[3]}`, (err, stats) => {
        console.log(`Downloaded and saved ${stats.size} bytes to ${args[3]}`);
      })
    }
  })
});