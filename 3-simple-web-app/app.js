


// using DOM API



// Query DOM & Listen for event(s)

// let box = document.querySelector('.well');
// let hideBtn = document.querySelector('.btn-danger');
// let showBtn = document.querySelector('.btn-primary');
// let greetBtn = document.querySelector('.btn-success');


// hideBtn.addEventListener('click', function (e) {
//     //box.style.display = 'none'
//     box.style.visibility = 'hidden';
// });

// showBtn.addEventListener('click', function (e) {
//     // box.style.display = 'block'
//     box.style.visibility = '';
// });

// greetBtn.addEventListener('click', function (e) {
//     box.innerHTML = '<h1> Good Morning </h1>'
// });


//------------------------------------------------------------------


// using Timer API

// setTimeout(function(){
//     console.log('after timeout..');
// },3000);

// let interval=setInterval(function(){
//     console.log('again ill execute after 1s');
// },1000);

// setTimeout(function(){
//     clearInterval(interval);
// },5000);



// let pandaPics = [
//     "./images/1.jpeg",
//     "./images/2.jpeg",
//     "./images/3.jpeg",
//     "./images/4.jpeg"
// ];

// let pandaImgEle = document.querySelector('#panda');
// let startBtn = document.querySelector('#start');
// let stopBtn = document.querySelector('#stop');

// let inAction = false;
// startBtn.addEventListener('click', function (e) {
//     if (!inAction) {
//         let index = 0;
//         let interval = setInterval(function () {
//             let pandaPic = pandaPics[index];
//             pandaImgEle.src = pandaPic;
//             index++;
//             if (index === pandaPics.length) {
//                 index = 0;
//             }
//         }, 1000);

//         stopBtn.addEventListener('click', function () {
//             clearInterval(interval);
//             inAction = false;
//         })
//         inAction = true;
//     }
// });


//------------------------------------------------------------------


let employeeForm = document.querySelector('#employee-form');
employeeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let firstNameField = document.querySelector('#firstName');
    let firstName = firstNameField.value;
    if (!firstName) {
        //console.log('FirstName is Required...');
        //window.alert('FirstName is Required..');
        firstNameField.style.border = '1px solid red';
        document.querySelector('#firstNameMessage').innerText = "FirstName is Required";
        firstNameField.focus();
    } else {
        firstNameField.style.border = '';
        document.querySelector('#firstNameMessage').innerText = "";
    }

});