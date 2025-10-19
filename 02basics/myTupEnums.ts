// const user: (string | number)[] = [1, "hc"]
let user: [string, number, boolean]
user = ["hc", 131, true]


let rgb: [number, number, number] = [255, 123, 112]


type User = [number, string]
const newUser: User = [112, "example@google.com"]
newUser[1] = "hc.com"


newUser.push(1)
console.log(newUser) //check this response in .js
























export {}