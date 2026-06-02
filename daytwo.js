//NUMBER IS DIVISIBLE BY 5 OR NOT 

let number = prompt("enter a number");
if (number % 5 === 0){
    console.log("number is divisible by 5");

} else {
    console.log("number is not divisible by 5");
}

//write a code with give a grade to a student based on marks obtained in an exam 

let marks = prompt("enter your marks");

if (marks >= 90 ){
    console.log("grade is A" );

}else if (marks >=80){
    console.log("grade is B");
} else if (marks >=70){
    console.log("grade is c");
}else if (marks >=60){
    console.log("grade is D");
} else {
    console.log("grade is F");
}