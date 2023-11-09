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
  constructor(name, health, hidden = false) {
    super(name, health);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
  };
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health -= 50;

      if (animal.health === 0) {
        Animal.alive = Animal.alive.filter(beast => beast.health > 0);
      }
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
