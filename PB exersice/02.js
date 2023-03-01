function depositCalculator(input){

let amountDeposited = Number(input[0]);
let termOfTheDeposit = Number(input[1]);
let annualInterestRate = Number(input[2]);
let rate = annualInterestRate / 100;
let sum = amountDeposited + termOfTheDeposit * ((amountDeposited * rate) / 12);
console.log(sum);
}

depositCalculator(["2350", "6 ", "7 "]);