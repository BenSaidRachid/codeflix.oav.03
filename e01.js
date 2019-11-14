const { EventEmitter } = require('events');

const empty = () => {
    const myEmitter = new EventEmitter();

    myEmitter.on("hi", () => {
        console.log("ChOooooooper!")
    })

    myEmitter.emit("hi");
}

module.exports = {
    empty
}