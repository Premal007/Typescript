"use strict";
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
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst // this we can define additionally
    ) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const pp = new Instagram("test", "Test", 3);
pp.getReelTime();
