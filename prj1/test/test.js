class NewUser {
  constructor(user, number) {
    this.user = user;
    this.number = number;
    this.nn = function () {
      console.log(this.user);
      return this.user;
    };
  }
}

function NewUserFun(user, number) {
  this.user = user;
  this.number = number;
  this.nn = function () {
    console.log(this.user);
    return this.user;
  };
}

const user1 = { user: "Man", number: 10 };
const user = new NewUser("Man", 10);
const user2 = new NewUserFun("Man", 10);
console.log(user.nn());
console.log(user2.nn());
console.log(user);
console.log(user1);
console.log(user2);
console.log(user2 instanceof NewUser);
