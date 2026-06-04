// Q10 (Real Interview Style)
// let companies = [
// "Bloomberg",
// "Microsoft",
// "Uber",
// "Google",
// "IBM",
// "Netflix"
// ];
// First company remove karo.
// Uber ki jagah Ola add karo.
// End me Amazon add karo.a


let companies = [
    "Bloomberg",
    "Microsoft",
    "uber",
    "google",
    "IBM",
    "Netflix",
];

console.log(companies.shift());
console.log(companies.splice(2, 1, "ola"));