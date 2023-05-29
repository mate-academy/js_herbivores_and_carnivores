'use strict';
class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    const decreaseHealthBy = 50;

    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health -= decreaseHealthBy;

      Animal.alive = Animal.alive
        .filter(value => value.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
