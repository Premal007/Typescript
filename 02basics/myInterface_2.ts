interface Myuser {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string

    //function use mate 2 syntax :-
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

//re-opening of the interface :- aa rite koi vasstu additionally define krvi hoy already thyeli hoy ema to am kari skie..
interface Myuser {
    githubToken: string
}

interface MYAdmin extends Myuser {
    role: "admin" | "ta" | "learner"
}

const premal: MYAdmin = { 
    dbId: 22, 
    email: "h@h.com", 
    userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "hitesh10", off: 10) => {
        return 10
    }
}
premal.email = "h@hc.com"
// hitesh.dbId = 33