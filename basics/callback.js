var time = 1000;
var evenDouble = function(e, cb){
    var waitTime = Math.floor(Math.random()*(time+1));
    if(e%2){
        setTimeout(function(){
            cb(new Error('Odd number'));
        },waitTime);
    }
    else 
    {
        setTimeout(function(){
            cb(null,e*2,waitTime);
        },waitTime);
    }
};