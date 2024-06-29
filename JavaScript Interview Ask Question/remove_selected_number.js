// Remove the selected number from array.

const num = [1, 2, 3, 4, 5, 6, 9, 8];
const value = 4;

const newArr = num.filter(item => {
    if (item != value) {
        return item
    }
})

console.log(newArr)