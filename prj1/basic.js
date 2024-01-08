var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.p = "Hello";
        this.name = name;
        UserAccount.name1 = name;
        this.id = id;
    }
    return UserAccount;
}());
function getUser(user) {
    console.log(user);
}
function createUser(name, age) {
    return new UserAccount(name, age);
}
function getLength(s) {
    if (typeof s === "string") {
        return [s].length;
    }
    return s.length;
}
var newUser = /** @class */ (function () {
    function newUser(name, id) {
        this.name = name;
        this.id = id;
    }
    return newUser;
}());
var user4 = { name: "KK", id: 3 };
var user5 = new newUser("Kk", 3);
console.log(user4);
console.log(user5);
console.log(user4 instanceof newUser);
console.log(user5 instanceof newUser);
var user = createUser("Adi", 1);
var user1 = new UserAccount("Red", 2);
var user2 = new UserAccount("Bunny", 3);
getUser(user);
console.log(user);
console.log(UserAccount.name1);
console.log(getLength("Hello"));
// Generic
var aa = "hello";
var ab = "Hello TypeScript";
var ac = ab.toLocaleLowerCase();
console.log(ab);
console.log(ac);
var names = [["Hello", "World"]];
var backpack = {
    add: function (obj) {
        console.log(obj);
    },
    get: function () {
        return "Hello";
    },
};
var object = backpack.get();
console.log(object);
backpack.add("23");
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
// logs "12, 26"
var point = { x: 12, y: 26 };
logPoint(point);
var point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
var rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
        this.z = x + y;
        this.zz = this.z * 3;
    }
    VirtualPoint.prototype.add = function () {
        return this.x + this.y + this.z + this.zz;
    };
    VirtualPoint.show = function () {
        console.log("Hello");
    };
    return VirtualPoint;
}());
var newVPoint = new VirtualPoint(13, 56);
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
