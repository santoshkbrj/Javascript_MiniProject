//Type ALiases

type stringOrNumber = string| number

type stringOrNumberArray = (string | number)[];

type Guitarist ={
    name?: string,
    active:boolean,
    album: stringOrNumber
}

type UserId = stringOrNumber

// Literal types
let myUsername: 'Dave'| 'John' | 'Amy'
myUsername = 'Amy'

//functions
const add = (a:number, b:number):number =>{
    return a+b;
}

const logMsg = (message:any):void => {
    console.log(message)
}


logMsg('Hello!')
logMsg(add(2,3))

let substract = function(c:number, d:number):number{
    return c-d;
} 

//type mathFunction = (a:number, b:number)=> number;

interface mathFunction{
    (a:number, b:number): number;
} 

let multiply: mathFunction = function(c,d){
    return c*d;
}

logMsg(multiply(2,2))

// optional parameters

const addAll = (a:number, b:number, c?:number):number => {
    if(typeof c !== 'undefined'){
        return a+b+c;
    }
    return a+b;
}

// default param value
const sumAll = (a:number=10, b:number, c:number=2):number => {
    return a+b+c;
}

logMsg(addAll(2,3,2));
logMsg(addAll(2,3));
logMsg(sumAll(undefined,3))

//Rest parameter
const total = (...nums:number[]):number =>{
    return nums.reduce((prev,curr)=> prev+curr)
}

logMsg(total(1,2,3,4))


const totals = (a:number, ...nums:number[])=> {
    return a+ nums.reduce((prev,curr)=>prev+curr)
}

logMsg(totals(1,2,3))


const createError = (errMsg: string):never=>{
    throw new Error(errMsg)
}

const inifite = ()=>{
    let i:number=1
    while(true){
        i++;
        if(i>100) break
    } 
}

const isNumber = (value: any): boolean=>{
    return typeof value === 'number'
    ? true: false
}

const numberOrString = (value: string | number): string =>{
    if(typeof value === 'string') return 'string'
    if(isNumber(value)) return 'number'
    return createError('This should never happen')
}