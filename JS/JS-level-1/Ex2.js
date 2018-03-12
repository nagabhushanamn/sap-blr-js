"use strict"

let person={
    _name:'Nag',
    _age:32,
    set name(name){
        console.log('set...');
        if(name){
            this._name=name;
        }
    },
    get name(){
        console.log('get...');
        return this._name;
    }
};

// Object.preventExtensions(person);
// Object.seal(person);  // preventExtensions + seal
// Object.freeze(person); // // preventExtensions + seal + freeze

// Object.defineProperty(person,'name',{writable:false,configurable:false})

// person.newProp='blab la';
// delete person.age;
// person.name="bla bla";

//---------------------------------------------------------------

person.name="Nag N"; // set
console.log(person.name); // get