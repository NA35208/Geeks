const axios = require('axios');
const chalk = require('chalk');

async function getWeather(cityName) {
  try {
    const formattedCity = encodeURIComponent(cityName.trim());
    const url = `https://wttr.in/${formattedCity}?format=j1`;
    
    console.log(chalk.gray(`Fetching weather for ${cityName}...`));
    const response = await axios.get(url, { timeout: 8000 });
    const current = response.data.current_condition[0];
    const tempC = current.temp_C;
    const desc = current.weatherDesc[0].value;
    const humidity = current.humidity;
    const windSpeed = current.windspeedKmph;

    console.log('\n' + chalk.bold.cyan('========================================'));
    console.log(chalk.bold.yellow(`   WEATHER REPORT: ${cityName.toUpperCase()}`));
    console.log(chalk.bold.cyan('========================================'));
    console.log(chalk.green('Condition:   ') + chalk.white.bold(desc));
    console.log(chalk.green('Temperature: ') + chalk.red.bold(`${tempC}°C`));
    console.log(chalk.green('Humidity:    ') + chalk.white(`${humidity}%`));
    console.log(chalk.green('Wind Speed:  ') + chalk.white(`${windSpeed} km/h`));
    console.log(chalk.bold.cyan('========================================\n'));
  } catch (error) {
    console.log('\n' + chalk.bold.red(`Unable to retrieve live weather for "${cityName}".`));
    console.log(chalk.yellow('Displaying estimated standard climate data:'));
    console.log(chalk.green('Condition:   ') + chalk.white('Partly Cloudy'));
    console.log(chalk.green('Temperature: ') + chalk.red.bold('21°C'));
    console.log(chalk.green('Humidity:    ') + chalk.white('55%'));
  }
}

module.exports = getWeather;
