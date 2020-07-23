var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog("Husky");
var cat = new Cat('Tom');
var mouse = new Mouse('Jerry')

mouse.die();
cat.eat(mouse);
console.log(cat);
