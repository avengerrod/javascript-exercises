const sumAll = function(num1, num2) {
    let numberSum = 0;
    if (num1 < 0 || num2 < 0) return 'ERROR';
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR'; 
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);
    for (let i = start; i <= end; i++) {
        numberSum += i;
    }
    return numberSum;
};

// Do not edit below this line
module.exports = sumAll;
