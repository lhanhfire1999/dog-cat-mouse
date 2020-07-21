
function Cat(name){
	this.name=name;
	this.stomach=[];
}

Cat.prototype.eat=function(mouse){
	Cat.stomach.push(mouse);
}

module.exports=Cat;
