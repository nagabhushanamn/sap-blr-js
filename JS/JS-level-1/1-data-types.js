


/*

    data-types
    ------------

    1. simple / primitives  ==> values
        a. string
        b. number
        c. boolean
        d. undefined
    2. complex / reference  ==> objects


*/

//------------------------------------------------

// string

var name = "Nag"
var selection = 'abc';
var dynamicString = `the result is ${12 + 13}` // String-Interpolation ( from ES6)
var menu = `
    1. item1
    2. item2
`;

//------------------------------------------------

// number

var count = 12;
var cost = 12.12;

//------------------------------------------------

// boolean
var found = true;

/*

    imp-note:

    falsy values ==> fase,0,null,undefined,NAN,""
    ref : https://dorey.github.io/JavaScript-Equality-Table/

*/

//------------------------------------------------

// undefined

var v;

//------------------------------------------------


// Reference Types  ==> objects
//------------------------------

/*

    How to create object ?

    sysntax:
    -----------

        var ref=new Constructor();

    imp-note:
    
    ==>  by default .js-objects are exensible & configurable

*/


// var config = new Object();
// config.url = "http://";
// config.httpMethod="GET";
// config.doSomething=function(){
//     console.log('doing something..');
// }
// delete config.httpMethod;



//---------------------------------------------------------

 // literal objects

 // a. Object

var config = new Object();
config.url = "http://";
config.httpMethod="GET";
config.doSomething=function(){
    console.log('doing something..');
}

// or

var newConfig={
    url:"http://",
    httpMethod:'POST',
    doSomething:function(){
        console.log('doing something..');
    }
}

//---------------------------------------------------------

// Array

var arr=new Array();
arr.push("item-1")
arr.push("item-2")
arr[2]="item-3";

// or

var newArr=["item1","item2","item3"];

//---------------------------------------------------------

// RegExp

var ssn=new RegExp("\\d{3}-\\d{2}-\\d{4}");
// or
var newSsn=/\d{3}-\d{2}-\d{4}/;

//---------------------------------------------------------

// Function

var add=new Function("n1","n2","var r=n1+n2;return r;");
// or
function add(n1,n2){
    var r=n1+n2;
    return r;
}


//---------------------------------------------------------



// how to access obj's properties

/*
    ==> '.' 
    ==> '[]'
*/

var person={
    name:'Nag',
    'home-address':'Chennai'
};

//person.name="Nag N";
//console.log(person.name);

// person['name']="Nag N";
// console.log(person['name']);

// person['home-address']="Bengalur";
// console.log(person['home-address']);

var propName="home-address"; // name | 'home-address'
console.log(person[propName]);
