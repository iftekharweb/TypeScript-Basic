
type InfoStructure = {
    readonly id : number,
    name : string,
    retire : (date:Date) => void
}

let employee : InfoStructure = {
    id : 1,
    name : 'Shishir',
    retire : (date:Date) => {
        console.log(date)
    }
}

let teacher : InfoStructure = {
    id : 2,
    name : 'Iftekhar',
    retire : (date:Date) => {
        console.log(date)
    }
}

console.log(employee)
console.log(teacher)