"use strict";
var Enum;
(function (Enum) {
  Enum[(Enum["A"] = 0)] = "A";
})(Enum || (Enum = {}));
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
let obj1 = { hello: "world" };
console.log(obj1["hello"], obj1);
console.log(Enum);
