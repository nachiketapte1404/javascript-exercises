const convertToCelsius = function(temp) {
  cel_temp = (temp - 32) * 5/9;
  cel_temp = cel_temp.toFixed(1);
  return parseFloat(cel_temp);
};

const convertToFahrenheit = function(temp) {
  fah_temp = (temp * 9/5) + 32;
  fah_temp = fah_temp.toFixed(1);
  return parseFloat(fah_temp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
