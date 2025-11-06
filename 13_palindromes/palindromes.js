const palindromes = function (str) {
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Normalize the string
  const reversedStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
