class GoodGreeter {
  name: string;

  constructor() {
    this.name = "hello";
  }
}

class OKGreeter {
  // Not initialized, but no error
  name!: string;
}

class Greeter {
  readonly name: string = "world";

  constructor(otherName?: string) {
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
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Point1 {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
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

let x: number = 0;

class C {
  x: string = "hello";

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

  get size(): number {
    return this._size;
  }

  set size(value: string | number | boolean) {
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
  [s: string]: boolean | ((s: string) => boolean);
  check(s: string) {
    return this[s] as boolean;
  }
}

interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
  pong() {}
}

interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(s: string) {
    // Notice no error here
    return s.toLowerCase() === "ok";
  }
}

interface A1 {
  x: number;
  y?: number;
}

// implement is just implementing a interface to a class. Don't do anything more
// It does not automatically create inferred type, or optional type, etc.
class C2 implements A1 {
  x = 0;
  // y?: number;
}
const c2 = new C2();
// c2.y = 10;

class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
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
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const d1 = new Derived1();
d1.greet();
d1.greet("reader");

// Alias the derived instance through a base class reference
// Just like other programming lang. Like Java, C...
const b2: Base1 = d1;
// No problem
b2.greet();

interface Animal {
  dateOfBirth: any;
}

interface Dog extends Animal {
  breed: any;
}

class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
  greet() {}
}

class DogHouse extends AnimalHouse {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}

class Greeter1 {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}

class SpecialGreeter extends Greeter1 {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g1 = new SpecialGreeter();
g1.greet(); // OK
// g1.getName(); throws error because it is protected

class Base3 {
  protected m = 10;
}
class Derived3 extends Base3 {
  // No modifier, so default is 'public'
  m = 15;
}
const d3 = new Derived3();
console.log(d3.m); // OK

class Base5 {
  protected x: number = 1;
}
class Derived15 extends Base5 {
  protected x: number = 5;
}
class Derived25 extends Base5 {
  f1(other: Derived25) {
    other.x = 10;
  }
  f2(other: Derived15) {
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
  private x = 10;

  public sameAs(other: A) {
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
  protected m = 10;
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
  // Vanilla JS private members. If you use ES2021 or less then Compiler will create a weak map. For that
  // variable.
  constructor() {}
}

const dog3 = new Dog3();
console.log(dog3["personality"]);
