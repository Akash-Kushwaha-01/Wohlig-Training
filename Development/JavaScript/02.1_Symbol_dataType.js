const uniqueKey = Symbol('Config Key')

const settings = {
    [uniqueKey] : "hiddenconfig",
    publicKey : "visibleconfig"
};

console.table([settings[uniqueKey],settings.publicKey]);

console.log(Object.keys(settings)); // // Symbol property is not enumerable


