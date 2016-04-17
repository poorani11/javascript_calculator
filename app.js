var box=document.getElementById('display');
function addtoscreen(x){
    box.value +=x;

    if(x =='C'){
        box.value ='';
    }
}

function answer(){
    x=box.value;
    x=eval(x);
    box.value=x;
}
