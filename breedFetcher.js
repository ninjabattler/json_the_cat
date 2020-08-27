const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv.slice(2)}`, (error, response, body) => {
  
  if (error) return console.log('Error: ', error);

  const data = JSON.parse(body);

  if (data[0] === undefined) return console.log("Breed not found");

  console.log(data[0].description);

});
