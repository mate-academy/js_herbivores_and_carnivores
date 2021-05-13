'use strict';

class Animal {
  static alive = []; // eslint-disable-line no-use-before-define

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;
  constructor(name, health = 100) {
    super(name, health = 100);
  }

  hide() {
    this.hidden = !this.hidden;
    return this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false) {
      animal.health = animal.health - 50;
    }

    Animal.alive = Animal.alive.filter( element => element.health > 0)
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
