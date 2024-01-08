import { getNumber } from "./function";

let number2: any = getNumber();
console.log(getNumber(), number2);

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum E {
  A = getNumber(),
  B = getNumber(),
}

function displayDir(param1: Direction) {
  console.log(param1);
}
console.log(E, Direction);
displayDir(Direction.Up);

enum E {
  X,
  Y,
  Z,
}

function f(obj: { X: number }) {
  console.log(obj.X);
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}
declare enum LogLevel {
  ERROR1 = 5,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}
printImportant("ERROR", "This is a message");

const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}
// Compiler won't compile const enum

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

console.log(EDirection.Up);

ODirection.Up;

type NewObject = {
  (value?: string): number;
};

function MyFuntion(val?: string): NewObject {
  return (parm?: string) => 10;
}

console.log(MyFuntion()())

const obj1 = { Right: 1 };

// Using the enum as a parameter
function walk(dir: EDirection) {}

// It requires an extra line to pull out the values
type Direction1 = (typeof ODirection)["Up"];
function run(dir: typeof EDirection) {}

walk(EDirection.Left);
run({ ...ODirection } as typeof ODirection);
run({ ...obj1 } as typeof ODirection); // Make TypeScript fool
