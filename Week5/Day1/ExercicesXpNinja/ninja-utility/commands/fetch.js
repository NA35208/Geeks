const axios = require('axios');

async function fetchData(url = 'https://jsonplaceholder.typicode.com/todos/1') {
  try {
    console.log(`Fetching data from: ${url}`);
    const response = await axios.get(url);
    console.log('Response data:');
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}

module.exports = fetchData;
