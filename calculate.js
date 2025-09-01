const add = (x, y) => {
    return x + y
}
const subtract = (x, y) => {
    return x - y
}
const multiply = (x, y) => {
    return x * y
}
const divide = (x, y) => {
    if (y === 0){
        return "you are mad"
    }
    return x / y
}

const percentage = (x, y) => {
    return (x/ y) * 100
}
const remainder = (x, y) => {
    return x % y
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    percentage,
    remainder,
}