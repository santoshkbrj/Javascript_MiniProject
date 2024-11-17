type One = string
type Two = string | number
type Three = 'hello'
type four = number

//convert to more or less specific
let a:One = 'hello'
let b = a as Two // less specific
let c = a as Three

let d=<One>'world'
let e = <string |number> 43

const addOrConcate = (a:number, b:number, c: 'add' | 'concat'):number | string =>{
    if(c==='add') return a+b
    return '' + a +b
}

let myVal: string = addOrConcate(2, 2, 'concat') as string

//Be careful! Ts sees no problem -but a string is returned
let nextVal: number = addOrConcate(2, 2, 'concat') as number

//(10 as unknown) as string


// The DOM 
const img = document.querySelector('img') as HTMLImageElement
const myImg = <HTMLImageElement>document.querySelector('#img') 

img.src
myImg.src