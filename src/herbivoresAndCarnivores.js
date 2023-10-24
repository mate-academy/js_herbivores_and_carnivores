'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.addAnimal(this);
    this.removeDeadAnimal();
  }

  addAnimal(animal) {
    Animal.alive.push(animal);
  }

  removeDeadAnimal() {
    Animal.alive = Animal.alive.filter(animal => animal.health >= 0);
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);

      Animal.alive.splice(index, 1);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal.hidden === true) && animal instanceof Herbivore) {
      animal.decreaseHealth(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
