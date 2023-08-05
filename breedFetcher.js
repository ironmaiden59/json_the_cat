const request = require("request");

const breedName = process.argv.splice(2);

const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;
request(apiUrl, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML


  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);


  if (data.length > 0) {
    console.log('Description:', data[0].description);
  } else {
    console.log('no cat breed found');
  }

});