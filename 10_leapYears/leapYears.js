const leapYears = function(countYear) {
    if ((countYear % 4 === 0 && countYear % 100 !== 0) || (countYear % 400 === 0)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
