const request = require('request');
const URL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {

  request((URL + breedName), (error, response, body) => {
    const data = JSON.parse(body);
   
    if (!error && data.length) {
      const adjustedData = Object.assign({}, data[0]);
      return callback(null, adjustedData.description);
    } else {
      return callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };