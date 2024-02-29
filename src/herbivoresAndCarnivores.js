'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static removeCorpse() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  death() {
    if (this.health <= 0 && this instanceof Carnivore) {
      Animal.alive.splice(Animal.alive.indexOf(this), 1);
    }
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal.hidden || animal instanceof Carnivore) {
      return;
    }

    if (animal.health <= 50) {
      animal.health = 0;

      Animal.removeCorpse();
    }

    animal.health -= 50;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
