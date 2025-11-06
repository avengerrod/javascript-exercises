const findTheOldest = function(obj) {
    return oldest = obj.sort((a, b) => {
      const nextPerson = a.yearOfDeath - a.yearOfBirth;
      const lastPerson = b.yearOfDeath - b.yearOfBirth;
      return lastPerson - nextPerson;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
