var chalk = require('chalk');

function Dog(name){
	this.name=name;
	this.stomach=[];
}

Dog.prototype.eat = function(){
	this.stomach.push(Cat);
}

Dog.prototype.sayHi = function(){
	console.log('Hi, i am dog '+chalk.red(this.name));
}
module.exports = Dog;