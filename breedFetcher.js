
const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      // Call the callback with the error and null description value
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        // Call the callback with null error and the description from body
        callback(null, data[0].description);
      } else {
        // Call the callback with null error and null description (no breed found)
        callback(null, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };