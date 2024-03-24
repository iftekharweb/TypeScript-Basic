
// Lateral Types = Exact / Specific

type Membership = 'Gold' | 'Silver' | 'Platinum';

let membership: Membership = 'Gold'



type Parameter = string | null | undefined

function greet(name: Parameter) : string {
    if(name) {
        return 'Hola! ' + name;
    } else {
        return 'Hola! all! '
    }
}

console.log(greet(null));

