const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    try {
      const data = JSON.parse(body);
      callback(null, `${data[0].description}`);

    } catch (error) {
      // handle request error
      callback(`${error.message}`, null);
    }
  });
  
};


module.exports = { fetchBreedDescription };