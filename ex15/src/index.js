// Write code below this line

function myDoWhile() {
    var myNumbers = "";
    var index = 0;
    do {
        myNumbers += index;
        if (index < 9) {
            myNumbers += ", ";
        }

        index++;
    } while (index <= 9);

    return myNumbers;
}

console.log(myDoWhile());

// Write code above this line

module.exports = myDoWhile;