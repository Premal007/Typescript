let greetings: string = "Hello Premal";

greetings.toLowerCase()
console.log(greetings);

// number
let userId = 334455.3
// let userId: number= 334455.3 // upar kryu em declair krie to pchi alag thi type define krvani jarur na pde em

// userId.toLowerCase()
userId.toFixed()
// userId = "hitesh"
// boolean
let isLoggedIn: boolean = false



// any

let hero: string;
// let hero; // aa case ma aa rite define na krie e na chale km ke e pchi hero = getHero vakhte pan type = any j rakhse which is not good

function getHero(){
    return "thor"
}

hero = getHero()



export {}