let score: number | string = 33
score = 44
score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesh: User | Admin = {name: "hitesh", id: 334}

hitesh = {username: "hc", id: 334}  //ahiya admin tarike lai lese ene

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    // id.toLowerCase() // not possible
    if (typeof id === "string") {
        id.toLowerCase()
    }
  
}

//array 

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]

//PERFECT METHOD FOR ARRAY
const data5: (string | number | boolean)[] = ["1", "2", 3, true]
 

// const data3: string[] | number[] | boolean[] = ["1", "2", 3, true] 
//  <- ama error avse, ano mtlb bdha numbers or bdha string or bdha boolean em
const data4: string[] | number[] | boolean[] = ["1", "2"] 


let seatAllotment: "aisle" | "middle" | "window" // MEANS the values can be from any one of this only

seatAllotment = "aisle"
// seatAllotment = "crew"