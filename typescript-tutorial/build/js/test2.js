"use strict";
let stringArr = ['one', 'two', 'three'];
let guitar = ['strat', 'les paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'john';
stringArr.push('hey');
guitar[0] = 1984;
guitar.unshift('jim');
guitar = stringArr;
let test = [];
let bands = [];
bands.push('van halen');
//tuple
let myTuple = ['anil', 42, true];
let mixed = ['john', 1, false];
mixed = myTuple;
//Object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true
};
exampleObj.prop1 = 'anil';
let evh = {
    name: 'anil',
    active: true,
    album: [1984, 5150, '08u4']
};
let jp = {
    name: 'jimmy',
    // active: false,
    album: ['I', 'II', 'III']
};
evh = jp;
const greetGuitar = (guitar) => {
    var _a;
    return `Hello ${(_a = guitar.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
};
console.log(greetGuitar(evh));
//Enums
// "unlike most typescript featurs, Enums are not a type
// -level addition to javascript but something 
// added to the language and run runtime."
var grade;
(function (grade) {
    grade[grade["U"] = 0] = "U";
    grade[grade["D"] = 1] = "D";
    grade[grade["C"] = 2] = "C";
    grade[grade["B"] = 3] = "B";
    grade[grade["A"] = 4] = "A";
})(grade || (grade = {}));
console.log(grade.C);
