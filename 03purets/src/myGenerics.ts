const score: Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
}
// not good practice to use any so we can do it using method below :-

function identityThree<Type>(val: Type): Type {
    return val
}

//To use that :-
identityThree(true)
identityThree(1)
identityThree("Premal")

function identityFour<T>(val: T): T {
    return val
}

interface Bootle{
    brand: string,
    type: number
}

identityFour<Bootle>({
    brand : "",
    type: 1
})

//////////////////////////////////////////////////////////////////

function getSearchProducts<T>(products: T[]): T { //here return type is T means returned value should be one of the value from the array
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

//Arrow functon
const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}

///////////////////////////////////////////////////////////////////////

interface Database {
    connection: string,
    username: string,

}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}
// Direct aa rite pan kri skie ne !! :-
// function anotherFunction<T, Database>(valOne:T, valTwo:Database):object {
//     return{
//         valOne,
//         valTwo
//     }
// }

anotherFunction(3, {connection:"123",username:"456"})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{     //aa vada class ni help thi Course and Quiz banne mate cart vadi functionality fulfill kri sakaya
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}