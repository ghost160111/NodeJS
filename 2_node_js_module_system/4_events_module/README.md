# Node.js Events Module

> __Summary__: in this tutorial, you will learn about the Node.js events module and how it works.

## Introduction to the Node.js events module

Node.js is event-driven. It relies on the events core module to achieve the event-driven architecture.

In the event-driven model, an EventEmitter object raises an event that causes the previously attached listeners of the event executed.

An EventEmitter object has two main functions:

Emit a named event.
Attach and detach one or more event listeners to the named event.
In Node.js, many core modules inherit the EventEmitter class including http module.

The following example illustrates how to use the events module.

First, include the events module using the require() function:

```js
const EventEmitter = require('events');
```

The EventEmitter is a class, so by convention its name is in the camel case.

Second, create a new instance of the EventEmitter class:

```js
const emiiter = new EventEmitter();
```

Third, attach one or more event handlers to the event by using the on() method:

```js
emitter.on('saved', ) => {
    console.log(`A saved event occured.`);
}
```

In this example, the event name is saved and the event handler is a callback. When the saved event occurs, the callback is invoked automatically.

Finally, emit the saved event using the emit() method of the EventEmitter object:

```js
emitter.emit("saved");
```

Put it all together:

```js
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on("saved", () => {
    console.log(`A saved event occured.`);
});

emitter.emit("saved");
```

Output:

```
A saved event occured.
```

## Emit an event with arguments

When raising an event, you may want to pass some data to the event listener e.g., the object that has been saved when the saved event occurs. In this case, you can pass the data into the emit() method as the second argument. For example:

```js
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on("saved", (arg) => {
    console.log(`A saved event occured: name: ${arg.name}, id: ${arg.id}`);
});

emitter.emit("saved", {
    id: 1,
    name: "John Doe",
});
```

In this example, when we emit the saved event, we pass an object that has two properties id and name to the emit() method. And when the event occurs, we show the object properties to the console.

## Detach an event listener

To detach an event listener from an event, you use the off() method of the EventEmitter object. For example:

```js
const EventEmitter = require('events');

const emitter = new EventEmitter();

// declare the event handler
function log(arg) {
    console.log(`A saved event occured, name: ${arg.name}, id: ${arg.id}`);
}

// attach the event listener to the saved event
emitter.on("saved", log);

// emit the saved event
emitter.emit("saved", {
    id: 1,
    name: "John Doe",
});

// remove the event listener
emitter.off("saved", log);

// no effect
emitter.emit("saved", {
    id: 2,
    name: "Jane Doe",
});
```

Output:

```
A saved event occured, name: John Doe, id: 1
```

In this example, after detaching the event listener from the event. The event listener is not called when the saved event is emitted.

## Extend the EventEmitter class

The following example illustrates how to extend the EventEmitter class:

```js
const EventEmitter = require('events');

class Stock extends EventEmitter {
    constructor(symbol, price) {
        super();
        this._symbol = symbol;
        this._price = price;
    }
    set price(newPrice) {
        if (newPrice !== this._price) {
            this.emit("PriceChanged", {
                symbol: this._symbol,
                oldPrice: this._price,
                newPrice: newPrice,
                adjustment: ((newPrice - this._price) * 100 / this._price).toFixed(2),
            });
        }
    }
    get price() {
        return this._price;
    }
    get symbol() {
        return this._symbol;
    }
}
```

How it works.

- The Stock class extends the EventEmitter class. It has two properties stock symbol and price.
- When the price changes, the price setter emits the PriceChanged event with an object.

The following illustrates how to use the Stock class:

```js
const stock = new Stock("AAPL", 700);

stock.on("PriceChanged", (arg) => {
    console.log(`The price of the stock ${arg.symbol} has changed ${arg.adjustment}%`);
});

stock.price = 720;
```

Output:

```
The price of the stock AAPL has changed 2.86%
```

# :memo: Summary

- Node.js events module provides you with EventEmitter class that allows you to manage events in the node application.
- Use the on() method of the EventEmitter object to register an event handler for an event.
- Use the emit() method of the EventEmitter object to emit an event.
