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

function backspace(){
    number=box.value;
    len=number.length-1;
    newNumber=number.substring(0,len);
    box.value=newNumber;
}

function power(y){
    x=box.value;
    x=Math.pow(x,y);
    box.value=x;
}