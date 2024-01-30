"use strict";
class MyClass {
    static x = 0;
    static printX() {
        console.log(MyClass.x);
    }
}
console.log(MyClass.x);
MyClass.printX();
console.log(MyClass);
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
        }
        catch { }
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
    getName() {
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
    contents = "";
    set(value) {
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
    content = "";
    sameAs(other) {
        return other.content === this.content;
    }
}
class DerivedBox1 extends Box1 {
    otherContent = "?";
}
const base = new Box1();
const derived = new DerivedBox1();
console.log(derived.sameAs(derived));
// Best Example
class FileSystemObject {
    path;
    networked;
    isFile() {
        return this instanceof FileRep;
    }
    isDirectory() {
        return this instanceof Directory;
    }
    isNetworked() {
        return this.networked;
    }
    constructor(path, networked) {
        this.path = path;
        this.networked = networked;
    }
}
class FileRep extends FileSystemObject {
    content;
    constructor(path, content) {
        super(path, false);
        this.content = content;
    }
}
class Directory extends FileSystemObject {
}
const fso = new FileRep("foo/bar.txt", "foo");
if (fso.isFile()) {
    fso.content;
}
else if (fso.isDirectory()) {
    fso.children;
}
else if (fso.isNetworked()) {
    fso.host;
}
class Base6 {
    printName() {
        console.log("Hello, " + this.getName());
    }
}
class Derived6 extends Base6 {
    getName() {
        return "world";
    }
}
const d6 = new Derived6();
d6.printName();
