class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}

console.log(MyClass.x);
MyClass.printX();
console.log(MyClass);

declare function loadLastInstances(): any[];

class Foo {
  static #count = 0;

  get count() {
    return Foo.#count;
  }

  static {
    try {
      console.log("In");
      const lastInstances = loadLastInstances();
      Foo.#count += lastInstances.length;
    } catch {}
  }
}

class MyClass1 {
  name = "MyClass";
  getName() {
    return this.name;
  }
}
const c = new MyClass1();
const obj = {
  name: "obj",
  getName: c.getName,
};

// Prints "obj", not "MyClass"
console.log(obj.getName());

class MyClass2 {
  name = "MyClass";
  getName = () => {
    return this.name;
  };
}

class Derived extends MyClass2 {
  constructor() {
    super();
    console.log(this.getName());
  }
}
const c2 = new MyClass2();
const g = c2.getName;
const obj1 = {
  name: "obj",
  getName: c2.getName,
};

const _ = new Derived();

// Prints "MyClass" instead of crashing
console.log(g());
console.log(obj1.getName());

class MyClass3 {
  name1 = "MyClass";
  getName(this: MyClass3) {
    return this.name1;
  }
}
const c3 = new MyClass3();
// OK
c3.getName();

// Error, would crash
const g3 = c3.getName;
// console.log(g3());

class Box {
  contents: string = "";
  set(value: string) {
    this.contents = value;
    return this;
  }
}

class ClearableBox extends Box {
  clear() {
    this.contents = "";
  }
}

const a = new ClearableBox();
const b = a.set("hello");
console.log(b.contents);

class Box1 {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}

class DerivedBox1 extends Box1 {
  otherContent: string = "?";
}

const base = new Box1();
const derived = new DerivedBox1();
console.log(derived.sameAs(derived));

// Best Example

class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}

class Directory extends FileSystemObject {
  declare children: FileSystemObject[];
}

interface Networked {
  host: string;
}

const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");

if (fso.isFile()) {
  fso.content;
} else if (fso.isDirectory()) {
  fso.children;
} else if (fso.isNetworked()) {
  fso.host;
}

abstract class Base6 {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

class Derived6 extends Base6 {
  getName() {
    return "world";
  }
  getName1() {
    return "world";
  }
}

const d6 = new Derived6();
d6.printName();

// function greet(ctor: typeof Base6) {
//   const instance = new ctor();
//   instance.printName();
// }

function greet1(ctor: new () => Base6) {
  const instance = new ctor();
  instance.printName();
}
greet1(Derived6);
greet1(Base6);

class Point {
  createdAt: number;
  x: number;
  y: number
  constructor(x: number, y: number) {
    this.createdAt = Date.now()
    this.x = x;
    this.y = y;
  }
}
type PointInstance = InstanceType<typeof Point>
 
function moveRight(point: PointInstance) {
  point.x += 5;
}
 
const point = new Point(3, 4);
moveRight(point);
point.x; // => 8
