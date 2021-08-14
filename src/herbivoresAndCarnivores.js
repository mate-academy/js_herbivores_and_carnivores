'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.alive.sort((a, b) => b.health - a.health).pop();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
