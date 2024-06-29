// Mask last four digit of number with * symbol.

let num = '123456789123';

function maskNumber(number) {
    const lastDigit = number.slice(-4)
    return lastDigit.padStart(number.length, '*');
}
const maskdata = maskNumber(num);
console.log(maskdata)