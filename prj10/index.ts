interface Shape {
  width: number;
  height: number;
}

interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape({ shape, xPos, yPos }: PaintOptions) {
  // ...
}

declare const getShape: () => Shape;

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });

interface StringArray {
  [index: number]: string;
}

declare const getStringArray: () => string[];

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];

interface NumberOrStringDictionary {
  [index: string]: number | string; //remove | string you'll get an error
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let mySquare = createSquare({ colour: "red", width: 100 });
let mySquare1 = createSquare({ color: "red", width: 100 });
let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

function doStuff(values: readonly string[]) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  //  values.push("hello!");
  // values[0] = 9;
  copy.push("a"); //This is possible
}

let x: readonly string[] = [];
let y: string[] = [];

x = y;
y = x as string[]; // remove as string[], you'll get an error

type Either2dOr3d = [number, number, number];

function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;

  console.log(`Provided coordinates had ${coord.length} dimensions`);
}

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];


function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
  // ...
}

function readButtonInput1(name: string, version: number, ...input: boolean[]) {
  // ... same as above
}

function doSomething(pair: readonly [string, number]) {
  // ... readonly tuple also available
}