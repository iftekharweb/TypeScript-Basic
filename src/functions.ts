
function bonus(income: number): number {
    if(income > 10_000) {
        return income*1.5;
    }
    return income;
}

bonus(20_000);

function CalculatedTax(income:number, taxYear:number = 2022) : number {
    if(taxYear<2022) {
        return income*1.2;
    }
    return income
}

let Tax:number = CalculatedTax(20_100);
console.log(Tax);
Tax = CalculatedTax(20_100, 1999);
console.log(Tax);