
function bonus(income: number): number {
    if(income > 10_000) {
        return income*1.5;
    }
    return income;
}