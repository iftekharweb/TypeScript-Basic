
function CheckAge(age : number | string) : number {
    if(typeof age === 'number') {
        return age+10;
    } else {
        return parseInt(age)+10;
    }
}

console.log(CheckAge(23));

console.log(CheckAge('23'));