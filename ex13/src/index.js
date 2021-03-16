// Write code below this line

function inverseWhile() {
    var fiveNumbers = "";
    var index = 5;

    // 5,4,3,2,1,0
    while (index >= 0) {
        fiveNumbers += index;
        if (index > 0) {
            fiveNumbers += ',';
        }
        index--;
    }
    return fiveNumbers;
}

// Write code above this line

console.log(inverseWhile());

module.exports = inverseWhile;