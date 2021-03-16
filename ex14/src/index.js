// Write code below this line

function myForLoop1() {
    var evenNumbers = "";
    for (index = 0; index <= 8; index++) {
        if (index % 2 === 0) {
            evenNumbers = evenNumbers + index;
            if (index < 8) {
                evenNumbers = evenNumbers + ", ";
            }
        }
    }

    return evenNumbers;
}

function myForLoop2() {
    var evenInverseNumbers = "";
    for (index = 8; index >= 0; index--) {
        if (index % 2 === 0) {
            evenInverseNumbers = evenInverseNumbers + index;
            if (index > 0) {
                evenInverseNumbers = evenInverseNumbers + ", ";
            }
        }
    }

    return evenInverseNumbers;
}

console.log(myForLoop1());
console.log(myForLoop2());

// Write code above this line

module.exports = {
    myForLoop1,
    myForLoop2
};