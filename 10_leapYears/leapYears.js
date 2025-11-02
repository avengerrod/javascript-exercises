const leapYears = function(countYear) {
    if ((countYear % 4 === 0 && countYear % 100 !== 0) || (countYear % 400 === 0)) {
        return countYear + ' is a leap year';
    } else {
        return countYear + ' is a not leap year';
    }
};

// Do not edit below this line
module.exports = leapYears;
