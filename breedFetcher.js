const request = require('request');

const apiUrl = 'https://api.thecatapi.com/v1';
const breed = process.argv[2];

const endpoint = `${apiUrl}/breeds/search?q=${breed}`;

request(endpoint, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Status:', response.statusCode);
  } else {
    try {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log('Breed not found.');
      } else {
        const breedData = data[0];
        console.log(breedData.description);
      }
    } catch (parseError) {
      console.error('Error parsing response body:', parseError);
    }
  }
});

