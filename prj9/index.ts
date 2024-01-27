function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mm: number, dd: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);

function len(s: string): number;
function len(arr: string[]): number;
function len(arr1: number[], m?:number): boolean;
function len(x: any[] | string, m?: number): number | boolean {
  return x.length;
}

len([1, 2, 3], 4);
len(["1", "2", "3"]);
//len(["a",1]);
//Give an Error

// Few Other Types: 
let a:void;
let b:object;
let c:Object;
let d:Function;
let e:unknown;
let f:never;

function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const ans = multiply(10, 1, 2, 3, 4);

// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [8, 5];
// const angle = Math.atan2(...args);
// Inferred as 2-length tuple
const args1 = [8, 5] as const;
// OK
const angle = Math.atan2(...args1);

type voidFunc = () => void;
 
const f1: voidFunc = () => {
  return true;
};
 
const f2: voidFunc = () => true;
 
const f3: voidFunc = function () {
  return true;
};


function f4(): void {
  // @ts-expect-error
  return true;
}
 
const f5 = function (): void {
  // @ts-expect-error
  return true;
};
