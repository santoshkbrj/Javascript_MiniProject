"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a;
let d = 'world';
let e = 43;
const addOrConcate = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcate(2, 2, 'concat');
//Be careful! Ts sees no problem -but a string is returned
let nextVal = addOrConcate(2, 2, 'concat');
//(10 as unknown) as string
// The DOM 
const img = document.querySelector('img');
const myImg = document.querySelector('#img');
img.src;
myImg.src;
