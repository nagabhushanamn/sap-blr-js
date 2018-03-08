
"use strict"

/*

    Execution-Context / scope
    -------------------------

    memory/stack-frame 
    with given args & locals to execute given instruction

    phase-1 : context creation / push
                
                =>all variables declared with 'var' keyword any-where in the context,
                 will get hoisted to top with default value ( undefined)  
   
    phase-2 : context execution / pop

                => instruction will get execute in sequence

    ---------------------------------------------------------
    
     .js-runtime 
        ==>always has 1 global-context by default 
        ==>global-context always executed by 'global-object'

        global-object
            => browser-envi -> window
            => Node.js  -> process

            
    ---------------------------------------------------------
    
    imp-note : every function-invocation also creates new-context/scope
               which is child of in which context that function declared

*/

//-----------------------------------------------------------------
// console.log(v);
// var v=12;
//-----------------------------------------------------------------

// var v=12;

// function f1(){
//     console.log(v);
//     var v=13;
// }

// f1(); // f1-context  <--- global-context

//-----------------------------------------------------------------

// Quiz

// var v=12;
// function f1(){
//     function f2(){
//         console.log(v);
//     }
//     f2(); // f2-context <--f1-context
//     var v=13;
// }
// f1(); // f1-context  <-- global-context

//-----------------------------------------------------------------

// var v=12;
// var v=13;

//-----------------------------------------------------------------

// var v=100;
// if(true){
//     var v=200;
// }
// console.log(v);

//-----------------------------------------------------------------

/*

    problems with 'var' keyword 

    => always get hoist
    => can re-declare same variable multiple times within context
    => no block-scope

    soln: 

      => using 'let' & 'const' keywords with block-scope  ( from ES6 )


*/

//-----------------------------------------------------------------

// console.log(v);
// let v=12;
//-----------------------------------------------------------------

// let v=12;
// let v=13;

//-----------------------------------------------------------------

// var v=100;
// if(true){
//     let v=200;
// }
// console.log(v);

//-----------------------------------------------------------------

// const person={
//     name:'Nag'
// }
// person.name="Nag N";


//--------------------------------------------------------------


// function f1(){
//     var v=100;
// }
// f1();



//--------------------------------------------------------------



