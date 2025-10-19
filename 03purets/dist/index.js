"use strict";
console.log("Welcome to TS");
// Class Lec-1 :-
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
// const hitesh = new User("h@h.com","hitesh")
// hitesh.name //not accesible here
/////////////////////////////////////////////////////////////////////
// Class Lec-2 :-
// This SYNTAX is used profesionally for class declaration :-
// class User {    
//     readonly city: string = "Jaipur" //value assign na krie to error apse
//     constructor(
//         public email: string, 
//         public name: string,
//         // private userId: string
//         ){}
// }
// const hitesh = new User("h@h.com","hitesh")
////////////////////////////////////////////////////////////////////
// Lec-3 :-
// class User {
//     private _courseCount = 1
//     readonly city: string = "Jaipur"
//     constructor(
//         public email: string, 
//         public name: string,
//         // private userId: string
//         ){
//     }
//     // Private method :-
//     private deleteToken(){
//         console.log("Token deleted");
//     }
//     get getAppleEmail(): string{
//         return `apple${this.email}`
//     }
//     get courseCount(): number {
//         return this._courseCount
//     }
//     //here we can't define the type of the setter...it gives error 
//     set courseCount(courseNum) {
//         if (courseNum <= 1) {
//             throw new Error("Course count should be more than 1")
//         }
//         this._courseCount = courseNum
//     }
// }
// const hitesh = new User("h@h.com","hitesh")
// // hitesh.deleteToken() //this gives error as it is the private method
///////////////////////////////////////////////////////////////////
//Lec-4 :-
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    // Private method :-
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //here we can't define the type of the setter...it gives error 
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
//Inheritance :- 
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; // accessible due to it has marked as protected.
    }
}
