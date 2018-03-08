

/*
 FP - principles
 -----------------
 
 ==> A function can be stored in a variable or value
 ==> A parameter of a function can be a function
 ==> The return value of a function can be a function

*/

/*

    How to create function-obj ?

    2 ways

     a. function declaration

            --> Named function
            --> function-obj created at context-creation phase
            --> always hoisted with function-object

            when to use ?

            -> to keep function always in context

     b. function expression

            -> anonymous function
            -> function-obj created at context-execution phase

            when to use ?

            -> on input/condition , to create function at execution-phase

*/

//------------------------------------------------
// a. function declaration

// console.log(add(12,13));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,13));

//------------------------------------------------
// b. function expression

// console.log(add(12,13)); // error
// var add=function(n1,n2){
//     return n1+n2;
// }
// console.log(add(12,13));

//------------------------------------------------


// e.g

// let userType;
// let action;
// // function declaration
// function login(){
//     userType="admin"; // | guest
// }
// login();
// if(userType==="admin"){
//     // function expression
//     action=function(){
//         console.log('admin logic..');
//     }
// }else{
//     action=function(){
//         console.log('guest logic..');
//     }
// }
// action();

//------------------------------------------------


// #1 A function can be stored in a variable or value

// function greet(){
//     console.log('Hello..');
// }

// let sayHello=greet;
// sayHello();


//------------------------------------------------

// #2 A parameter of a function can be a function

// function greet(f){
//     if(f){
//         f();return;
//     }
//     console.log('Hello...');
// }
// greet();
// greet(function(){console.log('Ola..')});


// let nums=[1,3,5,7,9,2,4,6,8,10];
// // nums.sort();
// let numComparator=function(a,b){return a-b;};
// nums.sort(numComparator);

//----------------------------------------------------------------

// #3   The return value of a function can be a function


// function f1(){
//     return "hello";
// }
// let r=f1();
// console.log(r);



// function teach(){
//     console.log('teaching....');
//     let practice=function(){
//         console.log('practicing....');
//     }
//     //practice();
//     return practice;
// }

// let r=teach();
// r();r();r();r();r();r();r();r();



//----------------------------------------------------------------

// function f1(a,b,c,d,e){
//     console.dir(arguments);
//     return arguments[0];
// }
// let r=f1();
// console.log(r);

// e.g


// let sum =function(){
//     let result=0,i=0,len=arguments.length;
//     while(i<len){
//         result+=arguments[i]
//         i++;
//     }
//     return result;
// }


//----------------------------------------------------------------

// Quiz

// function getFood(){
//     return "No Food"
// }

// function getFood(pay) {
//     if (arguments.length === 0) return "No Food"
//     return "biryani"
// }

// console.log(getFood(250));


//----------------------------------------------------------------

// function with default-params  ( es6 )

// function func1(a=1, b=2) {
//     // if(!a)a=1
//     // if(!b)b=2;
//     // a = a || 1;
//     // b = b || 2;
//     console.log(a);
//     console.log(b);
// }

// func1(undefined,20);

//----------------------------------------------------------------

// function with rest param

// function func(a, b, ...r) {
//     console.log(a);
//     console.log(b);
//     console.log(Array.isArray(r));
//     console.log(r);
// }

// func(1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10);