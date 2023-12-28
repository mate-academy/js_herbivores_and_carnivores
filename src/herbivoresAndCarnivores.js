'use strict';

class Animal {
 static alive = [];

 constructor(name) {
   this.health = 100;
   this.name = name;
   Animal.addAnimal(this);
 }

 static addAnimal(animal) {
   this.alive.push(animal);
 }

 static removeAnimal(animal) {
   this.alive = this.alive.filter(beast => beast.health > 0);
 }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;

      if (victim.health <= 0) {
        Animal.removeAnimal(victim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
