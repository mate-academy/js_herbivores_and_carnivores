'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = this.health || 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden !== true) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter(item => item.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
