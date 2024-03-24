"use strict";
function bonus(income) {
    if (income > 10000) {
        return income * 1.5;
    }
    return income;
}
bonus(20000);
function CalculatedTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income;
}
let Tax = CalculatedTax(20100);
console.log(Tax);
Tax = CalculatedTax(20100, 1999);
console.log(Tax);
