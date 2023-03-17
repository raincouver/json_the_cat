const request = require('request');

const args = process.argv.slice(2);


request(`https://apii.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  
  if (error) {
    //Edge Case: Request Failed
    console.log('errorCode:', error);
    // console.log('statusCode:', response && response.statusCode);
  }
  
  try {
    const data = JSON.parse(body);

    // console.log(typeof body);
    // setTimeout(() => {
    // console.log(data);
    //   // console.log(typeof data);

    console.log(`${data[0].description}`);
    
  } catch (error) {
    // Edge Case: Breed Not Found
    if (error.name === 'TypeError') {
      console.log('Error 404: Breed Not Found!');
    }

  }
});


