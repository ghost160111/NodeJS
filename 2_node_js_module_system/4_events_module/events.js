// Example 1:
{
    const EventEmitter = require('events');

    const emitter = new EventEmitter();
    
    emitter.on("saved", () => {
        console.log(`A saved event occured.`);
    });
    
    emitter.emit("saved");
    
    // Outputs:
    // A saved event occured.
}

// Example 2:
{
    const EventEmitter = require('events');

    const emitter = new EventEmitter();
    
    emitter.on("saved", (arg) => {
        console.log(`A saved event occured: name: ${arg.name}, id: ${arg.id}`);
    });
    
    emitter.emit("saved", {
        id: 1,
        name: "John Doe",
    });

    // Outputs:
    // A saved event occured: name: John Doe, id: 1
}

// Example 3:
{
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
}

// Example 4:
{
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

    const stock = new Stock("AAPL", 700);

    stock.on("PriceChanged", (arg) => {
        console.log(`The price of the stock ${arg.symbol} has changed ${arg.adjustment}%`);
    });

    stock.price = 720;
    // Outputs:
    // The price of the stock AAPL has changed 2.86%
}
