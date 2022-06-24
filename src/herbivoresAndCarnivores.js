'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden
      ? this.hidden = false
      : this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.__proto__ === Herbivore.prototype && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      const index = Animal.alive.indexOf(animal);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
