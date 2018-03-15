

var myArray=[];

//-------------------------------------------------------

function getF(i){
    var newF=function(){
        console.log(i);
    };
    return newF;
}

for(let i=0;i<2;i++){
    var newF=function(){
        console.log(i);
    };
    myArray.push(newF);
}

//-------------------------------------------------------

myArray[0]();
myArray[1]();