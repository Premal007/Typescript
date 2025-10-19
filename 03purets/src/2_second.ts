interface TakePic {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Insta implements TakePic {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string // aaextra define kryu che te chale pan ochu na chale
    ){}
}

// Multiple interface use krva mate
class Youtube implements TakePic, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number 
    ){}

    createStory(): void {
        console.log("Story was created");
        
    }
}