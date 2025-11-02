const removeFromArray = function(arr, find) {
  // create a new empty array
  const newArray = [];
    arr.forEach(element => {
        if (element !== find) {
        newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
