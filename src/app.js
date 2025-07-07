function greet(name) {
    console.log("Hello, " + name + "!");
}
function farewell(name) {
    console.log("Goodbye, "+ name + "!");
}

module.exports = {
    greet: greet,
    farewell: farewell
};
// This module exports two functions: greet and farewell.