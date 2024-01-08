// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: number): void {
  console.log(`Hello ${person}, today is ${date}!`);
}

async function getFavoriteNumber(): Promise<number> {
  const prom: Promise<number> = new Promise((reslove) => {
    reslove(25);
  });
  return prom;
}

greet("Brendan", 67);
getFavoriteNumber().then<void, never>((value) => {
  console.log(value);
});

interface UserType {
  userName: string;
  age: number;
}

class User {
  userName: string;
  age: number;
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
}

const user: UserType = new User("Manoja", 17);
console.log(user);

const obj1: any = { hello: "Some" };
let name1 = "Ok";
let name2: string = "Hello";

console.log(obj1.hello);
// This won't throw Error
// obj1.ok();
// obj1();
