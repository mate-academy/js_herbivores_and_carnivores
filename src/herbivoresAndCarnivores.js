'use strict';

class Animal {
  // write your code here
  constructor (name, health) {
    this.name = name;
    this.health = health;

    if (this.health === undefined) {
      this.health = 100;
    }
    Animal.alive.push(this);
  }

  static removeDeadAnimal(animal) {
    const index = Animal.alive.indexOf(animal);
    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

Animal.alive = [];


class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide () {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite (animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
      if (animal.health <= 0) {
        Animal.removeDeadAnimal(animal);
      }
    }
  }
}


module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
