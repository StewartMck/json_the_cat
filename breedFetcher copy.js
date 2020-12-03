const request = require('request');
const breed = process.argv[2].slice(0, 4);

request(("https://api.thecatapi.com/v1/images/search?breed_ids=" + breed), (error, response, body) => {
  
  if (!error) {
    const data = (JSON.parse(body));
    if (!data.length) {
      return console.log('The breed was not found, check your spelling');
    }
    const adjustedData = Object.assign({}, data[0]["breeds"][0]);
    console.log(adjustedData.description);
  } else {
    return console.log('ERROR:', error);
  }
  
});