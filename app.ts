// structure typing : object ka structure
interface Ball{
	diameter :number
}
interface Sphere {
	diameter:number
}
let ball: Ball = {
	diameter: 10,
}
let sphere: Sphere = {
	diameter: 20,
}
sphere = ball //ok
ball = sphere //ok
//example 2
interface Radius {
	radius:number
}
interface Radius1{
	radius:number
}
let calculation: Radius = {
	radius:2
}
let calculation1: Radius1 = {
	radius:20
}
calculation = calculation1
calculation1 = calculation
//ex 03
interface Ball {
	diameter:number
}
interface Tube {
	diameter: number
	length:number
}
let ball1: Ball={
	diameter:20
}
let tube: Tube={
	diameter: 20,
	length:10
}
//LHS       RHS
ball1 = tube //ok    //stale object strick checking nhi hoti
//fresh object strict checking krta ha

ball = {  // fresh object
	diameter: 98,
	//length:90.....property  error
}

// tube= ball1 // proper missing  error RHS zaida hosakta hai
//RHS can have more properties than LHS
//RHS cannot have less

let person = {
	id: 1,
	name:"nimra",
}
person = {
	id: 3,
	name: "fatima",
}
//object ko reinitialization main same property asscess hogi different property amin error ayga

// index signature : pata nhi hota konsi properties aygi
//property or data type nahe  pata hoti
let object : {
	id: number,
	[x:string]:any  // index signature [x:string] string ka means hai ky property ki type kia hogi ;
} = {
	id: 30,
	fullname: "fatima",
	lastname: "nimra", //change kr sakhty hain
}
object = {
	id: 30,
	fullname: "syada",
	rollno: 3839,
	country: "pak",
	grade: "A",
	ispass: () => true,
	fruits: [],
	marks:{}
}

// stale and fresh object: ek object ka variable dosary object ky variable ky sath assign hoty hain stale  object
//fresh object : {}curly bracket main jo hoty hain

//asynchronous and synchronous programing ;
//1) synchronous programing:exacution main time nhi lagta hai output jaldi ata hai output delay nhi hota .
//2) asynchronous:excution main time lagta hai ,output delay hota result dar sey ata hai
//synchronous code direct jata hai call stack main
 
//higher order function
function one(cb: () => void) {
	console.log("One");
	setTimeout(() => {
		console.log("after 3 sec");
		cb()
	}, 2000)
	console.log("3");
}
function Two() {
	//execution main time layga
	console.log("I AM CALLBACK");
}
one(Two);

//____________________________________________________________________//

//settimeout : setTimeOut:kitna time lagay ga jo chalny main delay krta hai or bata sakty hain kitna delay ayga  1sec = 1000ms
function one1 (){
  console.log("one"); // fast  execution
  setTimeout(() => { //slow  execution
    console.log("after 3 sec");
  }, 2000);
}
one1()
console.log("3");//fast execution

//promises
function myfun() {
	
}


//------------------------------------------------------------//
//structure typing
interface Square {
	length: number,
	breath:number
}
interface Volume {
	length: number,
	breath: number,
	depth:number
}

let square: Square = {
	length: 20,
	breath:30
}
let volume: Volume = {
	length: 13,
	breath: 15,
	depth:23
}

square = volume //bcz square have 2 properties Length and breath
//volume=square  // ERROR volume have extra property depth

// // reinitialization of object
interface reinitial {
	name: string,
	rollno:number
}
let Reinitial: reinitial = {
	name: "sadia",
	rollno: 3456
}
//object ki property change nhi hoti key change nhi hoti value change hoti hai

Reinitial = {
	name: "fatima",
	rollno:9876
}
console.log(Reinitial);

//--------------------signature index------------------------------------------//
let obj : {
	id: number,
	[x:string]:any  // index signature [x:string] string ka means hai ky property ki type string kia hogi JAB PATA NHI HO KIA DATA AYGA;
} = {
	id: 30,
	fullname: "fatima",
	lastname: "nimra", //change kr sakhty hain
}
obj = {
	id: 30,
	fullname: "syada",
	rollno: 3839,
	country: "pak",
	grade: "A",
	ispass: () => true,
	fruits: [],
	marks: {}
}
console.log(obj.id);

