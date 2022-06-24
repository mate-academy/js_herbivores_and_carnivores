'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static removeAnimal(animal) {
    Animal.alive = Animal.alive.map(alive => alive.health);
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
  bite(victim) {
    if (!(victim instanceof Carnivore) && !victim.hidden) {
      victim.health -= 50;

      if (!victim.health) {
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
