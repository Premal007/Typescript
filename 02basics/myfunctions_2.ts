function addTwo(num: number): number{
     return num + 2
    //return "hello"
}
let myValue = addTwo(5)

function getUpper(val: string){
    return val.toUpperCase()
}
getUpper("hitesh")

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}


signUpUser("hitesh", "hitesh@lco.dev", false)
loginUser("h", "h@h.com")





// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

//how to use arrow function :-
const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

// ahiya map ma hero ni type jate decide kri lese array ni values ne according :-
heros.map((hero) => {
    return `hero is ${hero}`
})

heros.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void{
    console.log(errmsg);
    
}
function handleError(errmsg: string): never{
    // console.log(errmsg);
    throw new Error(errmsg);
    
}



export {}