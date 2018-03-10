


// - destructuring

// a. array destructuring

// let arr=[10,20,30,400,[50,60]];

// let a=arr[0];
// let b=arr[1];
// let c=arr[2];

// or

// let [a,b,c,d=40,[e,f]]=arr;
// let a,b,c;
// [a,b,c]=arr;


// b.object destructuring

// let person={
//     name:'Nag',
//     age:34
// };
// let myName=person.name;
// let myAge=person.age;
// or

// let {name:myName,age:myAge}=person;
// let {name:name,age:age}=person;
// or
// let {age,name}=person;

//------------------------------------------------------------


// - spread operator


// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nums=[10,20,30];
// // func(nums[0],nums[1],nums[2]);
// // or
// func(...nums)


// let arr1=[1,2,3];
// let arr2=[7,8,9];

// let newArray=[...arr1,4,5,6,...arr2,...arr1];


// Q

// let nums = [10, 30, 40, 20, 70, 90];
// let max=Math.max(...nums);


//------------------------------------------------------------


// - obj-literal enhancements


// let name="Nag";
// let age=34;

// let addressType="vacation"; // office | vacation 

// // Es5
// let person={
//     name:name,
//     age:age,
//     address:'...',
//     sayName:function(){
//         console.log('im...');
//     }
// };

// // es6
// let newPerson={
//     name,
//     age,
//     [addressType+"-address"]:'12,street,city,country',
//     sayName(){
//         //...
//     },
//     ['say Age'](){
//         console.log('i cant say ')
//     }
// }


//------------------------------------------------------------


// symbol type

/*

    unique & immutable value , used for obj identification 

*/


// let javaSymbol = Symbol.for('java')
// let jsSymbol = Symbol.for('js');

// let tnr1 = {
//     name: 'Nag',
//     [jsSymbol]: 'javascript,react,angular'
// }
// let tnr2={
//     name:'Nag',
//     [javaSymbol]:"java,spring"
// }
// let tnr3={
//     name:'Rebcca',
//     [javaSymbol]:"java"
// }

// if(tnr1[javaSymbol]){
//     console.log('he is java trainer');
// }

//--------------------------------------------------------------------


// let arr=["biryani","biryani-1",'biryani-2'];


// for(let item of arr){
//     console.log(item);
// }
// let newMenu=[...arr,'biryani-3']
// let [menu1,menu2,menu3]=newMenu;

//--------------------------------------------------------------------


// for(var i=0;i<5;i++){
//     console.log(i);
// }

// let person = {
//     name: 'Nag',
//     age: 34,
//     [Symbol.iterator]:function(){
//         return {
//             next:function(){
//                 return {value:this.name,done:true}
//             }
//         }
//     }
// }

// for (let p in person) {
//     console.log(p);
// }

// let arr = [1, 2, 3, 4]

// for (let item of person) {
//     console.log(item);
// }


//------------------------------------------------------------

// - arrow-function


// let getPrice=function(){
//     return 100+200;
// }

// or 

// let getPrice=()=>{
//     return 100+200;
// }
// let getPrice=()=>100+200;
// let getPrice=(count)=>count*(100+200);
// let getPrice = count => count * (100 + 200);
// let getPrice = (count,gst) => count * (100 + 200) + gst;
// let getPrice = (count, gst) => {
//     let cost = count * (100 + 200);
//     let total = cost + gst;
//     return total;
// };


// why we need arrow functiokn ?

/*

    ==> for compact function-arg
    ==> to capture 'this'


     regular-function(s):

        ==> by default function bound to 'global-obj'
        else
        ==> we can bind to other object ( static | dynamic )

     arrow-function:
     
        => always run on creator(this)
        => we cannot bind to any other object

*/



//------------------------------------------------------------

// let nums=[1,3,5,7,9,2,4,6,8,10];
// // nums.sort(function(a,b){return a-b;})
// nums.sort((a,b)=>a-b);

//------------------------------------------------------------


// let tnr={
//     name:'Nag',
//     doTeach:function(){
//         console.log('teaching .js');
//         // let askQues=function(q){
//         //     console.log(this.name +" answering "+q);
//         // }
//         // or
//         let askQues=(q)=>{
//             console.log(this.name +" answering "+q);
//         }
//         console.log('teach ends');
//         return askQues;
//     }
// };

// let askQues=tnr.doTeach();
// askQues('Q1');
// let newTnr={name:'Ria'};
// askQues.call(newTnr,"Q2");

//--------------------------------------------------------------------------


// let invoice={
//     num:123,
//     process:function(){
//         console.log(`INV-${this.num} processed`);
//     }
// };

// let invoice={
//     num:123,
//     process:()=>{
//         console.log(`INV-${this.num} processed`);
//     }
// };

// let invoice={
//     num:123,
//     process:function(){
//         console.log(`INV-${this.num} processed partially`);
//         let complete=function(){
//             console.log(`INV-${this.num} processed completly`);
//         }
//         return complete;
//     }
// };

// let invoice={
//     num:123,
//     process:function(){
//         console.log(`INV-${this.num} processed partially`);
//         let complete=()=>{
//             console.log(`INV-${this.num} processed completly`);
//         }
//         return complete;
//     }
// };

// let complete=invoice.process();
// complete();

//--------------------------------------------------------------


// let obj={
//     func:()=>{
//         let ff=()=>{console.log(this)}
//         return ff;
//     }
// }
// let ff=obj.func();
// ff();

//--------------------------------------------------------------

// function Person(name,age){
//     this.name=name;
//     this.age=age;

//     let incAge=()=>{
//         this.age++;
//         console.log(this.name +"->"+this.age);
//     }
//     setInterval(incAge,1000);

// }

// new Person('Ria',3);

//--------------------------------------------------------------

// let p={
//     name:'Nag',
//     sayName:function(){

//     }
// };

//-----------------------------------------------------------------



// class in ES5

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.sayName=function(){
//     //..
// }
// Person.prototype.sayAge=function(){
//     //..
// }

// class in Es6


class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
        console.log('Person::constructor');
    }
    sayName(){
        console.log('im '+this.name);
    }
    sayAge(){
        console.log('im '+this.age+" old");
    }
}

class Employee extends Person{
    constructor(name,age,salary){
        super(name,age)
        this.salary=salary;
        console.log('Employee::constructor');
    }
    saySalary(){
        console.log('i cant say');   
    }
    askForBonus(){
        return this.salary*0.02;
    }
}

class Boss extends Employee{
    askForBonus(){
        return this.salary*0.2 + super.askForBonus();
    }
}

let boss=new Boss('Nag',34,1000);


class Abc{
    static staMethod(){

    }
}
Abc.staVar=123;