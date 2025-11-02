const reverseString = function(str) {
  let stringSplit = str.split('');
  let stringReverse = stringSplit.reverse()
  let stringJoin = stringReverse.join('');
  return stringJoin;
}

// Do not edit below this line
module.exports = reverseString;
