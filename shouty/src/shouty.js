//shouty.js

class Person {
    constructor(network) {
        this.messages = []
        this.network = network

        this.network.subscribe(this)
    }

    shout(message) {
        this.network.broadcast(message)
    }
    hear(message) {
        this.messages.push(message)
    }
    messagesHeard() {
        return this.messages
    }
}
class Network {
    constructor() {
        this.listeners = []
    }

    subscribe(listener) {
        this.listeners.push(listener)
    }

    broadcast(message) {
        this.listeners.forEach(listener => {
            listener.hear(message)
        })
    }
}

module.exports = { Person, Network };
