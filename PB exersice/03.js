function  vacationBooksList(input){
let bookPages = Number(input[0]);
let pagesPerHour = Number(input[1]);
let days = Number(input[2]);
let hours = bookPages / pagesPerHour;
let result = hours / days;
console.log(result);
}

vacationBooksList(["432 ", "15 ", "4 "]);