console.log("monkey.js loaded");
/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/
var Monkey = function (name,species) {
  // Important to understand here that the object properties firstName and superheroName
  // are set through the this keyword with the value passed through the constructor function
  this.name = name;
  this.species = species;
  this.foodsEaten = foodsEaten = [];
}


Monkey.prototype.eatSomething = function(food) {
  this.foodsEaten.push(food);
  return this.foodsEaten;
 }

Monkey.prototype.introduce = function(){
   console.log("Monkey name is : " + this.name + ", and The Monkey species is : " + this.species + " And like to eat "+ this.eatSomething(this.foodsEaten[0]));
 }




 /*
use this in the dev tool in the browser.

var monkey_1 = new Monkey('MonkeyA','speciesA');
monkey_1.eatSomething('banana');
monkey_1.introduce();
 */
