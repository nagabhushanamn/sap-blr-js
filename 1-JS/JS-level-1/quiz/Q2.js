

let tnr={
    name:'Nag',
    doTeach:function(){
        console.log(this.name+' teaching .js');
        let notes="js-notes";
        let self=this;
        let doLearn=function(){
            console.log(this.name +" learning from "+self.name);
        }
        //doLearn();
        let emp={name:'sapient'};
        doLearn.call(emp);
    }
};
tnr.doTeach();
let newTnr={name:'Ria'}
tnr.doTeach.call(newTnr);