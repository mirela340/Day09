// Only change code below this line

function compareStrictValues(m) {
    if (m != 55) {
        return "Not equal";
    }

    return "Equal";
}

console.log(compareStrictValues(55));
console.log(compareStrictValues("55"));
console.log(compareStrictValues("21"));
console.log(compareStrictValues(12));
console.log(compareStrictValues("Doe"));

// Only change conde above this line

module.exports = compareStrictValues;