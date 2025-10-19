// const User = {
//     name: "hitesh",
//     email: "hitesh@lco.dev",
//     isAvtive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// createUser({name: "hitesh", isPaid: false, email: "h@h.com"})//ahiya email ma error ape che pan niche ma direct object pass krie ema nthi aptu aa typescript ni gadbadi che jema ene rokvu joie pan nthi roktu

// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}
// createUser(newUser) // aa case ma TS e rokvu joie pan nai roke


// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }

///////////////////////////////////////////////////////////////////////////


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function create_User(user: User): User{
//     // return {name: "", email: "", isActive: true}
//     return user
// }

// create_User({name: "", email: "", isActive: true})



////////////////////////////////////////////////////

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}

myUser.email = "h@gmail.com"
// myUser._id = "asa"      // this generates the error


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}





export {}