import { getNumber } from "./function";

console.log("Objects, Interface, Types, etc.!");
console.log(getNumber());

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!

  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}

printName({ first: "Iron" });
printName({ first: "Iron", last: "Man" });

function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
// OK
printId(101);
// OK
printId("202");
// Error
//    printId({ myID: 22342 });

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

welcomePeople(["John", "Tony"]);

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord1(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord1({ x: 100, y: 100 });

type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return str;
}

// Create a sanitized input
let userInput: UserInputSanitizedString = sanitizeInput("Hello");

// Can still be re-assigned with a string though
userInput = "new input";

interface Point1 {
  x: number;
  y: number;
}

function printCoord2(pt: Point1) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ y: 100, x: 100 });

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear: Bear = { name: "Hello", honey: true };
console.log(bear.name, bear.honey);

type Animal1 = {
  name: string;
};

type Bear1 = Animal & {
  honey: boolean;
};

const bear1: Bear1 = { name: "Hello1", honey: true };
console.log(bear1.name, bear1.honey);

interface Window {
  title: string;
}

interface Window {
  ts: string;
}

const src: Window = { title: "Window", ts: "v2023" };
console.log(src);

// type Window1 = {
//   title: string;
// }

// type Window1 = {
//   ts: string;
// }

// Error: Duplicate identifier 'Window'.

type MyCanvas<T> = { value: T };
interface MyCanvas1<T> {
  value: T;
}
type MyArray<T> = (T | string)[];

const myCanvas = <MyCanvas<number>>{ value: 10 };
const myCanvas1 = { value: 10 } as MyCanvas1<number>;
const numsNumber: MyArray<number> = [12, 12, "12"];
console.log(numsNumber);
let newCanva = 123456789 as any as string;
let randNum1: number = getNumber();
console.log(myCanvas);
console.log(newCanva.toString()); // Type Script is Weird
console.log(randNum1.toString());
// let randNum: string = getNumber();
// console.log(randNum.toUpperCase());
// This gives Type Error at Runtime

let x: "hello" = "hello";
// OK
x = "hello";
// ... Error
// x = "howdy";

function liveDangerously(x?: number | null) {
  // No error
  // Neglect null or undefined
  console.log(x!.toFixed());
}

liveDangerously(69000);

// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;
console.log(oneHundred + anotherHundred)

const firstName = Symbol("name");
const secondName = Symbol("name");
const thirdName = "Hello";
const objName = {
  [firstName]: "Hello",
  [secondName]: "World",
  [thirdName]: "!",
};
console.log(typeof firstName);
console.log(objName);

function convertString<T>(num: T | string): T | string {
  return num + " Hello";
}
const string1 = convertString<number>("Hello");
console.log(string1);

// declare function handleRequest(url: string, method: "GET" | "POST"): void;

// const req = { url: "https://example.com", method: <"GET" | "POST"> "GET" };
// handleRequest(req.url, req.method);
