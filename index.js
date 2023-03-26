function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    const fn= named => `${named}`
    return fn
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('how?')
    }
}