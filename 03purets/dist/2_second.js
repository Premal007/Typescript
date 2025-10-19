"use strict";
class Insta {
    constructor(cameraMode, filter, burst, short // aaextra define kryu che te chale pan ochu na chale
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
}
// Multiple interface use krva mate
class Youtube {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        console.log("Story was created");
    }
}
