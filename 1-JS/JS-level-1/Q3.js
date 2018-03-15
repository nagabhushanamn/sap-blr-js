




//-----------------------------------------------------
let tnrService={
    doTeach:function(sub){
        console.log("Tnr-"+this.name +" teaching sub.");
    }
}
//-----------------------------------------------------
var tnr={
    name:'Nag'
};
//-------------------------------------------------------

let teachBtn=document.getElementById('teachBtn');

// way-1
// teachBtn.addEventListener('click', function(){
//     tnrService.doTeach.call(tnr);
// } );

// or

let newF=tnrService.doTeach.bind(tnr);
teachBtn.addEventListener('click',newF);