type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);

type SomeObject = { some: string };

type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

// Date function or Object Type
interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}

function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

console.log(firstElement<number>([1, 2, 3]));

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type | null {
  if (obj.length >= minimum) {
    return obj;
  } else {
    // Throws Error
    // return { length: minimum };
    return null;
  }
}

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// Normally it would be an error to call this function with mismatched arrays:
// const arr = combine([1, 2, 3], ["hello"]); 
const arr = combine<string | number>([1, 2, 3], ["hello"]);

function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}
 
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}
 
// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}