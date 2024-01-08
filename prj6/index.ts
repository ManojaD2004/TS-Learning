type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Dog = { bark: () => void };
declare function getSmallPet(): Fish | Bird | Dog;
type MyNumber = "string" extends string ? string : number;
type MyAnimal = Fish | Bird | Dog;

function isAnimal<T extends MyAnimal>(pet: Fish | Bird | Dog): pet is T {
  return "swim" in pet ? true : "fly" in pet ? true : "bark" in pet;
  // return (pet as Fish).swim !== undefined;
}

let pet = getSmallPet();

if (isAnimal<Fish>(pet)) {
  pet.swim();
} else if (isAnimal<Bird>(pet)) {
  pet.fly();
} else {
  pet.bark();
}

// assert checking is also possible
declare function assert(value: unknown): asserts value;

function multiply(x: any, y: any) {
  // You can also use assert
  assert(typeof x === "string");
  assert(typeof y === "number");
  return parseInt(x) * y;
}

interface MyObj {
  name: string;
}
interface MyObj1 extends MyObj {}
type MyBoolean<M extends boolean> = M extends true ? string : string[];

const myArray: MyBoolean<true> = "string"; // Weird way of declaring types.
const myObj1: MyObj1 = { name: "Hello" };

const testObj = { x: 10, y: "Hello", z: true };

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const xValue = getProperty<{ x: number; y: string; z: boolean }, "x">(
  testObj,
  "x"
);
// const xValue: number
const yValue = getProperty(testObj, "y");
// const yValue: string

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      // Throws an Error because any type cannot to assigned to never type
      // const _exhaustiveCheck: never = shape;
      // return _exhaustiveCheck;
      const _exhaustiveCheck = shape;
      return _exhaustiveCheck;
  }
}

let someNever: never = 1 as never;
