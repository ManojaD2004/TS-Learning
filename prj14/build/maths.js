"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.absolute = exports.RandomNumberGenerator = exports.phii = exports.phi = exports.squareTwo = exports.pi = void 0;
// @filename: maths.ts
exports.pi = 3.14;
exports.squareTwo = 1.41;
exports.phi = 1.61;
exports.phii = 1.611;
class RandomNumberGenerator {
}
exports.RandomNumberGenerator = RandomNumberGenerator;
function absolute(num) {
    if (num < 0)
        return num * -1;
    return num;
}
exports.absolute = absolute;
