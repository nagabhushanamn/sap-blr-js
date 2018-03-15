


// let products = [
//     { id: 21313, name: 'Product1', price: 3000 },
//     { id: 34234, name: 'Product2', price: 1000 },
//     { id: 12312, name: 'Product3', price: 4000 },
//     { id: 64564, name: 'Product4', price: 3000 }
// ]

//-------------------------------------------------------


//let newItem={ id: 46757, name: 'Product5', price: 8000 }
// products.push(newItem);

//let newProducts=products.concat(newItem); // immutable

// let extraProducts=[
//     { id: 46757, name: 'Product5', price: 8000 },
//     { id: 34234, name: 'Product6', price: 6000 }
// ];

// let result=products.concat(extraProducts);
// let result=[...products,...extraProducts];


//-------------------------------------------------------

// every()  & some()

// let products = [
//     { id: 21313, name: 'Product1', price: 3000 },
//     { id: 34234, name: 'Product2', price: 1000 },
//     { id: 12312, name: 'Product3', price: 4000 },
//     { id: 64564, name: 'Product4', price: 3000 }
// ]

// // let result=products.every(function (item) {
// //     return item.price >= 1000;
// // });
// let result=products.some(function (item) {
//     return item.price > 8000;
// });
// console.log(result);

//-------------------------------------------------------

// filter()


// let products = [
//     { id: 21313, name: 'Product1', price: 3000 },
//     { id: 34234, name: 'Product2', price: 1000 },
//     { id: 12312, name: 'Product3', price: 4000 },
//     { id: 64564, name: 'Product4', price: 3000 }
// ]

// let result=products.filter((item,idx)=>item.price>1000);

//-------------------------------------------------------

// let products = [
//     { id: 21313, name: 'Product1', price: 3000 },
//     { id: 34234, name: 'Product2', price: 1000 },
//     { id: 12312, name: 'Product3', price: 4000 },
//     { id: 64564, name: 'Product4', price: 3000 }
// ]

// let result=products.map((item,idx)=>{
//     return {
//         name:item.name,
//         price:item.price
//     }
// });

// let nums=[1,2,3,4,5,6,7,8,9];
// let sqNums=nums.map(n=>n*n);

//-------------------------------------------------------

// reduce()

// let products = [
//     { id: 21313, name: 'Product1', price: 3000 },
//     { id: 34234, name: 'Product2', price: 1000 },
//     { id: 12312, name: 'Product3', price: 4000 },
//     { id: 64564, name: 'Product4', price: 3000 }
// ]

// let totalPrice=products.reduce((sum,item)=>{
//     console.log(sum);
//     console.log(item);
//     return sum+item.price;
// },0);
// console.log(totalPrice);

//-------------------------------------------------------

// slice()

// let products = [
//     { id: 21313, name: 'Product1', price: 3000 },
//     { id: 34234, name: 'Product2', price: 1000 },
//     { id: 12312, name: 'Product3', price: 4000 },
//     { id: 64564, name: 'Product4', price: 3000 }
// ]

// let result=products.slice(0,2);

//-------------------------------------------------------

// splice()

// let products = [
//     { id: 21313, name: 'Product1', price: 3000 },
//     { id: 34234, name: 'Product2', price: 1000 },
//     { id: 12312, name: 'Product3', price: 4000 },
//     { id: 64564, name: 'Product4', price: 3000 }
// ]

// products.splice(0,2,{ id: 23424, name: 'Product5', price: 45345 },{ id: 24234, name: 'Product6', price: 45345 });


//-------------------------------------------------------

// forEach

// let products = [
//     { id: 21313, name: 'Product1', price: 3000 },
//     { id: 34234, name: 'Product2', price: 1000 },
//     { id: 12312, name: 'Product3', price: 4000 },
//     { id: 64564, name: 'Product4', price: 3000 }
// ]
// products.forEach((item,idx)=>{
//     console.log(item);
// });

//-------------------------------------------------------


// let item = { id: 12312, name: 'Product3', price: 4000 };

// let products = [
//     { id: 21313, name: 'Product1', price: 3000 },
//     { id: 34234, name: 'Product2', price: 1000 },
//     item,
//     { id: 64564, name: 'Product4', price: 3000 },
//     item
// ]
// console.log(Array.isArray(products));
// products.pop();


// let menu=["biryani-1","biryani-3","biryani-3","biryani-4"];
// let result=menu.join(" ");

// let idx = products.indexOf(item);


//-------------------------------------------------------

// let item="1234567890";
// let result=Array.from(item);


//---------------------------------------------------------

class Service {
    constructor() {
        this.todos = [
            { id: 1, title: 'task1', completed: false },
            { id: 2, title: 'task2', completed: false }
        ]
    }
    editTodo(id,newTitle){
        this.todos.forEach(function(item,idx){
            if(item.id===id){
                item.title=newTitle
            }
        })
    }
    deleteTodo(id){
        this.todos.forEach((item,idx)=>{
            if(item.id===id){
                this.todos.splice(idx,1)
            }
        })
    }
}

let service=new Service();
service.editTodo(2,'Task Two');
service.deleteTodo(2);


// ADD_TODO
// EDIT_TODO
// DELETE_TODO
// COMPLETE_TODO
// COMPLETE_ALL
// CLEAR_COMPLETED
// VIEW  ( all | completed | active )