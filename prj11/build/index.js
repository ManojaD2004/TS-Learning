"use strict";
function identity(arg) {
    return arg;
}
let myIdentity = identity;
function identity1(arg) {
    return arg;
}
let myIdentity1 = identity1;
class GenericNumber {
    constructor(a, b) {
        this.zeroValue = a;
        this.add = b;
    }
}
let myGenericNumber = new GenericNumber(12, (x, y) => x + y);
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
let stringNumeric = new GenericNumber("a", (x, y) => x + y);
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
// getProperty(x, "m");
// throws error
function some1(a = 10, b) { }
some1(89, "abc");
console.log(Object.keys(some1));
function create(c) {
    return new c();
}
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = "Mikle";
    }
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.numLegs = 6;
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
const htmlBut = htmlBUT();
const div1 = create4();
const div = create4(htmlBut, "aa");
const p = create4(new HTMLParagraphElement());
// This means to have all the properties/methods of strong.
