const convertToCelsius = function(fahrenheit) {
    let cel = (fahrenheit - 32) * 5 / 9;
    let ave = Math.round(cel * 10) / 10;
    return ave;
};

const convertToFahrenheit = function(celsius) {
    let fah = (celsius * 9 / 5) + 32;
    let ave = Math.round(fah * 10) / 10;
    return ave;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
