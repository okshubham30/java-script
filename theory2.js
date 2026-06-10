// 4. map() = Create a new array

let numbers2 = [1, 2, 3, 4];

let square = numbers2.map((num) => {
    return num * num;
});

console.log(square);


// 5. filter() = Select elements based on condition

let numbers3 = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers3.filter((num) => {
    return num % 2 === 0;
});

console.log(evenNumbers);


// 6. reduce() = Convert array into a single value

let numbers4 = [1, 2, 3, 4, 5];

let sum = numbers4.reduce((previous, current) => {
    return previous + current;
});

console.log(sum);


// 7. reduce() = Find largest number

let numbers5 = [10, 25, 5, 40, 15];

let largest = numbers5.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(largest);