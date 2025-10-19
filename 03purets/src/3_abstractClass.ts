// abstract class TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string
//     ){}
// }
// class Instagram extends TakePhoto{

// }

// const hc = new TakePhoto("test", "Test") // this will give error as TakePhoto is just an absract class
// const pp = new Instagram("test", "Test")

/////////////////

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        //some complex calculation
        return 8
    }
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number // this we can define additionally
        ){
            super(cameraMode, filter)
        }

        getSepia(): void {
            console.log("Sepia");
            
        }
}

const pp = new Instagram("test", "Test",3)
pp.getReelTime()