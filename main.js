const { myEventEmitter} = require("./eventbox")
const { EventEmitter } = require('events');
const myEmitter = new myEventEmitter();


myEmitter.on("hello", () => {
    console.log("Hello world!")
})

myEmitter.on("hello", name => {
    console.log(`Hello ${name}!`)
})


const off = myEmitter.emit("hello");
myEmitter.emit("hello", "toto");

off()

myEmitter.emit("hello");
myEmitter.emit("hello",  "toto");