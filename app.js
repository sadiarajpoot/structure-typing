"use strict";
//structure typing : object ka structure
// interface Ball{
// 	diameter :number
// }
// interface Sphere {
// 	diameter:number
// }
// let ball: Ball = {
// 	diameter: 10,
// }
// let sphere: Sphere = {
// 	diameter: 20,
// }
// sphere = ball //ok
// ball = sphere //ok
// //example 2
// interface Radius {
// 	radius:number
// }
// interface Radius1{
// 	radius:number
// }
// let calculation: Radius = {
// 	radius:2
// }
// let calculation1: Radius1 = {
// 	radius:20
// }
// calculation = calculation1
// calculation1 = calculation
// //ex 03
// interface Ball {
// 	diameter:number
// }
// interface Tube {
// 	diameter: number
// 	length:number
// }
// let ball1: Ball={
// 	diameter:20
// }
// let tube: Tube={
// 	diameter: 20,
// 	length:10
// }
// //LHS       RHS
// ball1 = tube //ok    //stale object strick checking nhi hoti
// //fresh object strict checking krta ha
let square = {
    length: 20,
    breath: 30
};
let volume = {
    length: 13,
    breath: 15,
    depth: 23
};
square = volume; //bcz square have 2 properties Length and breath
let Reinitial = {
    name: "sadia",
    rollno: 3456
};
//object ki property change nhi hoti key change nhi hoti value change hoti hai
Reinitial = {
    name: "fatima",
    rollno: 9876
};
console.log(Reinitial);
//--------------------signature index------------------------------------------//
// let obj : {
// 	id: number,
// 	[x:string]:any  // index signature [x:string] string ka means hai ky property ki type kia hogi ;
// } = {
// 	id: 30,
// 	fullname: "fatima",
// 	lastname: "nimra", //change kr sakhty hain
// }
// obj = {
// 	id: 30,
// 	fullname: "syada",
// 	rollno: 3839,
// 	country: "pak",
// 	grade: "A",
// 	ispass: () => true,
// 	fruits: [],
// 	marks:{}
// 
