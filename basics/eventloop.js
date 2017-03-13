var count = 0;

var event1 = setInterval(function(){
    count++;
    console.log('Count '+count);
    if(count === 10){
        clearInterval(event1);
    }
},10);

setTimeOut(function(){
    console.log('This is the setTimeout');
},2000);

console.log('Running');