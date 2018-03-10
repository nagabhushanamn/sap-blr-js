

/*
    this ==> Execution-Context's owner
*/

// let pName="Global";

// let person1 = {
//     pName: 'Nag', // obj's property
//     sayName: function () {
//         let pName="Local";
//         console.log('im '+pName); // context's hierarchy's datta
//         console.log('im '+ person.pName); // referencing obj's  data
//         console.log('im '+this.pName); // context's owner data
//     }
// };
// let person2={ pName: 'Ria' };

// let person=person1;
// let oldPerson = person1;
// person = person2;
// oldPerson.sayName();




//-------------------------------------------------------------



// let person={
//     pName:'Nag',
//     sayName:function(){
//         console.log('im '+this.pName);
//     }
// };
// person.sayName();
// let oldPerson=person;
// oldPerson.sayName();
// console.log('-----------------');
// // person.pName="Renu";
// person.sayName();
// oldPerson.sayName();
// person={pName:'Renu'}
// console.log('-----------------');
// //person.sayName();
// oldPerson.sayName();

//-------------------------------------------------------------



/*

    Functioon Binding
    -----------------

        - static 
        - dynamic

*/


// a. static Function-Binding

// let p1={name:'Nag',sayName:function(){console.log('im '+this.name)}}
// let p2={name:'Ria',sayName:function(){console.log('im '+this.name)}}

// function sayNameForAll(){
//     // console.dir(this);
//     console.log('im '+this.name);
// }
// let p1={name:'Nag',sayName:sayNameForAll}
// let p2={name:'Ria',sayName:sayNameForAll}

// sayNameForAll();  // function-invocation ( this ==> global-object )
// p1.sayName(); // im Nag  // method-invocation  ( this ==> invoker )
// p2.sayName(); // im Ria

//----------------------------------------------------------------

// a. dynamic Function-Binding
// let greetLib={
//     name:'third-party greet lib',
//     sayName:function(message,from){
//         console.log(message +' im '+this.name +" - "+from);
//     }
// };
// // greetLib.sayName();
// let person={name:'Nag'};
// let employee={name:'Sapient'};

// way-1
// greetLib.sayName.call(person,"hello","chennai"); 
// greetLib.sayName.call(employee,"hey","bengalore"); 

// way-2
// greetLib.sayName.apply(person,["hello","chennai"]); 
// greetLib.sayName.apply(employee,["hey","bengalore"]); 

//way-3
// let personSayName=greetLib.sayName.bind(person,"hello","chennai");
// personSayName()
// personSayName();
// let employeeSayName=greetLib.sayName.bind(employee);
// employeeSayName('hi',"bengalore");
// employeeSayName('hey',"usa");



//----------------------------------------------------------------


// 100+

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.sayName=function(){
//         console.log('im '+this.name);
//     }
//     this.sayAge=function(){
//         console.log('im '+this.age +" old");
//     }
// }

// let p1=new Person('Nag',34); // let p1={name:'Nag',age:34,sayName:function(){}}
// let p2=new Person('Ria',3);
// //...
// p1.sayName();
// p2.sayAge();


//-------------------------------------------------

// we can invoke functions in 4 ways

/*

    - function invocation  ==>  ( this ==> global-obj )
    - method-invocation / static-function binding ==> ( this ==> invoker-obj)
    - call/apply/bind invocation / dynamic function binding ( this ==> arg-obj )
    - constructor invocation ( this ==> new-obj)


*/