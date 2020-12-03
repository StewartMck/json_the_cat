const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2].slice(0, 4);

fetchBreedDescription(breedName, (error, desc) => {
  if (error !== null) {
    console.log('Error fetching details:', error);
  } else {
    console.log(desc);
  }
});