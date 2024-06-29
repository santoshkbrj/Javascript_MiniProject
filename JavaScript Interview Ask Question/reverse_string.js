//Reverse given string

const str = "hello world";

// function reverse(str) {
//     let reversestr = "";
//     for (i = str.length - 1; i >= 0; i--) {
//         reversestr += str[i]
//     }
//     return reversestr;
// }
// const myStr = reverse(str);
// console.log(myStr);

function reverseStr(str) {
    return str.split('').reverse().join('');
}
const newStr = reverseStr('hello');
console.log(newStr)