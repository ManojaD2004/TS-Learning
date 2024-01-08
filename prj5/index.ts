console.log("Hello world");
function padLeft(padding: number | string, input: string): string {
  // Nice way to tell function as been not implemented
  throw new Error("Not implemented yet!");
}
// padLeft(12, "Hello");

type MyType<T1, T2> = (T1 | T2)[];
type MyType1<T1, T2> = T1[] | T2[]; // Big Difference between two!

const myObj: { ok: string } = { ok: "hello" };
const myObj1: { readonly ok: "hello" } = { ok: "hello" };

function padLeft1(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

console.log(padLeft1(12, "Hello"));

type MyObject = {
  ok: string;
  [age: symbol]: number;
};
const age = Symbol("age");
let ok = "ok" as const;
const myObj2: MyObject = { [ok]: "Hello", [age]: 123 };
console.log(myObj2);
console.log(myObj2[ok]);
console.log("See functions written here!!");

function getUsersOnlineMessage(numUsersOnline: number) {
  // 0
  // NaN
  // "" (the empty string)
  // 0n (the bigint version of zero)
  // null
  // undefined
  // all coerce to false, and other values get coerced to true.
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

function printAll1(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // "" Gives false, so you're doing no branch for "",
  // if that is ok you can proceed
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

function printAll2(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();

    y.toLowerCase();
  } else {
    console.log(x);

    console.log(y);
  }
}

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);

    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}

type Fish = { swim: () => void; name: string };
type Bird = { fly: () => void; name: string };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

type Human = { swim?: () => void; fly?: () => void };

function move1(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;
  } else {
    animal;
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

let x = Math.random() < 0.5 ? 10 : "hello world!";

x = 1;

console.log(x);

x = "goodbye!";
// throw an error
// x = true;

// x = true as any;
// Make TypeScript Fool
// Using their own rules against them!!

console.log(x);

function example1() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;

  console.log(x);

  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);
  } else {
    x = 100;
    console.log(x);
  }

  return x;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
  // or return "swim" in pet;
}
console.log(
  isFish({
    fly() {},
    name: "Nemo",
  })
);
declare function getSmallPet(): Fish | Bird;
let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else if (isFish(pet)) {
  pet.fly();
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
