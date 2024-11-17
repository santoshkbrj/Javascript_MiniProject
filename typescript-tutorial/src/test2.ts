let stringArr = ['one', 'two','three'];
let guitar = ['strat', 'les paul', 5150];
let mixedData = ['EVH', 1984, true];

stringArr[0] = 'john';
stringArr.push('hey');


guitar[0] = 1984

guitar.unshift('jim')

guitar = stringArr;

let test = [];
let bands: string[] = []
bands.push('van halen');

//tuple
let myTuple: [string, number, boolean] = ['anil', 42, true]
let mixed = ['john', 1, false]

mixed = myTuple;

//Object
let myObj:object
myObj=[]

console.log(typeof myObj);

myObj = bands;

myObj = {}
const exampleObj = {
    prop1:'Dave',
    prop2: true
}

exampleObj.prop1 = 'anil';

// type guitarist = {
//     name: string,
//     active?: boolean,
//     album: (string| number)[]
// }


interface guitarist {
    name: string,
    active?: boolean,
    album: (string| number)[]
}

let evh: guitarist ={
    name: 'anil',
    active:true,
    album: [1984, 5150, '08u4']
}

let jp: guitarist={
    name: 'jimmy',
   // active: false,
    album: ['I', 'II', 'III']
}

evh = jp

const greetGuitar = (guitar: guitarist)=>{
    return `Hello ${guitar.name?.toUpperCase()}!`
}

console.log(greetGuitar(evh));

//Enums
// "unlike most typescript featurs, Enums are not a type
// -level addition to javascript but something 
// added to the language and run runtime."

enum grade {
    U,
    D, 
    C,
    B,
     A
}

console.log(grade.C)




