const readline = require('readline');
const getWeather = require('./weather');

function startDashboard() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const cityArg = process.argv[2];
  if (cityArg) {
    getWeather(cityArg).then(() => {
      rl.close();
    });
    return;
  }

  rl.question('Enter a city name (e.g. Paris, Tokyo, London): ', async (cityName) => {
    if (cityName && cityName.trim()) {
      await getWeather(cityName);
    } else {
      console.log('No city entered.');
    }
    rl.close();
  });
}

module.exports = startDashboard;
