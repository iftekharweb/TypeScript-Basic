"use strict";
let membership = 'Gold';
function greet(name) {
    if (name) {
        return 'Hola! ' + name;
    }
    else {
        return 'Hola! all! ';
    }
}
console.log(greet(null));
