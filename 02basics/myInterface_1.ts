interface MYuser {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string

    //function use mate 2 syntax :-
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}


const Premal: MYuser = { 
    dbId: 22, 
    email: "h@h.com", 
    userId: 2211,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "hitesh10", off: 10) => {
        return 10
    }
}
