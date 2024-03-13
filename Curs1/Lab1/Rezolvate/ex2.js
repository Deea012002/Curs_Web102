const convertToCelsius = (fahrenheit) => {
    // Your code here 
    return (fahrenheit-32) * 5/9;
};

const fahrenheitTemperature = 32;
const celsiusTemperature = convertToCelsius(fahrenheitTemperature);
console.log(`${fahrenheitTemperature}°F is approximately ${celsiusTemperature}°C`);