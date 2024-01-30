import helloWorld from "./hello.js";
import { pi, phi, absolute } from "./maths.js";
import { pi as π } from "./maths.js";
import * as math from "./maths.js";
// import type { Cat, Dog, createCatName } from "./animal.js";
import { type Cat, type Dog, createCatName } from "./animal.js";

type Animals = Cat | Dog;
// const name1 = createCatName();

import fs = require("fs");
const code = fs.readFileSync("hello.ts", "utf8");

console.log(math.pi);
const positivePhi = math.absolute(math.phi);

console.log(π);

console.log(pi);
const absPhi = absolute(phi);
helloWorld();
