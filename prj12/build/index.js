"use strict";
class GoodGreeter {
    name;
    constructor() {
        this.name = "hello";
    }
}
class OKGreeter {
    // Not initialized, but no error
    name;
}
class Greeter {
    name = "world";
    constructor(otherName) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    err() {
        // this.name = "not ok";
    }
}
const g = new Greeter();
// g.name = "also not ok";
class Point {
    x;
    y;
    // Normal signature with defaults
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
class Point1 {
    constructor(xs, y) {
        // TBD
    }
}
let p1 = new Point1(1, "2");
let p2 = new Point1("ok");
// let p3 = new Point(9,"12"); Throws Error.
// Constructor overloading is same as Function Overloading.
class Base {
    k = 4;
}
class Derived extends Base {
    constructor() {
        // Prints a wrong value in ES5; throws exception in ES6
        super();
        console.log(this.k); // tells super must be called before this
        // super();
    }
}
let x = 0;
class C {
    x = "hello";
    m() {
        // This is trying to modify 'x' from line 69, not the class property
        // we need to use this for this, to modify method property
        // x = "world";
    }
}
class C1 {
    _length = 0;
    #len = 10; // Vanilla JS Private Members!
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
let c1 = new C1();
c1._length = 10;
console.log(c1._length);
class Thing {
    _size = 0;
    get size() {
        return this._size;
    }
    set size(value) {
        let num = Number(value);
        // Don't allow NaN, Infinity, etc
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        this._size = num;
    }
}
class MyClass {
    check(s) {
        return this[s];
    }
}
class Sonar {
    ping() {
        console.log("ping!");
    }
    pong() { }
}
class NameChecker {
    check(s) {
        // Notice no error here
        return s.toLowerCase() === "ok";
    }
}
// implement is just implementing a interface to a class. Don't do anything more
// It does not automatically create inferred type, or optional type, etc.
class C2 {
    x = 0;
}
const c2 = new C2();
// c2.y = 10;
class Animal {
    move() {
        console.log("Moving along!");
    }
}
class Dog extends Animal {
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
class Base1 {
    greet() {
        console.log("Hello, world!");
    }
}
class Derived1 extends Base1 {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const d1 = new Derived1();
d1.greet();
d1.greet("reader");
// Alias the derived instance through a base class reference
// Just like other programming lang. Like Java, C...
const b2 = d1;
// No problem
b2.greet();
class AnimalHouse {
    resident;
    constructor(animal) {
        this.resident = animal;
    }
    greet() { }
}
class DogHouse extends AnimalHouse {
    constructor(dog) {
        super(dog);
    }
}
class Greeter1 {
    greet() {
        console.log("Hello, " + this.getName());
    }
    getName() {
        return "hi";
    }
}
class SpecialGreeter extends Greeter1 {
    howdy() {
        // OK to access protected member here
        console.log("Howdy, " + this.getName());
    }
}
const g1 = new SpecialGreeter();
g1.greet(); // OK
// g1.getName(); throws error because it is protected
class Base3 {
    m = 10;
}
class Derived3 extends Base3 {
    // No modifier, so default is 'public'
    m = 15;
}
const d3 = new Derived3();
console.log(d3.m); // OK
class Base5 {
    x = 1;
}
class Derived15 extends Base5 {
    x = 5;
}
class Derived25 extends Base5 {
    f1(other) {
        other.x = 10;
    }
    f2(other) {
        // other.x = 10;
        // This is an Error.
    }
}
// Java, for example, considers this to be legal. On the other hand, C# and C++ chose that this code should be illegal.
// TypeScript sides with C# and C++ here, because accessing x in Derived2
// should only be legal from Derived2’s subclasses, and Derived1 isn’t one of them.
// Moreover, if accessing x through a Derived1 reference is illegal (which it certainly should be!),
// then accessing it through a base class reference should never improve the situation.
class A {
    x = 10;
    sameAs(other) {
        // No error
        return other.x === this.x;
    }
}
const s = new A();
// Not allowed during type checking
// console.log(s.secretKey);
// Property 'secretKey' is private and only accessible within class 'MySafe'.
// OK
console.log(s["x"]);
class Base6 {
    m = 10;
}
class Derived5 extends Base6 {
    // No modifier, so default is 'public'
    m = 15;
}
const d5 = new Derived5();
console.log(d5.m); // OK
class Dog3 {
    #barkAmount = 0;
    personality = "happy";
    constructor() { }
}
const dog3 = new Dog3();
console.log(dog3["personality"]);
