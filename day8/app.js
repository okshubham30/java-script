// const student = {
//     fullName: "shubham maurya",
//     marks: 99,
//     printMarks: function(){
//         console.log("marks=", this.marks); // student.marks 
//     },
// };


// const employ = {
//     calTax() {
//         console.log("tax rate is 10%");

//     },
    
// };
// const karanArjun = {
//     salary: 5000,
// };

// const karanArjun1 = {
//     salary: 5000,
// };

// const karanArjun2 = {
//     salary: 5000,
// };

// const karanArjun3 = {
//     salary: 5000,
// };

// const karanArjun4 = {
//     salary: 5000,
// };

// karanArjun.__proto__ = employ;
// karanArjun1.__proto__ = employ;
// karanArjun2.__proto__ = employ;
// karanArjun3.__proto__ = employ;
// karanArjun4.__proto__ = employ;

// class ToyotaCar{

//     constructor (brand) {
//         console.log("creating new object ");
//     }
//     start () {
//         console.log("start");
    
//     }
//     stop () {
//         console.log("stop");
//     }

//     setBrand() {
//         this.brand = brand;
//     }
// }

// let fortuner = new  ToyotaCar();
// fortuner.setBrans("fortuner");
// let lexus = new  ToyotaCar();
// lexus.setBrand("lexus");


 class Parent {
    hello() {
        console.log("hello");
    }
 }
 class Child extends Parent {

 }

 let obj = Child()