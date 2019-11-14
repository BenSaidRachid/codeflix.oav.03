const { EventEmitter } = require('events');

function withArgs(names) {
    const myEmitter = new EventEmitter();

    myEmitter.on("newFellow", names => {
        if(Array.isArray(names)) {
            for(const name of names) {
                console.log(displayName(name))
            }
            return;
        } else if(typeof names === "string")
            console.log(displayName(names))
        return;
    })

    myEmitter.emit("newFellow", names);
}

const displayName = name => {
    return `Here come's a new pirate ->> ${name}`
}

module.exports = {
    withArgs
}