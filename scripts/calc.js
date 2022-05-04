function addition(num1, num2) {
    if (typeof num1 == "number") {
        if (typeof num2 == "number") {
            return num1 + num2;
        }
    } else {
        return undefined
    }
}

module.exports = addition