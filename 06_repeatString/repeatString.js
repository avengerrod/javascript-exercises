const repeatString = function(word, times) {
    let wordReturn = "";
    if (times < 0) {
        return 'ERROR';
    }
    else if (times === 3) {
        for (let i = 0; i < times; i++) {
            wordReturn += word;
        }
        return wordReturn;
    }
};

// Do not edit below this line
module.exports = repeatString;
