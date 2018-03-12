

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     // this.sayName=function(){
//     //     console.log('im '+this.name);
//     // }
//     // this.sayAge=function(){
//     //     console.log('im '+this.age +" old");
//     // }
// }
// Person.prototype.sayName=function(){
//     console.log('im '+this.name);
// }
// Person.prototype.sayAge=function(){
//     console.log('im '+this.age +" old");
// }


// // or  ES6

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     sayName(){
//         console.log('im '+this.name);
//     }
//     sayAge(){
//         console.log('im '+this.age +" old");
//     }
// }


// let p1=new Person('Nag',34);
// let p2=new Person('Ria',3);


//-------------------------------------------------------


// let p={x:1,y:2};
// let c=Object.create(p);

//-------------------------------------------------------

// let o1={x:10,y:20}
// let o2={z:30};

// Object.setPrototypeOf(o2,o1);