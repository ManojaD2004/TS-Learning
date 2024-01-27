interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;

interface GenericIdentityFn1<Type> {
  (arg: Type): Type;
}

function identity1<Type>(arg: Type): Type {
  return arg;
}

let myIdentity1: GenericIdentityFn1<number> = identity1;

class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
  constructor(a: NumType, b: (x: NumType, y: NumType) => NumType) {
    this.zeroValue = a;
    this.add = b;
  }
}

let myGenericNumber = new GenericNumber<number>(12, (x, y) => x + y);
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

let stringNumeric = new GenericNumber<string>("a", (x, y) => x + y);
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// getProperty(x, "m");
// throws error

function create<Type>(c: { new (): Type }): Type {
  return new c();
}

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

type Container<T, U> = {
  element: T;
  children: U;
};

declare function create1(): Container<HTMLDivElement, HTMLDivElement[]>;
declare function create2<T extends HTMLElement>(element: T): Container<T, T[]>;
declare function create3<T extends HTMLElement, U extends HTMLElement>(
  element: T,
  children: U[]
): Container<T, U[]>;

// ---cut---
declare function create4<T extends HTMLElement = HTMLDivElement, U = T[]>(
  element?: T,
  children?: U
): Container<T, U>;
declare function htmlBUT(): HTMLButtonElement;
const htmlBut: HTMLButtonElement = htmlBUT();
const div1 = create4();
const div = create4(htmlBut, "aa");

const p = create4(new HTMLParagraphElement());

// This means to have all the properties/methods of strong.
function some1<T extends string>(a: number = 10, b: T) {}
some1(89, "abc");
console.log(Object.keys(some1));
