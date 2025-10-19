const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isAvtive: true
}

function createUser({name: string, isPaid: boolean}){}

createUser({name: "hitesh", isPaid: false, email: "h@h.com"})//ahiya email ma error ape che pan niche ma direct object pass krie ema nthi aptu aa typescript ni gadbadi che jema ene rokvu joie pan nthi roktu

let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}
createUser(newUser) // aa case ma TS e rokvu joie pan nai roke

 

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}





export {}