var buffer = new Buffer('HelloMe');

console.log(buffer.toString());

console.log(buffer.toString('base64'));

var v = new Buffer('HelloWorld').toString('base64');

console.log(buffer.toString('utf-8',0,2));