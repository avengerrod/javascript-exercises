const removeFromArray = function(arr, ...find) {
  // create a new empty array
  const newArray = [];
    arr.forEach(element => {
        if (!find.includes(element)) {
          newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
