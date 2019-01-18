import { debug } from "util";

var person = {
    name: 'Teodor'
};

person.age = 25;

debugger;
person.name  = 'George';

console.log(person);