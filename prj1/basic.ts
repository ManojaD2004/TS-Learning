interface User {
  name: string;
  id: number;
}

type MyNumber = 1 | 2 | 3;

class UserAccount {
  static name1: string;
  name: string;
  id: MyNumber;
  p = "Hello";

  constructor(name: string, id: MyNumber) {
    this.name = name;
    UserAccount.name1 = name;
    this.id = id;
  }
}

function getUser(user: User) {
  console.log(user);
}

function createUser(name: string, age: MyNumber): User {
  return new UserAccount(name, age);
}

function getLength(s: string | string[]) {
  if (typeof s === "string") {
    return [s].length;
  }
  return s.length;
}

class newUser {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user4 = { name: "KK", id: 3 };
const user5 = new newUser("Kk", 3);
console.log(user4);
console.log(user5);
console.log(user4 instanceof newUser);
console.log(user5 instanceof newUser);

const user: User = createUser("Adi", 1);
const user1: User = new UserAccount("Red", 2);
const user2: User = new UserAccount("Bunny", 3);
getUser(user);
console.log(user);
console.log(UserAccount.name1);
console.log(getLength("Hello"));

// Generic
const aa: string = "hello";
const ab: "Hello TypeScript" = "Hello TypeScript";
const ac = ab.toLocaleLowerCase();
console.log(ab);
console.log(ac);

type StringArray = Array<Array<string>>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const names: StringArray = [["Hello", "World"]];

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack1: Backpack<string>;

const backpack: Backpack<string> = {
  add: function (obj) {
    console.log(obj);
  },
  get: () => {
    return "Hello";
  },
};

const object = backpack.get();
console.log(object);

backpack.add("23");

interface Point {
  x: number;
  y: number;
  z?: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

class VirtualPoint {
  x: number;
  y: number;
  z: number;
  private zz: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.z = x + y;
    this.zz = this.z * 3;
  }

  public add(): number {
    return this.x + this.y + this.z + this.zz;
  }

  public static show(): void {
    console.log("Hello");
  }
}

const newVPoint = new VirtualPoint(13, 56);
console.log(newVPoint);
// console.log(newVPoint.zz); private member
console.log(newVPoint.add());
VirtualPoint.show();
logPoint(newVPoint); // logs "13, 56"

// const color = { hex: "#187ABF" };
// logPoint(color);

// // Use of declare const when there is, lets say import
// // This line is a shortcut to tell TypeScript there is a
// // constant called `backpack`, and to not worry about where it came from.
// declare const backpack: Backpack<string>;

// // object is a string, because we declared it above as the variable part of Backpack.
// const object = backpack.get();

// // Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23);
